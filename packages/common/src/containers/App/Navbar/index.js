import React from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import NavWrapper from '../../../layout/elements/Navbar';
import Button from '../../../layout/elements/Button';
import Logo from '../../../layout/elements/UI/Logo';
import Box from '../../../layout/elements/Box';
import { Container } from './navbar.style';
import styled from 'styled-components';

import { DrawerContext } from '../../../contexts/DrawerContext';
import HamburgMenu from '../../../components/HamburgMenu';
import Drawer from '../../../layout/elements/Drawer';
import logoWhite from '../../../assets/image/app/ayazona.svg';
import logoBlack from '../../../assets/image/careers/ayazona.svg';

import Text from '../../../layout/elements/Text';
import Link from '../../../layout/elements/Link';
import Dropdown from '../../../components/Dropdown';
import { logout } from '../../../data/store/reducers/auth/actions';
import { useDispatch, useSelector } from 'react-redux';
import data from '../../../data/App/MenuItems';
import AlgoliaSearch from '../Algolia';
import { toggleModalView } from '../../../data/store/reducers/cart/actions';

const NavbarWrapper = styled(NavWrapper)`
  margin: auto;
  padding: 10px 0;
  height: 72px;
  background-color: ${({ bgColor }) => bgColor || 'initial'};
`;

const CustomButton = styled(Button)`
  border: solid 1px ${({ borderColor }) => borderColor};
  color: ${({ textColor }) => textColor}!important;
  background: ${({ bg }) => bg || 'initial'};
  margin-right: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Ayazona, Helvetica Neue, Helvetica;
  font-size: 12px;
  letter-spacing: 0.72px;
  font-weight: 600;
  text-transform: uppercase;
  line-height: normal;
  height: 32px;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 16px;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 0.1s ease-in-out;
  min-width: 86px;
`;

const MobileButton = styled(Button)`
  border: solid 1px ${({ borderColor }) => borderColor};
  color: ${({ textColor }) => textColor}!important;
  background: ${({ bg }) => bg || 'initial'};
  margin-right: 0px;
  display: none;
  justify-content: center;
  align-items: center;
  font-family: Ayazona, Helvetica Neue, Helvetica;
  font-size: 12px;
  letter-spacing: 0.72px;
  font-weight: 600;
  text-transform: uppercase;
  line-height: normal;
  height: 32px;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 16px;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 0.1s ease-in-out;
  min-width: 86px;
  @media screen and (max-width: 1000px) {
    display: flex;
  }
`;

const Overlay = styled(Box)`
  content: '';
  background: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)),
    linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.45));
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
`;

const NavbarWrapperWithBackground = styled(NavWrapper)`
  margin: auto;
  padding: 16px 0;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  height: 280px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  z-index: 1;
  @media screen and (max-width: 767px) {
    height: 200px;
  }
`;

const AvataWrapper = styled.div`
  color: ${({ textColor }) => textColor || '#fff'};
  font-weight: 600;

  .header {
    margin: 0;
  }

  .dropdownWrapper {
    color: #222;
    margin-top: 30px;
    right: 0px;
    height: fit-content;
    border-radius: 0;
    min-width: 215px;
    width: 215px;
    :before {
      margin-left: -9px;
      border-bottom-color: rgb(242, 243, 243) !important;
      border-width: 9px !important;
      border: solid transparent;
      position: absolute;
      width: 0px;
      height: 0px;
      content: '';
      bottom: 100%;
      left: calc(50% - -60px);
    }
    .nav-item {
      margin: 0;
      color: #202125;
      font-size: 16px;
      letter-spacing: -0.28px;
      font-weight: 400;
      line-height: normal;
      color: rgb(45, 49, 56);
    }

    .blue {
      font-weight: 600;
    }
  }
`;

const Avatar = ({ data, textColor, logMeOut }) => {
  return (
    <AvataWrapper textColor={textColor}>
      <Dropdown
        className="dropdownWrapper"
        content={
          <button className="actionButton">
            <span className="name">
              {data.first_name} {data.last_name}
            </span>
            <svg
              role="img"
              height="16"
              width="16"
              className="dIsYZz"
              fill="#fff"
              viewBox="0 0 16 16"
            >
              <path d="M3 6l5 5.794L13 6z"></path>
            </svg>
          </button>
        }
        dropdownItems={[
          <Link href="/orders">
            <Text className="nav-item" content={'Order History'} />
          </Link>,
          <Link href="/favorites">
            <Text className="nav-item" content={'Your Favorites'} />
          </Link>,
          <Link href="/account">
            <Text className="nav-item" content={'Account Settings'} />
          </Link>,
          <Link href="/wallet">
            <Text className="nav-item" content={'Ayazona Wallet'} />
          </Link>,
          <Link href="/referral">
            <Text className="nav-item" content={'Earn Ayazona Credits'} />
          </Link>,
          <Text
            onClick={logMeOut}
            className="nav-item blue"
            content={'Sign 0ut'}
          />,
        ]}
        dropdownDirection="down"
      ></Dropdown>
    </AvataWrapper>
  );
};

