import React from 'react';
import Text from '../../../layout/elements/Text';
import Heading from '../../../layout/elements/Heading';
import Link from '../../../layout/elements/Link';
import Image from '../../../layout/elements/Image';
import {BackgroundWrapper, FeatureSectionWrapper} from './featureSection.style';

const FeatureSection = ({
    header,
    subText="We are here, just preparing for the ground-break. We are putting the lego bricks together.",
    actionBtn=null
  }) => {
  return (
    <FeatureSectionWrapper>
      <Image src="https://cdn.ayazona.com/web-assets/img/coming-soon.jpg"   alt="ayazona asset" />
      <Heading content={header} />
      <Text className="text" content={subText} />
      {actionBtn ? actionBtn :<Link href="/">
        <span>Get yourself ready for affordability</span>
      </Link>}
    </FeatureSectionWrapper>
  );
};


export default FeatureSection;
