import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import NavbarWrapper from '../../../layout/elements/Navbar';
import Button from '../../../layout/elements/Button';
import Logo from '../../../layout/elements/UI/Logo';
import { Container } from './navbar.style';

import styled from 'styled-components';
import logoSrc from '../../../assets/image/careers/ayazona.svg';

const Navbar = ({ navbarStyle, logoStyle, buttonStyle }) => {
  const CustomButton = styled(Button)`
    border-radius: 30px;
    border: solid 1px #fff;
    padding: 10px 10px !important;
    letter-spacing: 0.72px;
    color: ${({ clr }) => clr}!important;
    font-size: 13px !important;
    font-weight: 500;
    background: ${({ bg }) => bg || 'initial'};
    margin-right: 0px;
  `;

  return (
    <Container>
      <NavbarWrapper {...navbarStyle}>
        <Logo
          href="https://www.ayazona.com"
          logoSrc={logoSrc}
          logoStyle={logoStyle}
          className="logost"
        />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link href="">
            <Button variant="textButton" title="Log In" {...buttonStyle} />
          </Link>
          <Link href="">
            <CustomButton clr="#fff" variant="textButton" title="Sign Up" />
          </Link>
          <Link href="">
            <CustomButton clr="#000" bg="#fff" variant="textButton" title="Get the App" />
          </Link>
        </div>
    </NavbarWrapper>
    </Container>
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
    minHeight: '70px',
  },
  logoStyle: {
    paddingTop: '10px',
    paddingBottom: '10px',
  },
  buttonStyle: {
    color: "#fff",
    background: '#611f69',
    padding: '10px 15px',
    mr: '10px',
  },
  title: {
    fontSize: '.9375rem',
    fontWeight: '700',
  },
};

export default Navbar;
