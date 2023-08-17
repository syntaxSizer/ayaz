import React from 'react';
import Button from '../../../layout/elements/Button';
import Text from '../../../layout/elements/Box';
import { Container } from './navbar.style';

const Navbar = ({ menu, setCartIsOpen }) => {
  return (
    <Container>
      <div className="menuWrapper">
        {menu.map((item, idx) => (
          <div key={idx}>
            <a
              href={`#${item.name.split(' ').join('-')}`}
              onClick={e => {
                e.preventDefault();
                const elem = document.getElementById(
                  item.name.split(' ').join('-')
                );
                elem.scrollIntoView();
              }}
            >
              {item.name.replace(/&amp;/g, '&').replace(/&#039;/g, "'")}
            </a>
          </div>
        ))}
        <Button onClick={() => setCartIsOpen(true)} title="Shopping cart" />
      </div>
    </Container>
  );
};

// Navbar style props

export default Navbar;
