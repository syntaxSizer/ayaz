import React from 'react';
import Text from '../../../layout/elements/Text';
import Heading from '../../../layout/elements/Heading';
import { FeatureSectionWrapper, BackgroundWrapper } from './style';
import Link from '../../../layout/elements/Link';

const FeatureSection = () => {
  return (
    <FeatureSectionWrapper id="services">
      <BackgroundWrapper bg="rgb(247, 247, 248)">
        <div className="joinAyazonaBlock">
          <Link
            href="mailto:partners@ayazona.com"
            className="card"
            style={{ background: '#9cca89' }}
          >
            <div className="innerSection">
              <Heading className="header" content="Become an Ayazona partner" />
              <Text
                className="text"
                content="Connect with us and reach more customers. We handle delivery, so you can focus on the production."
              />
              <Text className="promoted" content="Get started" />
              {/* <span className="learn">Learn More</span> */}
            </div>
          </Link>
          <Link
            href="/fleet"
            className="card"
            style={{ background: '#85E5C6' }}
          >
            <div className="innerSection">
              <Heading className="header" content="Become an Ayazona rider" />
              <Text
                className="text"
                content="Join our fleet and enjoy the freedom to fit work around your life. Plus earn great fees and perks."
              />
              <Text className="promoted" content="Get started" />
              {/* <span className="learn">Learn More</span> */}
            </div>
          </Link>
        </div>
      </BackgroundWrapper>
    </FeatureSectionWrapper>
  );
};

export default FeatureSection;
