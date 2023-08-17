import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import NavbarWrapper from '../../../layout/elements/Navbar';
import Drawer from '../../../layout/elements/Drawer';
import Button from '../../../layout/elements/Button';
import Logo from '../../../layout/elements/UI/Logo';
import HamburgMenu from '../../../components/HamburgMenu';
import ScrollSpyMenu from '../../../components/ScrollSpyMenu';
import { Container } from './navbar.style';
import { openModal, closeModal } from '@redq/reuse-modal';

import LogoImage from '../../../assets/image/app/logo.svg';

import { DrawerContext } from '../../../contexts/DrawerContext';

import data from '../../../data/About/MenuItems';

// Default close button for modal
const CloseModalButton = () => (
  <button style={{border: 'none', cursor: 'pointer'}} className="modalCloseBtn" variant="fab" onClick={() => closeModal()}>
      <svg width="15px" height="15px" className="ais-SearchBox-resetIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"> <path d="M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z"></path> </svg>
  </button>
);
const CloseModalButtonAlt = () => (
  <button className="modalCloseBtn alt" variant="fab" onClick={() => closeModal()}>
      <svg width="15px" height="15px" className="ais-SearchBox-resetIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"> <path d="M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z"></path> </svg>
  </button>
);
const Navbar = ({ navbarStyle, logoStyle, buttonStyle }) => {
  const { state, dispatch } = useContext(DrawerContext);
  // Search modal handler
  const handleSearchModal = () => {
    openModal({
      config: {
        className: 'search-modal',
        disableDragging: true,
        default: {
          width: '100%',
          height: '100%',
          x: 0,
          y: 0,
        },
      },
      component: SearchPanel,
      componentProps: {},
      closeComponent: CloseModalButtonAlt,
      closeOnClickOutside: false,
    });
  };
  // Authentication modal handler
  const handleLoginModal = () => {
    openModal({
      config: {
        className: 'login-modal',
        disableDragging: true,
        default: {
          width: '100%',
          height: '100%',
          x: 0,
          y: 0,
        },
      },
      component: LoginModal,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: false,
    });
  };
  // Toggle drawer
  const toggleHandler = () => {
    dispatch({
      type: 'TOGGLE',
    });
  };

  return (
    <NavbarWrapper {...navbarStyle}>
      <Container>
        <Logo
          href="/"
          logoSrc={LogoImage}
          title="Lyoneer"
          logoStyle={logoStyle}
          className="logost"
        />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* <Link href="https://explore.lyoneer.com" >
            <a rel="nofollow" target="_blank">
              <Button
                variant="textButton"
                title="Explore"
                className="btn_mob"
              />
            </a>
          </Link> */}
          <Link href="/about" >
            <a>
              <Button
                variant="textButton"
                title="About"
                className="btn_mob"
              />
            </a>
          </Link>
          <Link href="/security" >
            <a>
              <Button
                variant="textButton"
                title="Security"
                className="btn_mob"
              />
            </a>
          </Link>
          <Link href="" >
            <a>
              <Button
                variant="textButton"
                title="Sign in"
                className="btn_mob"
              />
            </a>
          </Link>
          <Link href="" >
            <a>
              <Button
                title="Get Started"
              />
            </a>
          </Link>
    
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
    minHeight: '70px',
    padding: '2.5rem 0',
  },
  logoStyle: {
    width: '25%',
    paddingTop: '10px',
    paddingBottom: '10px',
  },
  buttonStyle: {
    color: '#fff',
    background: '#611f69',
    color: '#fff',
    padding: '10px',
  },
  title: {
    fontSize: '.9375rem',
    fontWeight: '900',
  }
};

export default Navbar;