const SubMenuWrapper = styled(Box)`
  align-items: baseline;
  display: flex;
  .item {
    font-size: 12px;
    color: ${({ textColor }) => textColor || '#fff'};
    margin-right: 24px;
    border-bottom: transparent;
    padding-bottom: 6px;
    margin-bottom: -6px;
    padding-right: 0px;
    padding-left: 0px;
    border-radius: 0px;
    transition: all 0.4s;
    .itemText {
      margin-bottom: 4px;
      font-weight: 300;
      letter-spacing: 1.3px;
      font-family: BigHearted;
    }
    &:hover {
      border-bottom: 1px solid ${({ textColor }) => textColor || '#fff'};
    }
  }
  .bordered {
    border-bottom: 1px solid ${({ textColor }) => textColor || '#fff'};
  }
`;
const MobileNavWrapper = styled(Box)`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  padding-bottom: 35px;
  flex-flow: column;
  padding: 0px 32px 32px;
  a {
    color: #202125;
    margin-top: 10px;
    transition: all 0.2s;
    font-weight: 500;
    font-size: 17px;
    line-height: 1.4;
  }
`;

const Search = styled.div`
  width: 60%;
  margin-right: 10px;
  position: relative;
  .form-group {
  }
  .recipe {
    padding: 10px;
    font-size: 16px;
    border-radius: 8px;
    box-shadow: rgb(0 0 0 / 5%) 0px 2px 4px 0px inset;
    background-color: rgb(246, 247, 248);
    border: none;
    height: 50px;
    letter-spacing: 0px;
    font-family: BigHearted;
    display: flex;
    padding-left: 16px;
    flex-wrap: nowrap;
    width: 100%;
    appearance: none;
    font-weight: 600;
    font-size: 15px;
    background-image: none;
    border-color: rgb(246, 247, 248);
    border: 2px;
    margin: -2px;
    :focus-within {
      border: 2px solid rgb(52, 53, 56);
    }
    ::placeholder {
      color: #343638;
      opacity: 1;
    }

    :-ms-input-placeholder {
      color: #343638;
    }

    ::-ms-input-placeholder {
      color: #343638;
    }
    @media (max-width: 767px) {
      padding: 10px;
      height: 40px;
      font-weight: 500;
      font-size: 12px;
    }
  }
  .btn-search {
    position: absolute;
    top: 55%;
    right: 10px;
    transform: translateY(-50%);
    border: none;
    background-color: transparent;
  }
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
  .glyphicon {
    position: relative;
    top: 1px;
    display: inline-block;
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
  }
`;

