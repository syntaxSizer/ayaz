import React from 'react';
import PropTypes from 'prop-types';
import NavbarWrapper from '../../../layout/elements/Navbar';
import Logo from '../../../layout/elements/UI/Logo';
import { Container } from './navbar.style';
import logoSrc from '../../../assets/image/careers/ayazona.svg';


const Navbar = ({ navbarStyle, logoStyle, buttonStyle }) => {

  return (
    <NavbarWrapper {...navbarStyle}>
      <Container>
        <Logo
          href="/"
          logoSrc={logoSrc}
          logoStyle={logoStyle}
          className="navBarItems"
        />
        <a className="getAppLink" href="/#get_app_link">Get the App</a>
        
      </Container>
    </NavbarWrapper>
  );
};

// Navbar style props
Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object,
};

Navbar.defaultProps = {
  navbarStyle: {
    minHeight: '70px',
  },
  logoStyle: {
    paddingTop: '10px',
    paddingBottom: '10px',
  },
};

export default Navbar;
