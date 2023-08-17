import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';
 import Text from '../../../layout/elements/Text';
import Heading from '../../../layout/elements/Heading';
import Button from '../../../layout/elements/Button';
import Card from '../../../layout/elements/Card';
import Image from '../../../layout/elements/Image';
import FeatureBlock from '../../../components/FeatureBlock';
import Container from '../../../components/UI/Container';
import ImageOne from '../../../assets/image/about/info1.png';
import ImageTwo from '../../../assets/image/about/info2.png';

const ControllSection = ({
  sectionWrapper,
  row,
  col,
  title,
  description,
  button,
  textArea,
  textAreaRow,
  sectionSubTitle,
  btnStyle,
}) => {
  return (
    <div {...sectionWrapper} id="control" className="security-exp">
      <Container>
        <div {...row} {...textAreaRow}>
          <div {...col} {...textArea}>
            <Text {...sectionSubTitle} />
            <FeatureBlock
              title={<Heading {...title} />}
              description={<Text {...description} />}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

ControllSection.propTypes = {
  sectionWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  btnStyle: PropTypes.object,
};

ControllSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['40px', '80px'],
    pb: ['40px', '80px'],
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',

  },
  textAreaRow: {
    flexDirection: 'row-reverse',
  },
  col: {
    pr: '15px',
    pl: '15px',
  },
  textArea: {
    width: ['100%', '100%', '100%', '100%', '100%'],
  },
  imageWrapper: {
    boxShadow: 'none',
  },
  imageWrapperOne: {
    pointerEvents: 'none',
  },
  imageWrapperTwo: {
    alignSelf: 'flex-end',
    mb: '-60px',
    ml: ['0px', '0px', '-200px', '-250px', '-400px'],
    pointerEvents: 'none',
  },
  imageOne: {
    src: `${ImageOne}`,
    alt: 'Info Image One',
  },
  imageTwo: {
    src: `${ImageTwo}`,
    alt: 'Info Image Two',
  },
  sectionSubTitle: {
    content: 'Security by Design',
    as: 'span',
    display: 'block',
    fontSize: '18px',
    letterSpacing: '0.11em',
    fontWeight: '600',
    color: '#000',
    textTransform: 'uppercase',
    mb: '10px',
    width: '100%',
    textAlign: ['center'],
  },
  title: {
    content: 'Technical overview',
    fontSize: ['24px', '26px', '30px', '36px', '48px'],
    fontWeight: '700',
    color: '#000000',
    mb: '20px',
    width: '100%',
    maxWidth: ['100%'],
    textAlign: ['center'],
  },
  description: {
    content:
      'Text messages and pictures use the Proteus protocol for end-to-end encryption. Proteus is based on the Axolotl ratchet and pre-keys that are optimized for mobile and multi-device messaging. Voice and video calls use the WebRTC standard. More precisely, DTLS and KASE are used for key negotiation and authentication and SRTP is used for encrypted media transport. This means that voice calls are end-to-end encrypted with perfect forward secrecy enabled without compromising HD call quality. Lyoneer’s encryption works transparently in the background and doesn’t need to be activated — it’s always on. There’s no need to compromise security for usability or settle for missing features. Lyoneer keeps everything private while avoiding the complexity that is common to other secure messengers.',
    fontSize: '16px',
    color: '#000000',
    lineHeight: '1.75',
    mb: '33px',
    width: '100%',
    maxWidth: ['100%'],
    textAlign: ['center'],
  },
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
  },
};

export default ControllSection;
