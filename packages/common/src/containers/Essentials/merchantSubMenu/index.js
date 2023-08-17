import React from 'react';
import Text from '../../../layout/elements/Text';
import Image from '../../../layout/elements/Image';
import { HeaderWrapper } from './navbar.style';
import DropdownMenu from '../../../components/Dropdown';
import basketImg from '../../../assets/image/app/basket.svg';
import basketImgBlk from '../../../assets/image/app/basketBlk.svg';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCartState } from '../../../data/store/reducers/cart/actions';
import GInput from '../../App/GeoLocation/AutoComplete';
import Router from 'next/router';
import { setCookie } from '../../../data/store/utils/cookie';
import { setPageParams } from 'common/src/data/store/reducers/cart/actions';

const IconComponent = ({ textContent }) => {
  return (
    <div className="dropInfo">
      <div className="dropText">{textContent}</div>
      <div className="dropIcon">
        <svg width="10" height="6" className="css-0 e46jnzf4">
          <path
            d="M0 1l1-1 4 4 4-4 1 1-5 5z"
            fill="currentColor"
            fill-rule="evenodd"
          ></path>
        </svg>
      </div>
    </div>
  );
};

const formatItemsCount = count => {
  return parseInt(count) > 9 ? '9+' : count;
};

const Navbar = ({ menuItems, location, onlyCartButton = false }) => {
  const basket = useSelector(({ cart }) => Object.values(cart));
  const { store } = useSelector(({ _proxy }) => _proxy);
  const dispatch = useDispatch();
  const [category, setCategory] = React.useState('Categories');
  const [altStyle, setAltStyle] = React.useState(false);
  const [inputVisible, setVisible] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setAltStyle(!!basket.length);
    }, 0);
  }, []);

  React.useEffect(() => {
    setAltStyle(!!basket.length);
  }, [basket]);

  const updateLocation = () => setVisible(!inputVisible);

  const callback = newLocation => {
    if (!!newLocation && newLocation.lat) {
      setCookie('_store_p', newLocation);
      dispatch(
        setPageParams({
          page: 'store',
          params: { ...store, location: newLocation },
        })
      );
      Router.push('/store');
      setVisible(false);
    }
  };

  return (
    <HeaderWrapper altBtnStyle={altStyle}>
      <div className="section">
        {onlyCartButton ? (
          <>&nbsp;</>
        ) : (
          <div className="leftInfo">
            <div className="locationInfo">
              <div className="options">
                <div className="optionsValues">
                  <div className="values">
                    <div className="activated">
                      <h2 className="title">
                        <span>Delivery</span>
                      </h2>
                    </div>
                    <div className="otherside">
                      <h2 className="title">
                        <span>Pickup</span>
                      </h2>
                    </div>
                    <div className="otherside">
                      <h2 className="title">
                        <span>Dine-in</span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="seperator" />
              <div className="icon">
                <div className="iconSection">
                  <button onClick={updateLocation} className="button">
                    <svg
                      className="css-ocn0pe"
                      width="20"
                      height="20"
                      fill="none"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="Deliver to"
                      role="img"
                      focusable="false"
                    >
                      <path
                        d="M17.5834 5.16602C14.5001 2.08268 9.50008 2.08268 6.41675 5.16602C3.33341 8.24935 3.33341 13.3327 6.41675 16.416L12.0001 21.9993L17.5834 16.3327C20.6667 13.3327 20.6667 8.24935 17.5834 5.16602ZM12.0001 12.416C11.0834 12.416 10.3334 11.666 10.3334 10.7493C10.3334 9.83268 11.0834 9.08268 12.0001 9.08268C12.9167 9.08268 13.6667 9.83268 13.6667 10.7493C13.6667 11.666 12.9167 12.416 12.0001 12.416Z"
                        fill="#000000"
                      ></path>
                    </svg>
                    &nbsp;&nbsp;<span className="title">{location.state}</span>
                  </button>
                </div>
                <div
                  style={{
                    maxWidth: 400,
                    position: 'absolute',
                    marginTop: 6,
                    display: inputVisible ? 'block' : 'none',
                  }}
                >
                  <GInput
                    setLocation={callback}
                    placeholder="Enter delivery address"
                    iconStyle={{ display: 'none' }}
                  />
                </div>
              </div>
              <div className="seperator" />
              <div className="dropdown">
                <div className="innerDrop">
                  <DropdownMenu
                    dropdownItems={(menuItems || [])
                      .filter(item => (item.RestaurantMenuItem || []).length)
                      .map(item => (
                        <a
                          key={item.id}
                          className="dpdwn"
                          onClick={e => {
                            e.preventDefault();
                            const elem = document.getElementById(item.id);
                            elem.scrollIntoView({
                              block: 'end',
                              behavior: 'smooth',
                            });
                            // setCategory(item.name.replace(/&amp;/g, '&').replace(/&#039;/g, "'"));
                          }}
                          href={`#${item.id}`}
                        >
                          <span>
                            {' '}
                            {item.name
                              .replace(/&amp;/g, '&')
                              .replace(/&#039;/g, "'")}{' '}
                          </span>
                        </a>
                      ))}
                    content={<IconComponent textContent={category} />}
                  />
                </div>
              </div>
              <div className="seperator" />
            </div>
            <div className="search">
              <span className="searchIcon">
                <div>
                  <svg width="14" height="14">
                    <path
                      stroke="#8F95A3"
                      d="M13.243 12.936l.05-.05-3.419-3.419.266-.347A5.367 5.367 0 005.87.5h-.004a5.367 5.367 0 000 10.733h.004a5.344 5.344 0 003.606-1.391l.352-.32 3.414 3.414z"
                      fill="none"
                    ></path>
                  </svg>
                </div>
              </span>
              <input placeholder="Search items" className="searchInput" />
            </div>
          </div>
        )}
        <div className="basket">
          <div classNaame="innerBasket">
            <div className="basketAction">
              <div className="basketry">
                <button
                  onClick={() => dispatch(toggleCartState())}
                  className="cartButton"
                >
                  <Image
                    className="image"
                    src={altStyle ? basketImg : basketImgBlk}
                    alt="ayazona asset"
                  />
                  <Text
                    className="numberField"
                    content={`${formatItemsCount(basket.length)}`}
                  />
                  <Text className="text" content={` ITEMS`} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
};

// Navbar style props

export default Navbar;
