import React from 'react';
import PropTypes from 'prop-types';
 import Text from '../../../layout/elements/Text';
import Heading from '../../../layout/elements/Heading';
import Link from '../../../layout/elements/Link';
import Image from '../../../layout/elements/Image';
import FeatureSectionWrapper from './featureSection.style';

import iosImageSrc from './../../../assets/image/app/ios-download-badge.png';
import appImage from '../../../assets/image/app/downloadApp.png';

import { BackgroundWrapper } from '../../pickup/FeatureSection/featureSection.style';


const FeatureSection = ({
  row
}) => {
  return (
    <FeatureSectionWrapper id="services">
        <div className="mainBox">
          <Image src={appImage} alt="ayazona asset"  />
          <div className="iosBlock">
            <Heading className="header" content="Try Ayazona for iPhone." />
            <Text className="text" content="Download the Ayazona iOS app to see what’s available in your local neighborhood."/>
            <Link href="https://www.ayazona.app.link">
              <Image src={iosImageSrc} alt="ayazona asset"  />
            </Link>
          </div>
        </div>
        <div className="mobileMainBox">
          <Heading className="header" content="Try Ayazona for iPhone." />
          <Image src={appImage}  alt="ayazona asset" />
          <Text className="text" content="Download the Ayazona iOS app to see what’s available in your local neighborhood."/>
          <Link href="https://www.ayazona.app.link" className="gDownloadLinkWrapper">
          <Image className="appDownload" src={iosImageSrc} alt="ayazona asset"  />
          </Link>
        </div>
        <BackgroundWrapper {...{mt: '30px'}} bg="#000">
        <div {...row} className="row">
          <div className="offerBox">
            <Heading
              className="boxHeader"
              content="Discover, order, and track in the app."
            />
            <Text
              className="boxText"
              content="With the best on-demand services in the industry, you can explore your city, find its hidden hotspots, and watch as we bring your new favorites right to your door. Download the app for iOS or Android for free.              "
            />
          </div>
        </div>
        </BackgroundWrapper>
    </FeatureSectionWrapper>
  );
};

// FeatureSection style props
FeatureSection.propTypes = {
  row: PropTypes.object,
};

FeatureSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
  },
};

export default FeatureSection;
