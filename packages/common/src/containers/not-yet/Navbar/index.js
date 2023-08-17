import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import NavWrapper from '../../../layout/elements/Navbar';
import Button from '../../../layout/elements/Button';
 import Link from '../../../layout/elements/Link';
import Logo from '../../../layout/elements/UI/Logo';
import { Container } from './navbar.style';
import styled from 'styled-components';

import logoSrc from '../../../assets/image/careers/ayazona.svg';

const RoundButton = styled(Button)`
  border-radius: 3px;
  padding: 9px 21px;
  letter-spacing: 0.72px;
  color: ${({color})=> color};
  background-color: ${({background})=> background};
`;

const Navbar = ({ logoStyle, buttonStyle }) => {

  return (
        <Container>
          <div className="menuContainer">
          <Logo
            href="/"
            logoSrc={logoSrc}
            logoStyle={logoStyle}
            className="logost"
          />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Link {...{color: "#2D3138", p: "9px 21px"} } href="https://www.ayazona.app.link">
              <span> Download App </span>
            </Link>
            <RoundButton variant="textButton" color="#2D3138" background="transparent" onClick={()=>handleLoginModal()} title="LOG IN" {...buttonStyle} />
            <RoundButton
              color="#f7e4ea" background="#2D3138"
              {...buttonStyle}
              variant="textButton"
              title="SIGN UP"
            />
          </div>
          </div>
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
    fontSize: '12px',
    fontWeight: '600',
    border: '1px solid rgba(45,49,56,0.15)',
  },
  title: {
    fontSize: '.9375rem',
    fontWeight: '500',
  },
};

export default Navbar;
