import React from 'react';
import ContainerWrapper from './banner.style';

const StoreBanner = ({ title }) => {
  return (
    <ContainerWrapper>
      <h1 className="header">{title}</h1>
    </ContainerWrapper>
  );
};

export default StoreBanner;
