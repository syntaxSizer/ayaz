import React from 'react';
import Text from '../../../layout/elements/Text';
import Button from '../../../layout/elements/Button';
import Container from './style';
import Heading from '../../../layout/elements/Heading';
import Link from '../../../layout/elements/Link';
import Dropdown from '../../../components/Dropdown';
import Image from '../../../layout/elements/Image';
import Drawer from '../../../layout/elements/Drawer';
import { useRouter } from 'next/router';
import {
  clearCart,
  removeFromCart,
  fetchSessionCart,
  toggleCartState,
  toggleLocationPickerState,
  toggleModalView,
} from '../../../data/store/reducers/cart/actions';
import { useDispatch, useSelector } from 'react-redux';
import closeIconSrc from '../../../assets/image/app/x.svg';
import {
  makeFlatterwavePayment,
  formatPrice,
  getCurrentDatetime,
} from '../../../utils';
import { API } from '../../../data/Account';
import restaurantAPI from '../../../data/restaurants';
import { addToCart as addTobasket } from '../../../data/store/reducers/cart/actions';
import styled from 'styled-components';
import NextImage from 'next/image';

const defaultOrder = {
  quantity: 1,
  delivery: 1,
  instructions: '',
  device: 'web',
  coupon_id: '',
  list_item: '',
  cod: 1,
  tax: 0.0,
  address_id: '',
  aisle_id: '',
  delivery_fee: '',
  price: '',
  sub_total: '',
  payment_id: 0,
  rider_tip: 0,
  discount: 0,
  user_id: '',
  order_time: '',
  delivery_date_time: '',
  version: '1',
};
let mounted = false;

const ImageContainer = styled.div`
  background-color: transparent;
  transition: opacity 0.4s linear 0s;
  position: relative;
  overflow: hidden;
  width: 70px;
  height: 70px;
  margin-bottom: 16px;
  margin: auto;
  .images {
    object-fit: contain;
  }
`;