const Navbar = ({
  highlightItem,
  navbarStyle,
  logoStyle,
  buttonStyle,
  btnBG,
  textColor = '#fff',
  searchColor,
  borderColor = 'hsla(0,0%,100%,0.3);',
  fWeight,
  logoNumber,
  btnBackgroundColor,
  secondTextColor,
  withBackground,
  backgroundImage,
  withOverly,
  height,
  bgColor,
  showSubMenu = true,
  showSearch = false,
  currentPage,
}) => {
  const { state, dispatch } = React.useContext(DrawerContext);
  const [navState, setNavState] = React.useState(false);
  const { isLoggedIn, user } = useSelector(({ auth }) => auth);
  const dispatchStorAction = useDispatch();
  const router = useRouter();

  const logMeOut = async () => {
    if (state && state.isOpen) {
      toggleHandler();
    }
    if (currentPage === 'me') {
      await router.push('/');
    }
    dispatchStorAction(logout());
  };

  const handleLoginModal = isLogIn => {
    dispatchStorAction(toggleModalView({ component: 'LoginModal', isLogIn }));
  };

  const toggleHandler = () => {
    if (state === undefined) {
      setNavState(!navState);
      return;
    }
    dispatch({
      type: 'TOGGLE',
    });
  };

  const Wrapper = withBackground ? NavbarWrapperWithBackground : NavbarWrapper;
  return (
    <Wrapper
      borderColor={borderColor}
      textColor={textColor}
      bgColor={bgColor}
      height={height}
      backgroundImage={backgroundImage}
      {...navbarStyle}
    >
      {withOverly ? <Overlay /> : false}
      <Container>
        <div className="logoAndSearchWrapper">
          <Logo
            href="/"
            title="Ayazona.com"
            logoSrc={logoNumber == 1 ? logoWhite : logoBlack}
            logoStyle={logoStyle}
            className="logost"
          />
          {/* {showSearch && (
            <AlgoliaSearch textColor={textColor} searchColor={searchColor} />
          )} */}
        </div>
        {showSearch && (
          <Search className="recipe-search-form">
            <form action="/search" role="Search">
              <div className="form-group">
                <input
                  type="text"
                  name="q"
                  className="recipe"
                  placeholder="Search products"
                ></input>
              </div>
            </form>
            <button className="btn-search" aria-label="Search icon">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="#343538"
                xmlns="http://www.w3.org/2000/svg"
                size="18"
                color="systemGrayscale70"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.396 14.275a7 7 0 10-2.121 2.121l3.664 3.665a1.5 1.5 0 002.122-2.122l-3.665-3.664zM10.5 14.5a4 4 0 110-8 4 4 0 010 8z"
                ></path>
              </svg>
            </button>
          </Search>
        )}
        <SubMenuWrapper textColor={textColor}>
          {showSubMenu ? (
            <>
              <Link
                href="/store"
                className={
                  highlightItem === 'food'
                    ? 'item bordered webNav'
                    : 'item webNav'
                }
              >
                <span className="itemText">STORE</span>
              </Link>
              <Link
                href="/recipes"
                className={
                  highlightItem === 'recipes'
                    ? 'item bordered webNav'
                    : 'item webNav'
                }
              >
                <span className="itemText">COOKBOOK</span>
              </Link>
              {/* <Link
                href="/fresh"
                className={
                  highlightItem === 'fresh'
                    ? 'item bordered webNav'
                    : 'item webNav'
                }
              >
                <span className="itemText">FRESH</span>
              </Link>
              <Link
                href="/essentials"
                className={
                  highlightItem === 'essentials'
                    ? 'item bordered webNav'
                    : 'item webNav'
                }
              >
                <span className="itemText">ESSENTIALS</span>
              </Link> */}
              <Link
                href="/ignite"
                className={
                  highlightItem === 'ignite'
                    ? 'item bordered webNav'
                    : 'item webNav'
                }
              >
                <span className="itemText">IGNITE</span>
              </Link>
            </>
          ) : (
            false
          )}
          {isLoggedIn ? (
            <div
              className="webNav"
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'end',
                width: 'auto',
              }}
            >
              <Avatar logMeOut={logMeOut} textColor={textColor} data={user} />
            </div>
          ) : (
            <div
              className="webNav"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '180px',
              }}
            >
              <CustomButton
                variant="textButton"
                onClick={() => handleLoginModal(true)}
                title="LOG IN"
                {...buttonStyle}
                fWeight={fWeight || 600}
                bg={btnBG}
                borderColor={borderColor}
                textColor={textColor}
                style={{ marginRight: '10px' }}
              />
              <CustomButton
                {...buttonStyle}
                onClick={() => handleLoginModal(false)}
                variant="textButton"
                title="SIGN UP"
                fWeight={fWeight || 600}
                bg={btnBackgroundColor}
                borderColor={borderColor}
                textColor={secondTextColor}
              />
            </div>
          )}
          {isLoggedIn ? (
            <>
              <Drawer
                className="mobileNav"
                width="308px"
                placement="left"
                drawerHandler={<HamburgMenu barColor={textColor} />}
                open={state ? state.isOpen : navState}
                toggleHandler={toggleHandler}
              >
                <MobileNavWrapper>
                  {/* {data.menuItems.map(m => (<Link href={m.path}><Text content={m.label} /></Link>))} */}

                  <Link href="/account">
                    <Text content="Account" />
                  </Link>
                  <Link href="/orders">
                    <Text content="Orders" />
                  </Link>
                  <Link href="/favorites">
                    <Text content="Favorites" />
                  </Link>
                  <Link href="/wallet">
                    <Text content="Wallet" />
                  </Link>
                  <Link href="/referral">
                    <Text content="Credits" />
                  </Link>
                  <Link
                    href="https://help.ayazona.com/kb/en/customer-help"
                    target="_blank"
                  >
                    <Text content="Help" />
                  </Link>
                  {isLoggedIn ? (
                    <Link onClick={() => logMeOut()}>
                      <Text content="Logout" />{' '}
                    </Link>
                  ) : (
                    false
                  )}
                </MobileNavWrapper>
              </Drawer>
            </>
          ) : (
            <MobileButton
              variant="textButton"
              onClick={() => handleLoginModal(true)}
              title="LOG IN"
              {...buttonStyle}
              fWeight={fWeight || 600}
              bg={btnBackgroundColor}
              borderColor={borderColor}
              textColor={secondTextColor}
              style={{ width: 'auto' }}
            />
          )}
        </SubMenuWrapper>
      </Container>
    </Wrapper>
  );
};

// Navbar style props
Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object,
  buttonStyle: PropTypes.object,
  wrapperStyle2: PropTypes.object,
};

Navbar.defaultProps = {
  navbarStyle: {
    as: 'section',
    minHeight: '70px',
    margin: 'auto',
    height: '70px',
    maxWidth: '1300px',
    padding: '0 30px',
    flexWrap: 'wrap',
  },
  logoStyle: {
    paddingTop: '10px',
    paddingBottom: '10px',
    color: '#fff',
  },
  buttonStyle: {
    color: '#fff',
    fontSize: '12px',
    fontWeight: '600',
    background: '#611f69',
    border: 'solid 1px #fff',
    fontFamily: 'BigHearted',
  },
  title: {
    fontSize: '.9375rem',
    fontWeight: '500',
  },
};

export default Navbar;
