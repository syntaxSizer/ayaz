import React from 'react';
 import CardWrapper from './banner.style';
      
const preSection = ({ location }) => {
  return (
    <CardWrapper>
        <div className="innerSection">
          <div className="top">
            <span>Delivery</span>
            <svg width="11" height="12" className="css-5hz1ob"><path d="M5.5 5.589h2.357v.798H4.714V1.996H5.5v3.593zM5.5 0A5.5 5.5 0 0111 5.5v.177a5.5 5.5 0 01-11 0V5.5A5.5 5.5 0 015.5 0zm0 .798A4.714 4.714 0 00.786 5.513v.152a4.714 4.714 0 109.428 0v-.152A4.714 4.714 0 005.5.798z" fill="#8F95A3" fillRule="evenodd"></path></svg>
            <span>ASAP</span>
          </div>
          <div className="lower">
            <span key={location.restaurant_id}>{location.state}, {location.city}</span>
            <svg width="10" height="6" className="css-153ygoq"><path d="M0 1l1-1 4 4 4-4 1 1-5 5z" fill="currentColor" fillRule="evenodd"></path></svg>
          </div>
        </div>
        <div className="divide" />
    </CardWrapper>
  );
};

export default preSection;
