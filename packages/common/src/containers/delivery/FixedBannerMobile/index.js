import React from 'react';
import { MobileNav } from './navbar.style';
 

const MobileNavBar = ({ location, title }) => {
  
  return (
      <MobileNav>
        <button className="areaMobile">
          <div className="buttonInfo">
            <span>{title}</span>
            <div className="destination">
              {location}
              <svg width="10" height="6" className="css-3xtkqa e37icmp2"><path d="M0 1l1-1 4 4 4-4 1 1-5 5z" fill="currentColor" fill-rule="evenodd"></path></svg>
            </div>
          </div>
        </button>
        <div className="blocking" />
      </MobileNav>
  );
};

export default MobileNavBar;
