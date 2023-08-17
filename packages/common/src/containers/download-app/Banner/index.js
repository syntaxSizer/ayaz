import React from 'react';
import PropTypes from 'prop-types';
 import Heading from '../../../layout/elements/Heading';
import Image from '../../../layout/elements/Image';
import Text from  '../../../layout/elements/Text';
import Link from '../../../layout/elements/Link';
import { BackgroundWrapper } from '../../pickup/FeatureSection/featureSection.style';
import appImage from '../../../assets/image/app/ayazona_droid.png';
import appImageM from '../../../assets/image/app/ayazona_droidm.png';

import {MainContainer, ContainerWrapper} from './banner.style';

const DomainSection = ({ SectionWrapper, row, col, title }) => {
  return (
    <MainContainer>
      <ContainerWrapper {...SectionWrapper}>
        <BackgroundWrapper>
          <div className="flexBoxWrapper" {...col}>
            <div className="textWrapper">
              <h1 className="title">Try Ayazona on android</h1>
              <Text className="text" content="Download the Ayazona android app to see what’s available in your local neighborhood."/>
              <Link href="https://play.google.com/store/apps/details?id=com.ayazona.eat.android" target="_blank" rel="nofollow" className="gDownloadLinkWrapper">
                <Image className="appDownload" src="https://cdn.ayazona.com/web-assets/img/google-play-badge.png"  alt="ayazona asset" />
              </Link>
            </div>
            <div style={{width: '50%', float: 'right', marginTop: '50px'}}>
              <Image src={appImageM}  alt="ayazona asset" />
            </div>
          </div>
          <div className="mobileFlexBoxWrapper" {...col}>
            <h1 className="title">Try Ayazona on android</h1>
            <Image src={appImageM}  alt="ayazona asset" />
            <Text className="text" content="Download the Ayazona android app to see what’s available in your local neighborhood."/>
            <Link href="https://play.google.com/store/apps/details?id=com.ayazona.eat.android" target="_blank" rel="nofollow" className="gDownloadLinkWrapper">
              <Image src="https://cdn.ayazona.com/web-assets/img/google-play-badge.png" alt="ayazona asset" />
            </Link>
          </div>
        </BackgroundWrapper>
      </ContainerWrapper>
    </MainContainer>
  );
};

DomainSection.propTypes = {
  SectionWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  btnStyle: PropTypes.object,
  btnStyleTwo: PropTypes.object,
  discountAmount: PropTypes.object,
  discountText: PropTypes.object,
  textArea: PropTypes.object,
};

DomainSection.defaultProps = {
  SectionWrapper: {
    as: 'section',
    pt: '50px',
    overflow: 'hidden',
  },
  col: {
    flexBox: true,
    width: '100%',
    maxWidth: '1300px',
    m: 'auto',
    p: '64px 0 0 25px',
  },
};

export default DomainSection;
