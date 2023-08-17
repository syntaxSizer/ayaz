import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import NavWrapper from '../../../layout/elements/Navbar';
import Button from '../../../layout/elements/Button';
import Logo from '../../../layout/elements/UI/Logo';
import { Container } from './navbar.style';
import styled from 'styled-components';

import logoSrc from '../../../assets/image/app/ayazona.svg';

const RoundButton = styled(Button)`
  border-radius: 30px;
  padding: 9px 21px;
  letter-spacing: 0.72px;
`;

const NavbarWrapper = styled(NavWrapper)`
  max-width: 1300px;
  margin: auto;
  @media screen and (max-width: 1350px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 800px) {
    padding: 0 15px;
  }
`;

const Navbar = ({ navbarStyle, logoStyle, buttonStyle }) => {
  return (
    <NavbarWrapper {...navbarStyle}>
      <Container>
        <Logo
          href="https://www.ayazona.com"
          logoSrc={logoSrc}
          logoStyle={logoStyle}
          className="logost"
        />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <RoundButton
            variant="textButton"
            onClick={() => handleLoginModal()}
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
