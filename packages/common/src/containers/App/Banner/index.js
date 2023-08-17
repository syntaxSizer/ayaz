import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../../layout/elements/Text';
import Heading from '../../../layout/elements/Heading';
import Image from '../../../layout/elements/Image';
import data from '../../../data/App/UserSection';
import FeatureBlock from '../../../components/FeatureBlock';
import Container from '../../../components/UI/Container';

import AppScreenshot from '../../../assets/image/app/mobile.png';

const DomainSection = ({
  SectionWrapper,
  row,
  row2,
  col,
  col2,
  title,
  description,
  blockWrapperStyle,
  contentStyle,
  featureTitle,
  featureDescription,
  button,
  image,
}) => {
  return (
    <div {...SectionWrapper}>
      <Container className="hero-img">
        <div {...row}>
          <div >
            <FeatureBlock {...col}
              title={<Heading {...title} className="title"/>}
              description={<Text {...description} className="description"/>}
            />
            <div className="row2" {...row2}>
              {data.features.map((feature, index) => (
                <div className="col user" {...col2} key={index}>
                  <FeatureBlock
                    wrapperStyle={blockWrapperStyle}
                    contentStyle={contentStyle}
                    title={<Heading content={feature.title} {...featureTitle} />}
                    description={
                      <Text content={feature.description} {...featureDescription} />
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div {...row} className="kids-mob">
          <div>
            <Image src={AppScreenshot} alt="ayazona asset"  alt="Domain Image" {...image} className="image2"/>
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
    pb: '80px',
    overflow: 'hidden',
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',

  },
  row2: {
    flexBox: true,
    width: ['100%', '100%', '50%', '50%', '50%'],
    flexWrap: 'wrap',
    float: 'right',
  },
  imageAreaRow: {
    flexDirection: 'row-reverse',
  },
  col: {
    width: ['100%', '100%', '40%', '40%', '40%'],
    mb: ['5px', '20px', '-90px'],
  },
  col2: {
    width: ['100%', '100%', '100%', '48.6%', '48.6%'],
    mb: '8px',
  },
  blockWrapperStyle: {
    p: ['30px', '30px', '30px', '50px'],
  },
  // feature content default style
  contentStyle: {
    textAlign: 'left',
  },
  // feature title default style
  featureTitle: {
    fontSize: ['20px', '24px'],
    fontWeight: '800',
    color: '#0f2137',
    float: 'left',
    mb: '0rem',
  },
  // feature description default style
  featureDescription: {
    fontSize: ['14px', '15px'],
    float: 'left',
    marginBottom: '0px',
    color: '#343d48',
  },
  imageArea: {
    width: ['100%', '100%', '100%', '100%', '100%'],
    ml: 'auto',
  },
  title: {
    content: 'Engage through communication',
    fontSize: ['26px', '30px', '30px', '48px', '60px'],
    fontWeight: '900',
    color: '#003147',
    fontSize: '5.625rem',
    lineHeight: '98%',
    paddingTop: '32px',
    letterSpacing: '-0.01px',
    mb: '20px',
    mt: '40px',
  },
  description: {
    content:
      'Lyoneer helps teachers adopt a modern approach to learning by bringing parents, students, and home-tutors together to build collaborative cultures that are creative and student-centric.',
    fontSize: '1.25rem',
    fontWeight: '400',
    color: '#003147',
    lineHeight: '33px',
    mb: '30px',
  },
  button: {
    title: 'LEARN MORE',
    type: 'button',
    fontSize: '14px',
    fontWeight: '800',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
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
  btnStyleTwo: {
    title: 'WATCH DEMOS',
    type: 'button',
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    ml: '15px',
    bg: '#fff',
    color: 'transparent',
  },
  textArea: {
    width: ['100%', '100%', '100%', '55%', '55%'],
  },
  discountAmount: {
    content: 'New',
    fontSize: '14px',
    fontWeight: '600',
    color: '#fff',
    mb: 0,
    as: 'span',
    mr: '0.4em',
    bg: 'rgb(26, 115, 232)',
  },
  discountText: {
    content: 'Digitizing education in Kenya',
    fontSize: '13px',
    fontWeight: '400',
    color: '#0f2137',
    mb: 0,
    as: 'span',
    ml: '10px',
  },
};

export default DomainSection;
