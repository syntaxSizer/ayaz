import React, { Fragment } from 'react';
import Text from '../../../layout/elements/Text';
import Heading from '../../../layout/elements/Heading';
import Button from '../../../layout/elements/Button';
import Container from './style';
import Card from '../../../layout/elements/Card';
import {
  addToCart as addTobasket,
  fetchSessionCart,
  toggleModalView,
} from '../../../data/store/reducers/cart/actions';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '@redq/reuse-modal';
import { formatPrice } from '../../../utils';
import { ModalBlock, ModalOverlay } from '../../App/Modal/styles';
import NextImage from 'next/image';
import styled from 'styled-components';

const ImageContainer = styled.div`
  background-color: transparent;
  transition: opacity 0.4s linear 0s;
  position: relative;
  overflow: hidden;
  width: 300px;
  height: 300px;
  margin: auto;
  .images {
    object-fit: contain;
  }
`;
let firebaseMenuItemsJson = [];
const MenuModal = () => {
  const [Restaurant, setRestaurant] = React.useState(null);
  const [quantity, setQuantity] = React.useState(1);
  const { modalIsOpen, metadata } = useSelector(({ toggles }) => toggles);
  const [currency, setCurrency] = React.useState('');
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    if (!modalIsOpen || !metadata || metadata.component !== 'MenuModal') {
      return;
    }
    setCurrency(metadata.currency);
    setData(metadata.data);
    if (!!metadata.restaurant && metadata.restaurant.id) {
      setRestaurant(metadata.restaurant);
      return;
    }
    const { Restaurant, Aisle } = metadata.restaurant;
    setRestaurant(Restaurant || Aisle);
  }, [metadata]);

  const QuantityBtns = () => (
    <div className="actionButton">
      <Button
        className="btn"
        onClick={() => (quantity === 1 ? false : setQuantity(quantity - 1))}
        title="-"
      />
      <Button className="btn" title={quantity} />
      <Button
        className="btn"
        onClick={() => setQuantity(quantity + 1)}
        title="+"
      />
    </div>
  );

  const CartBtn = ({ data, priceAdditions }) => {
    return (
      <Fragment>
        <button
          className="addToCartBtn"
          onClick={() => {
            addItem(data);
          }}
        >
          ADD{' '}
          <span className="cartQuantity">{`${currency.symbol} ${formatPrice(
            parseInt(data.price) * quantity + priceAdditions
          )}`}</span>
        </button>
      </Fragment>
    );
  };

  const CloseModalButton = () => (
    <button
      onClick={hideModal}
      style={{ border: 'none', cursor: 'pointer' }}
      className="modalCloseBtn"
      variant="fab"
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
  );

  const dispatch = useDispatch();
  const { sessionId } = useSelector(({ auth }) => auth);

  let firebaseExtraMenuItemsJson = [];

  const totalReducer = (accumulator, item) => {
    return accumulator + parseInt(item.price || 0) * quantity;
  };

  const calculatePriceAdditions = items => {
    return Object.values(items).reduce(totalReducer, 0);
  };
  const isSelected = id => !!selectedItems[id];
  const isRadioSelected = (menuId, itemId) => {
    return !!radioItems[menuId] && !!radioItems[menuId][itemId];
  };
  const reducer = (state, action) => {
    const newState = { ...state };
    switch (action.type) {
      case 'add':
        newState[action.item.id] = action.item;
        firebaseExtraMenuItemsJson = [
          ...firebaseExtraMenuItemsJson,
          {
            id: action.item.id,
            list_item_image: action.item.image,
            list_extra_item_name: action.item.name,
            list_extra_item_price: action.item.price,
            list_extra_item_quantity: quantity,
            symbol: currency.symbol,
            code: currency.code,
          },
        ];
        return newState;
      case 'remove':
        delete newState[action.item.id];
        firebaseMenuItemsJson = firebaseMenuItemsJson.filter(
          item => item.id !== action.item.id
        );
        return newState;
      case 'clear':
        return {};
      default:
        return state;
    }
  };
  const [selectedItems, dispatchMenuAction] = React.useReducer(reducer, {});
  const [radioItems, setRadioItem] = React.useState({});
  const [hasError, setError] = React.useState('');
  const addItem = data => {
    const requiredItems = (data.RestaurantMenuExtraSection || []).filter(
      ({ required }) => parseInt(required) > 0
    );
    if (Object.values(radioItems).length !== requiredItems.length) {
      setError('Missing Required item');
      return;
    }
    Object.values(radioItems).forEach(item => {
      const firebaseItem = Object.values(item)[0];
      firebaseExtraMenuItemsJson = [
        ...firebaseExtraMenuItemsJson,
        {
          id: firebaseItem.id,
          list_extra_item_name: firebaseItem.name,
          list_extra_item_price: firebaseItem.price,
          list_extra_item_quantity: quantity,
          symbol: currency.symbol,
          code: currency.code,
        },
      ];
    });

    let firebaseMenuItemJson = {
      created: new Date(),
      id: data.id,
      restaurant_id: Restaurant.id,
      list_extra_item: [
        ...firebaseExtraMenuItemsJson,
        ...Object.values(selectedItems).map(item => ({
          id: item.id,
          list_extra_item_name: item.name,
          list_extra_item_price: item.price,
          list_extra_item_quantity: quantity,
          symbol: currency.symbol,
        })),
      ],
      list_item_image: data.image,
      list_item_name: data.name,
      list_item_price: data.price,
      list_item_quantity: quantity,
      symbol: currency.symbol,
      code: currency.code,
      tax_free: Restaurant.tax_free,
      taxpersent: 0,
      totalPrice:
        parseInt(data.price) * quantity +
        calculatePriceAdditions(selectedItems) +
        calculatePriceAdditions(
          Object.values(radioItems).map(item => Object.values(item)[0])
        ),
    };
    dispatch(
      addTobasket({
        item: firebaseMenuItemJson,
        sessionId,
      })
    );
    hideModal();
  };

  const hideModal = () => {
    setError(null);
    setRadioItem({});
    dispatchMenuAction({ type: 'clear' });
    dispatch(toggleModalView());
    setQuantity(1);
  };
  // React.useEffect(()=>{
  //   if (restaurant.id) {
  //     setRestaurant(restaurant)
  //     return;
  //   }
  //   setRestaurant(restaurant.Restaurant)
  // },[restaurant])

  return (
    <>
      {modalIsOpen &&
        !!metadata &&
        metadata.component === 'MenuModal' &&
        !!data && (
          <ModalBlock>
            <ModalOverlay />
            <CloseModalButton />
            <Container>
              <Card className="menuInfo">
                <Heading
                  className="header"
                  content={data.name
                    .replace(/&amp;/g, '&')
                    .replace(/&#039;/g, "'")}
                />
                <Text
                  className="description"
                  content={data.description
                    .replace(/&quot;/g, '"')
                    .replace(/&amp;/g, '&')
                    .replace(/&#039;/g, "'")}
                />
                {/* <Text className="price" content={formatPrice(parseInt(data.price))} /> */}
                <Text content={hasError} className="errorWrapper" />
              </Card>
              <div className="mainCard">
                {/* <Image className="itemImage" src={`https://r.cdn.ayazona.com/${data.image}`} /> */}
                {!!data.AisleListExtraSection &&
                data.AisleListExtraSection.length ? (
                  <Card className="menuCard">
                    {data.AisleListExtraSection.map(subMenu => (
                      <>
                        <div className="headerWrapper">
                          <span className="menuSection">
                            {subMenu.name
                              .replace(/&amp;/g, '&')
                              .replace(/&#039;/g, "'")}
                          </span>
                          <span className="helperText">
                            {' '}
                            {parseInt(subMenu.required) ? 'REQUIRED' : ''}{' '}
                          </span>
                        </div>
                        <ul>
                          {subMenu.RestaurantMenuExtraItem.map(item => (
                            <li className="optionWrapper">
                              {parseInt(subMenu.required) ? (
                                <span
                                  onClick={() => {
                                    setError(null);
                                    setRadioItem({
                                      ...radioItems,
                                      [subMenu.id]: { [item.id]: item },
                                    });
                                  }}
                                >
                                  <input
                                    type="radio"
                                    checked={isRadioSelected(
                                      subMenu.id,
                                      item.id
                                    )}
                                    value={item.name
                                      .replace(/&amp;/g, '&')
                                      .replace(/&#039;/g, "'")}
                                    name={`RadioOption-${subMenu.id}`}
                                  />
                                  {item.name
                                    .replace(/&amp;/g, '&')
                                    .replace(/&#039;/g, "'")}
                                </span>
                              ) : (
                                <span
                                  onClick={() => {
                                    if (isSelected(item.id)) {
                                      dispatchMenuAction({
                                        type: 'remove',
                                        item,
                                        sessionId,
                                      });
                                      return;
                                    }
                                    dispatchMenuAction({ type: 'add', item });
                                  }}
                                >
                                  <input
                                    type="checkbox"
                                    checked={isSelected(item.id)}
                                    value={item.name
                                      .replace(/&amp;/g, '&')
                                      .replace(/&#039;/g, "'")}
                                    name="checkBoxOption"
                                  />
                                  {item.name
                                    .replace(/&amp;/g, '&')
                                    .replace(/&#039;/g, "'")}
                                </span>
                              )}
                              {parseInt(item.price || 0) ? (
                                <span className="priceAdditionsWrapper">
                                  <i>+{formatPrice(item.price)}</i>
                                </span>
                              ) : (
                                false
                              )}
                            </li>
                          ))}
                        </ul>
                      </>
                    ))}
                  </Card>
                ) : (
                  <ImageContainer>
                    <NextImage
                      className="images"
                      layout="fill"
                      src={`https://b.cdn.ayazona.com/${data.image}`}
                      alt={data.name
                        .replace(/&amp;/g, '&')
                        .replace(/&#039;/g, "'")}
                    />
                  </ImageContainer>
                )}
              </div>
              <Card className="actionBtnsWrapper">
                <div className="btnsWrapper">
                  <QuantityBtns />
                </div>
                <div className="btnsWrapper">
                  <CartBtn
                    priceAdditions={
                      calculatePriceAdditions(selectedItems) +
                      calculatePriceAdditions(
                        Object.values(radioItems).map(
                          item => Object.values(item)[0]
                        )
                      )
                    }
                    data={data}
                  />
                </div>
              </Card>
            </Container>
          </ModalBlock>
        )}
    </>
  );
};

export default MenuModal;
