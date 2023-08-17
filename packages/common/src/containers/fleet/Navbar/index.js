import React from 'react';
import PropTypes from 'prop-types';
import NavWrapper from '../../../layout/elements/Navbar';
import Button from '../../../layout/elements/Button';
import Logo from '../../../layout/elements/UI/Logo';
import { Container } from './navbar.style';
import styled from 'styled-components';
import Box from '../../../layout/elements/Box';

import { DrawerContext } from '../../../contexts/DrawerContext';
import logoWhite from '../../../assets/image/app/ayazona.svg';
import logoBlack from '../../../assets/image/careers/ayazona.svg';

const NavbarWrapper = styled(NavWrapper)`
  margin: auto;
  height: 100px;
  align-items: center;
  display: flex;
  max-width: 1300px;
  border-bottom: 1px solid rgb(217, 219, 223, 0.7);
  @media screen and (max-width: 768px) {
    margin: 0 15px;
    padding: 0;
  }
`;

const CustomButton = styled(Button)`
  border: solid 1px ${({ borderColor }) => borderColor};
  color: ${({ textColor }) => textColor}!important;
  background: ${({ bg }) => bg || 'initial'};
  margin-right: 0px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-family: Ayazona, Helvetica Neue, Helvetica;
  font-size: 16px;
  -webkit-letter-spacing: 0.72px;
  -moz-letter-spacing: 0.72px;
  -ms-letter-spacing: 0.72px;
  letter-spacing: 0.72px;
  font-weight: 600;
  line-height: normal;
  padding: 16px 32px 15px 32px;
  width: 160px;
  border-radius: 100px;
  cursor: pointer;
  white-space: nowrap;
  -webkit-transition: background-color 0.1s ease-in-out;
  transition: background-color 0.1s ease-in-out;
  @media screen and (max-width: 768px) {
    border: none;
    padding: 0;
    background-color: transparent;
    width: auto;
    color: #000 !important;
    margin-left: 16px;
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

const Navbar = ({
  navbarStyle,
  logoStyle,
  buttonStyle,
  btnBG,
  textColor = '#fff',
  borderColor = 'hsla(0,0%,100%,0.3);',
  fWeight,
  logoNumber,
  btnBackgroundColor,
  secondTextColor,
  backgroundImage,
  withOverly,
  height,
  bgColor,
}) => {
  const { state, dispatch } = React.useContext(DrawerContext);
  const [navState, setNavState] = React.useState(false);

  // Toggle drawer
  const toggleHandler = () => {
    if (state === undefined) {
      setNavState(!navState);
      return;
    }
    dispatch({
      type: 'TOGGLE',
    });
  };

  const Wrapper = NavbarWrapper;
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
            logoSrc={logoNumber == 1 ? logoWhite : logoBlack}
            logoStyle={logoStyle}
            className="logost"
          />
        </div>
        <SubMenuWrapper textColor={textColor}>
          <div
            className="webNav"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <a
              href="https://fleet.ayazona.com/login"
              target="_blank"
              rel="nofollow"
            >
              <CustomButton
                variant="textButton"
                title="Log In"
                {...buttonStyle}
                fWeight={fWeight || 600}
                bg={btnBG}
                borderColor={borderColor}
                textColor={textColor}
                style={{ marginRight: '10px' }}
              />
            </a>
            <a
              href="https://fleet.ayazona.com/account/create"
              target="_blank"
              rel="nofollow"
            >
              <CustomButton
                {...buttonStyle}
                variant="textButton"
                title="Sign Up"
                fWeight={fWeight || 600}
                bg={btnBackgroundColor}
                borderColor={borderColor}
                textColor={secondTextColor}
              />
            </a>
          </div>
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
  },
  title: {
    fontSize: '.9375rem',
    fontWeight: '500',
  },
};

export default Navbar;
