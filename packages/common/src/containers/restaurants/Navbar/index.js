import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import NavWrapper from '../../../layout/elements/Navbar';
import Button from '../../../layout/elements/Button';
import Box from '../../../layout/elements/Box';
import Logo from '../../../layout/elements/UI/Logo';
import { Container } from './navbar.style';
import styled from 'styled-components';

import logoSrc from '../../../assets/image/app/ayazona.svg';

const RoundButton = styled(Button)`
  border-radius: 30px;
  padding: 9px 21px;
  letter-spacing: 0.72px;
`;

const Overlay = styled(Box)`
  content: "";
  background: linear-gradient(to top,rgba(0,0,0,0),rgba(0,0,0,.5)),linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.45));
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;`;

const NavbarWrapper = styled(NavWrapper)`
  margin: auto;
  padding: 16px 0;
  background-image: url(${({backgroundImage})=> backgroundImage});
  height: 80vh;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  z-index:1
}`;

const Navbar = ({ navbarStyle, logoStyle, buttonStyle, backgroundImage }) => {

  return (
      <NavbarWrapper className="navWrapper" {...navbarStyle} backgroundImage={`https://r.cdn.ayazona.com/${backgroundImage}`}>
        <Overlay className="overlay"/>
        <Container>
          <Logo
            href="/"
            logoSrc={logoSrc}
            logoStyle={logoStyle}
            className="logost"
          />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <RoundButton
              variant="textButton"
              onClick={()=>handleLoginModal()}
              title="LOG IN"
              {...buttonStyle}
            />
            <RoundButton
              {...buttonStyle}
              variant="textButton"
              title="SIGN UP"
              pl="0px"
            />
          </div>
        </Container>
      </NavbarWrapper>
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
