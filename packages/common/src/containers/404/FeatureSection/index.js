import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../../layout/elements/Text';
import {FeatureSectionWrapper} from './featureSection.style';


const FeatureSection = ({}) => {
  return (
    <FeatureSectionWrapper>
      <div className="innerBox">
        <div className="titleSection">
          <h1 className="title">404</h1>
        </div>
        <h2 className="secondTitle"><span>Oops. There’s nothing to eat here.</span></h2>
        <Text className="text" content={`The page has moved to a new location or the link may be broken. But don’t worry, you can always start from Home.`} />
        <a className="link" href="/"><button className="button"><span>To The Homepage 🚀</span></button></a>
      </div>
    </FeatureSectionWrapper>
  );
};

export default FeatureSection;
