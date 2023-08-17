import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
 import Text from '../../../layout/elements/Text';
import Heading from '../../../layout/elements/Heading';
import Image from '../../../layout/elements/Image';
import Container from '../../../components/UI/Container';
import BannerWrapper, {
  ButtonWrapper,
  SectionWrapper,
} from './banner.style';

import AppScreenshot from '../../../assets/image/security/mobile.jpg';

const DomainSection = ({
  SectionWrapper,
  row,
  col,
  title,
  sectionSubTitle,
  description,
  button,
  image,
  imageArea,
  btnStyle,
}) => {
  return (
    <div {...SectionWrapper} className="banner-abt">
      <Container>
        <div {...row}>
          <div {...col}>
            <Text {...sectionSubTitle} />
            <Heading {...title} className="title"/>
          </div>
        </div>
      </Container>
    </div>
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
    pt: '80px',
    // pb: '80px',
    overflow: 'hidden',
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',

    alignItems: 'center',
  },
  imageAreaRow: {
    flexDirection: 'row-reverse',
  },
  col: {
    width: ['100%', '100%', '100%', '100%', '100%'],
    mt: 'auto',
  },
  imageArea: {
    width: ['100%', '100%', '100%', '100%', '100%'],
    margin: 'auto',
  },
  sectionSubTitle: {
    content: 'Security & Privacy',
    as: 'span',
    display: 'block',
    fontSize: '32px',
    fontWeight: '600',
    color: 'rgb(186, 200, 209)',
    mb: '8px',
    textAlign: ['center'],
  },
  title: {
    content: 'Secured with end‑to‑end encryption.',
    fontSize: ['26px', '30px', '30px', '48px', '60px'],
    fontWeight: '300',
    color: '#000000',
    textAlign: 'center',
    fontSize: '48px',
    paddingTop: '32px',
    mb: '20px',
  },
  description: {
    content:
      'Modern day education system meets the most advanced, and secure school communication tool.',
    fontSize: '24px',
    fontWeight: '300',
    textAlign: 'center',
    color: '#343d48',
    lineHeight: '33px',
    mb: '30px',
  },
  button: {
    title: 'GET STARTED',
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
    textAlign: 'center',
    marginTop: '18px',
  },
  image: {
    mt: '70px',
    backgroundPositon: '50%',
    ml: '50%',
    maxWidth: '1600px',
    backgroundSize: 'cover',
    width: '100vw',
    m: 'auto',
  },
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
  },
  textArea: {
    width: ['100%', '100%', '50%', '55%', '55%'],
  },
};

export default DomainSection;
