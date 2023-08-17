import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from '../../../layout/elements/Image';
import Box from '../../../layout/elements/Box';
import Logo from '../../../layout/elements/UI/Logo';
import logoBlack from '../../../assets/image/careers/ayazona.svg';
import mg from '../../../assets/image/app/magnifier.svg';
import { DrawerContext } from '../../../contexts/DrawerContext';
import HamburgMenu from '../../../components/HamburgMenu';
import Drawer from '../../../layout/elements/Drawer';
import styled from 'styled-components';


import {Wrapper, Lever} from './style';
const MobileNavWrapper = styled(Box)`
    display: flex;
    height: 100%;
    justify-content: flex-end;
    padding-bottom: 35px;
    flex-flow: column;
    padding: 0px 32px 32px;
    a {
      color: rgb(32, 33, 37);
      margin-top: 10px;
      transition: all 0.2s ease 0s;
      font-weight: 600;
      font-size: 17px;
      line-height: 1.295;
    }
`
const DomainSection = ({logoStyle, navItems}) => {
  const { state, dispatch } = React.useContext(DrawerContext);
  const toggleHandler = () => {
    dispatch({
      type: 'TOGGLE',
    });
  };
  return (
  <div>
    <Wrapper>
      <Logo
        href="/blog"
        logoSrc={logoBlack}
        logoStyle={logoStyle}
        className="logost"
      />
      <div className="divider"/>
      <div className="searchWrapper">
        <Image className="mgIcon" src={mg} />
        <input className="search"/>
      </div>
      <div className="webNav">
        {navItems.map(item=>(
          <Link href={`/blog/tag/${item.url.split('/')[2]}`}>
            <span className="itemText">{item.label}</span>
          </Link>))}
      </div>
      <Drawer
        className="mobileNav"
        width="308px"
        placement="left"
        drawerHandler={<HamburgMenu barColor={"#000"}/>}
        open={state.isOpen}
        toggleHandler={toggleHandler}>
        <MobileNavWrapper>
          {navItems.map(item=>(
            <a href={`/blog/tag/${item.url.split('/')[2]}`}>
              <span className="itemText">{item.label}</span>
            </a>))}
        </MobileNavWrapper>
      </Drawer>
    </Wrapper>
    <Lever className="margin"/>
  </div>
  );
};

DomainSection.propTypes = {
  logoStyle: PropTypes.object,
};

DomainSection.defaultProps = {
  logoStyle: {
    paddingTop: '10px',
    paddingBottom: '10px',
    color: '#fff',
  },
}

export default DomainSection;
