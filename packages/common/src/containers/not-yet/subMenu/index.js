import React from 'react';
 import Text from '../../../layout/elements/Box';
import { Container } from './navbar.style';

const Navbar = ({ menu }) => {
  
  return (
    <Container>
      <div className="menuWrapper">
        {menu.map((item, idx)=>(
        <div key={idx}>
          <a href={`#${item.name.split(' ').join('-')}`} onClick={(e) => {
            e.preventDefault();
            const elem = document.getElementById(item.name.split(' ').join('-'));
            elem.scrollIntoView();
            }
          }>{item.name}</a>
        </div>))}
      </div>
    </Container>
  );
};

// Navbar style props

export default Navbar;
