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
    <div {...sectionWrapper} id="control" className="home-exp">
      <Container>
        <div {...row} {...textAreaRow}>
          <div {...col} {...textArea}>
            <Text {...sectionSubTitle} />
            <FeatureBlock
              title={<Heading {...title} className="sub-title" />}
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
    content: 'SECURITY BY DESIGN',
    as: 'span',
    display: 'block',
    fontSize: '16px',
    letterSpacing: '0.11em',
    fontWeight: '600',
    color: '#000',
    textTransform: 'uppercase',
    mb: '10px',
    width: '100%',
    textAlign: ['left', 'center'],
  },
  title: {
    content: 'The Future of School Communication',
    fontSize: '4.0625rem',
    fontWeight: '700',
    color: '#000000',
    mb: '20px',
    width: '100%',
    maxWidth: ['100%'],
    textAlign: ['left', 'center'],
  },
  description: {
    content:
      'Transitioning to a remote learning environment can take some adjustment for students, teachers and parents. If your school is moving to remote learning, Lyoneer is offering the most secure tool for parents, teachers and students to communicate. Headquartered and founded in Nairobi, Lyoneer is connecting students in Kenya from Primary Schools to High Schools to High Education institutions. Lyoneer’s end-to-end encrypted collaboration suite is backed by one of the most effective and secure instant communications platforms. At the forefront of secure remote school communication and classes, we are consistently here to deliver groundbreaking innovation from our unique “message fortress” architecture to encrypted class conferencing, guest rooms, and Messaging Layer Security (MLS).',
    fontSize: '16px',
    color: '#000000',
    lineHeight: '1.75',
    mb: '33px',
    width: '100%',
    maxWidth: ['100%'],
    textAlign: ['left', 'center'],
  },
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
  },
};

export default ControllSection;
