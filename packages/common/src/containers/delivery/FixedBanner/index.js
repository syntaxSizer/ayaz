import React from 'react';
import { Container } from './navbar.style';
import GInput from '../../App/GeoLocation/AutoComplete';
import { setCookie } from '../../../data/store/utils/cookie';
import Router from 'next/router';
import { setPageParams } from '../../../data/store/reducers/cart/actions';
import { useSelector, useDispatch } from 'react-redux';

const Navbar = ({ location, url, secondUrl }) => {
  const [inputVisible, setVisible] = React.useState(false);
  const dispatch = useDispatch();
  const { store } = useSelector(({ _proxy }) => _proxy);
  const [cacheLocation, setLocation] = React.useState({ cityOrArea: location });

  React.useEffect(() => {
    setLocation({ cityOrArea: location });
  }, [location]);

  const updateLocation = () => setVisible(!inputVisible);
  const callback = newLocation => {
    if (!!newLocation && newLocation.lat) {
      setCookie('_store_p', newLocation);
      setLocation(newLocation);
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
    <Container>
      <div className="innerWrapper">
        <div className="infoSection">
          <div className="info">
            <div className="titleSection">
              <div className="titleInfo">
                <div className="innerInfo">
                  <div className="activated">
                    <h2 className="title">
                      <span>Delivery</span>
                    </h2>
                  </div>
                  <a href={url}>
                    <div className="otherside">
                      <h2 className="title">
                        <span>Pickup</span>
                      </h2>
                    </div>
                  </a>
                  <a href={secondUrl}>
                    <div className="otherside">
                      <h2 className="title">
                        <span>Dine in</span>
                      </h2>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="seperator" />
            <div className="location">
              <div className="innerLocation">
                <div>
                  <button onClick={updateLocation} className="button">
                    <svg
                      className="css-rwcr5d"
                      width="16px"
                      height="24px"
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
                    <div className="afterIcon">
                      <h3 className="area">
                        {cacheLocation.cityOrArea}
                        <span
                          style={{
                            color: '#545454',
                            fontSize: '14px',
                          }}
                        >
                          &nbsp;&nbsp;•&nbsp;&nbsp;
                        </span>
                        <span
                          style={{
                            fontSize: '14px',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          Now
                        </span>
                      </h3>
                    </div>
                  </button>
                </div>
                <div
                  style={{
                    maxWidth: 400,
                    position: 'absolute',
                    width: '280px',
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
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

// Navbar style props

export default Navbar;
