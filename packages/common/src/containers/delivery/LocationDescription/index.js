import React from 'react';
import Heading from '../../../layout/elements/Heading';
 import { SectionWrapper, Text } from './locationDescription.style';

const LocationDescription = ({ header, description }) => {
return (
    <SectionWrapper>
      <Heading className="header" content={header} />
      <div className="wrapper">
        <Text className="text">{description}</Text>
      </div>
    </SectionWrapper>
  );
};


export default LocationDescription;