const Cart = () => {
  const [address, setAddress] = React.useState(null);
  const [pickup] = React.useState(null);
  const [isProcessing, setIsProcessing] = React.useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const toggleHandler = () => dispatch(toggleCartState());
  const locationToggleHandler = () => dispatch(toggleLocationPickerState());
  const basket = useSelector(({ cart }) => Object.values(cart));
  const { isLoggedIn, user, sessionId } = useSelector(({ auth }) => auth);
  React.useEffect(() => {
    if (isLoggedIn) router.prefetch('/account');
  }, []);
  const [paymentConfirmed, setPaymentConfirmed] = React.useState(false);
  // locationId  suppose to hold integer value and once it is update,
  // it should be preset as the selected address.
  // currently the address endpoint has a bug, hence "locationId" is set to a boolean to allow
  // the code work according to flow "partially"
  // we are not pre-selecting the added address because we don't know which one it is.
  const { cartIsOpen, locationId } = useSelector(({ toggles }) => toggles);
  const [errorMsg, setError] = React.useState(null);
  const ref = React.useRef(null);
  React.useEffect(() => {
    import('@lottiefiles/lottie-player');
  });

  const updateItemQuantity = (item, increment) => {
    dispatch(
      addTobasket({
        item: {
          ...item,
          list_item_quantity: increment ? 1 : -1,
        },
        sessionId,
      })
    );
  };

  const openLoginModal = () =>
    dispatch(toggleModalView({ component: 'LoginModal', isLogIn: true }));

  const [addresses, setAddressOptions] = React.useState([]);
  const [oldIds, setOldIds] = React.useState(
    [...addresses].map(({ Address }) => Address.id)
  );
  const fetchDynamicData = () => {
    fetchAddresses();
    if (basket.length) {
      API.getDeliveryFee({
        user_id: user.user_id,
        aisle_id: 732594,
        sub_total: calculateTotal(),
      }).then(data => {
        if (!mounted) return;
        setAddressOptions(data);
      });
    }
  };

  const fetchAddresses = () => {
    API.getAddresses(user.user_id).then(data => {
      mounted &&
        (data || []).length &&
        setAddressOptions([...addresses, ...(data || [])]);
      // if (locationId) {
      //   console.log("cached ids vs newly fetched ids ", oldIds.length, addresses.length)
      //   if (oldIds.length === addresses.length) {
      //     console.log("recursive fetch because of the bug")
      //     fetchAddresses();
      //     return
      //   }
      //   setAddress(addresses.filter(({ Address }) => oldIds.includes(Address.id))[0])
      // }
      // else {
      //   setOldIds(addresses.map(({ Address }) => Address.id));
      // }
    });
  };

  React.useEffect(() => {
    if (basket.length) {
      API.getDeliveryFee({
        user_id: user.user_id,
        aisle_id: 732594,
        sub_total: calculateTotal(),
      }).then(data => {
        if (!mounted) return;
        setAddressOptions(data);
      });
    }
  }, []);

  React.useEffect(() => {
    mounted = true;
    if (isLoggedIn) {
      fetchDynamicData();
    }
    return () => {
      mounted = false;
      setError(null);
    };
  }, []);

  React.useEffect(() => {
    if (cartIsOpen && isLoggedIn) {
      dispatch(fetchSessionCart(sessionId));
      fetchDynamicData();
    }
  }, [cartIsOpen]);

  React.useEffect(() => {
    if (locationId) {
      fetchAddresses();
    }
  }, [locationId]);

  React.useEffect(() => {
    if (isLoggedIn) {
      fetchDynamicData();
      dispatch(fetchSessionCart(sessionId));
    } else {
      setAddressOptions([]);
      setAddress(null);
    }
  }, [isLoggedIn]);

  React.useEffect(() => {
    setError(null);
  }, [address, pickup]);

  const calculateTotal = () => {
    return basket
      .map(item => item.totalPrice)
      .reduce((a, b) => {
        return a + b;
      }, 0);
  };

  const validateOrder = order => {
    let valid = true;
    if (!order.address_id && !pickup) {
      setError('Select a delivery address');
      valid = false;
    }
    return valid;
  };

  React.useEffect(() => {
    if (mounted && paymentConfirmed) {
      placeOrder();
    }
  }, [paymentConfirmed]);

  const getDisplayDeliveryFee = () =>
    address ? parseInt(address.delivery_fee ?? 0) : 0;

  const wrapperFunc = ({ status }) =>
    status === 'successful' && setPaymentConfirmed(true);

  const makePayment = () => {
    if (!isLoggedIn)
      return dispatch(
        toggleModalView({ component: 'LoginModal', isLogIn: true })
      );
    const payload = {
      ...defaultOrder,
      address_id: pickup ? 0 : address?.id ?? 0,
      user_id: user.user_id,
      aisle_id: 732594,
      list_item: basket,
      price:
        calculateTotal() +
        parseInt(address ? address.delivery_fee ?? 0 : 0) +
        30,
      cod: 1,
      delivery_fee: address ? address.delivery_fee ?? 0 : 0,
      sub_total:
        calculateTotal() + parseInt(address ? address.delivery_fee ?? 0 : 0),
      order_time: getCurrentDatetime(),
      delivery: pickup ? 0 : 1,
      delivery_date_time: getCurrentDatetime(),
    };

    if (!validateOrder(payload)) {
      return;
    }
    makeFlatterwavePayment(
      basket[0].code,
      // 30 is packaging fee
      Math.ceil(
        calculateTotal() +
          parseInt(address ? address.delivery_fee ?? 0 : 0) +
          30
      ),
      user,
      wrapperFunc
    );
  };

  const placeOrder = async () => {
    if (!isLoggedIn) {
      openLoginModal();
      return;
    }

    const payload = {
      ...defaultOrder,
      address_id: pickup ? 0 : address?.id ?? 0,
      user_id: user.user_id,
      aisle_id: 732594,
      list_item: basket,
      price: calculateTotal(),
      cod: 1,
      delivery_fee: address ? address.delivery_fee ?? 0 : 0,
      sub_total: calculateTotal(),
      order_time: getCurrentDatetime(),
      delivery: pickup ? 0 : 1,
      delivery_date_time: getCurrentDatetime(),
    };
    if (!validateOrder(payload)) {
      return;
    }
    setIsProcessing(true);
    restaurantAPI.placeOrder(payload).then(data => {
      if (data) {
        router.push('/orders');
        dispatch(clearCart(sessionId));
        toggleHandler();
      }
      setIsProcessing(false);
    });
  };

  return (
    <Drawer
      className="cartDrawerWrapper"
      width="440px"
      placement="right"
      includeHandler={false}
      open={cartIsOpen}
      toggleHandler={toggleHandler}
    >
      {basket.length ? (
        <Container>
          <div className="cartContent">
            <div className="cartWrapper">
              <button
                className="modalCloseBtn"
                variant="fab"
                onClick={() => toggleHandler()}
              >
                <svg
                  width="15px"
                  height="15px"
                  className="ais-SearchBox-resetIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  {' '}
                  <path d="M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z"></path>{' '}
                </svg>
              </button>
              <div className="basketHeader">
                <Heading className="merchantName" content={`My Basket`} />
              </div>
              <div>
                {basket.map(order => (
                  <div className="contentWrapper">
                    <div className="flexRow">
                      <ImageContainer>
                        <NextImage
                          className="images"
                          layout="fill"
                          src={`https://b.cdn.ayazona.com/${order.list_item_image}`}
                          alt={order.list_item_name
                            .replace(/&amp;/g, '&')
                            .replace(/&#039;/g, "'")}
                        />
                      </ImageContainer>
                      <div className="itemHeader">
                        <div className="itemSection">
                          <span className="flexCol">
                            <div className="itemMenuInfo">
                              <div className="itemName">
                                {order.list_item_name
                                  .replace(/&amp;/g, '&')
                                  .replace(/&#039;/g, "'")}
                              </div>
                              <div className="itemOptions">
                                {(order.list_extra_item || []).map(
                                  option =>
                                    option.id && (
                                      <span>
                                        {option.list_extra_item_name.replace(
                                          /&amp;/g,
                                          '&'
                                        )}
                                        ,{' '}
                                      </span>
                                    )
                                )}
                              </div>
                              <span style={{ display: 'inline-flex' }}>
                                <div
                                  disabled={order.list_item_quantity === 1}
                                  onClick={() => {
                                    if (order.list_item_quantity === 1) {
                                      return;
                                    }
                                    updateItemQuantity(order, false);
                                  }}
                                  className={`itemCount ${
                                    order.list_item_quantity === 1
                                      ? 'disabledBtn'
                                      : ''
                                  }`}
                                >
                                  -
                                </div>
                                <div
                                  style={{
                                    padding: '0 6px',
                                    fontWeight: '500',
                                    margin: 'auto 0',
                                    fontSize: '13px',
                                  }}
                                >
                                  {order.list_item_quantity}
                                </div>
                                <div
                                  onClick={() => {
                                    updateItemQuantity(order, true);
                                  }}
                                  className="itemCount"
                                >
                                  +
                                </div>
                              </span>
                            </div>
                          </span>
                          <span
                            style={{
                              width: '100px',
                              justifyContent: 'space-between',
                            }}
                            className="flexCol"
                          >
                            <Image
                              className="removeBtn"
                              alt="ayazona asset"
                              style={{ alignSelf: 'end' }}
                              onClick={() => {
                                dispatch(
                                  removeFromCart({ item: order, sessionId })
                                );
                              }}
                              src={closeIconSrc}
                            />
                            <div className="itemPrice">
                              <span>{`${order.symbol} ${formatPrice(
                                parseInt(order.list_item_price) *
                                  parseInt(order.list_item_quantity)
                              )}`}</span>
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="actionSectionWrapper">
                <div className="headerSection">
                  <label className="sectionName">
                    Add your delivery address
                  </label>
                </div>
                <div className="cardWrapper">
                  {/* <Switch labelPosition="" labelText="" isMaterial onChange={(v)=>setPickup(v)}/> */}
                  <Text
                    content={
                      <span className="addressDropDownTitle">
                        <Text
                          content={pickup ? 'Pickup' : 'Use a saved address'}
                        />{' '}
                        |
                        {pickup ? (
                          false
                        ) : (
                          <Link
                            className="link"
                            onClick={() => {
                              if (!isLoggedIn) {
                                return openLoginModal();
                              }
                              locationToggleHandler();
                            }}
                          >
                            <span style={{ color: '#fff', fontWeight: '500' }}>
                              Add new address
                            </span>
                          </Link>
                        )}
                      </span>
                    }
                  />
                  {pickup ? (
                    false
                  ) : (
                    <div className="actionBtnWrapper">
                      <Dropdown
                        className="dropDownWrapper"
                        content={
                          (address && address.street) || (
                            <p
                              className="paymentOptionsHeader"
                              onClick={() => {
                                if (!isLoggedIn) {
                                  openLoginModal();
                                  return;
                                }
                              }}
                            >
                              Choose Saved Address{' '}
                              <svg
                                width="10"
                                height="6"
                                style={{ marginLeft: '8px' }}
                              >
                                <path
                                  d="M0 1l1-1 4 4 4-4 1 1-5 5z"
                                  fill="currentColor"
                                  fill-rule="evenodd"
                                ></path>
                              </svg>
                            </p>
                          )
                        }
                        dropdownDirection="down"
                        dropdownItems={(addresses || []).map(({ Address }) => (
                          <Text
                            className="paymentOptionsHeader"
                            onClick={() => {
                              setAddress(Address);
                            }}
                            content={Address.street}
                          />
                        ))}
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="promoCode">
                <div className="inner">
                  <div className="content">
                    <input
                      placeholder="Enter promo code"
                      autocorrect="off"
                      autocomplete="off"
                      class="value"
                      value=""
                    />
                    <button class="action" disabled="">
                      <span>Apply</span>
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div className="summaryWrapper">
                  <div className="itemWrapper">
                    <Text className="information" content={'Subtotal'} />
                    <Text
                      className="information"
                      content={`${
                        basket.length ? basket[0].symbol : 'Ksh'
                      } ${formatPrice(calculateTotal())}`}
                    />
                  </div>
                  <div className="itemWrapper">
                    <Text className="information" content={'Tax'} />
                    <Text
                      className="information"
                      content={`${basket.length ? basket[0].symbol : 'Ksh.'} 0`}
                    />
                  </div>
                  <div className="itemWrapper">
                    <Text className="information" content={'Delivery Fee'} />
                    <b>
                      <Text
                        className="information"
                        content={`${
                          basket.length ? basket[0].symbol : 'Ksh'
                        } ${formatPrice(getDisplayDeliveryFee())}`}
                      />
                    </b>
                  </div>
                  <div className="itemWrapper">
                    <Text className="information" content={'Packaging Fee'} />
                    <Text
                      className="information"
                      content={`${
                        basket.length ? basket[0].symbol : 'Ksh.'
                      } 30`}
                    />
                  </div>
                  <div className="sumTotal">
                    <Text className="total" content={'Total'} />
                    <span key={JSON.stringify(basket)}>
                      {`${
                        basket.length ? basket[0].symbol : 'Ksh'
                      } ${formatPrice(
                        Math.ceil(
                          calculateTotal() + getDisplayDeliveryFee() + 30
                        )
                      )}`}
                    </span>
                  </div>
                  <Text className="error-wrapper" content={errorMsg} />
                  <div {...{ height: 25 }}>
                    {isProcessing && <div id="global-loader" />}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="actionButton">
            <Button
              className="checkoutBtn"
              title={`PAY NOW`}
              onClick={makePayment}
            />
          </div>
        </Container>
      ) : (
        <div style={{ textAlign: 'center' }} className="clearCartWrapper">
          <button
            style={{ border: 'none', cursor: 'pointer' }}
            className="modalCloseBtn"
            variant="fab"
            onClick={() => toggleHandler()}
          >
            <svg
              width="15px"
              height="15px"
              className="ais-SearchBox-resetIcon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              {' '}
              <path d="M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z"></path>{' '}
            </svg>
          </button>
          {/* <Image
            src={cartE}
            alt="ayazona asset"
            style={{paddingTop: '50px'}}
          /> */}
          <lottie-player
            id="firstLottie"
            ref={ref}
            autoplay
            loop
            mode="normal"
            src="https://assets7.lottiefiles.com/packages/lf20_15TIGR.json"
            className="lott"
          ></lottie-player>
          <Heading
            className="emptyCartWrapper"
            content={
              'You haven’t added anything to your basket yet! Start adding your favourite dishes'
            }
          />
        </div>
      )}
    </Drawer>
  );
};

export default Cart;
