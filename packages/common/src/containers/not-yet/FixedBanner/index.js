import React from 'react';
import { Container } from './navbar.style';
import Image from '../../../layout/elements/Image';
import Text from '../../../layout/elements/Text';
 import { chevronRight } from 'react-icons-kit/ionicons/chevronRight';
import { Icon } from 'react-icons-kit';




const Navbar = ({ location }) => {
  
  return (
    <Container>
      <div className="wrapper">
        <span className="text"> PREPARING FOR: </span>
        <span className="text">  {location} </span>
        <Icon icon={chevronRight} className="icon" />
      </div>
     
    </Container>
  );
};

// Navbar style props

export default Navbar;
