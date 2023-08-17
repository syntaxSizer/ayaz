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
import ImageOne from '../../../assets/image/app/info1.png';
import ImageTwo from '../../../assets/image/app/info2.png';

const ControllSection = ({
  sectionWrapper,
  row,
  col,
  title,
  description,
  button,
  textArea,
  imageArea,
  textAreaRow,
  imageAreaRow,
  imageWrapper,
  imageOne,
  imageTwo,
  imageWrapperOne,
  imageWrapperTwo,
  sectionSubTitle,
  btnStyle,
}) => {
  return (
    <div {...sectionWrapper} id="control" className="remote">
      <Container fullWidth noGutter className="control-sec-container">
        <div {...row} {...imageAreaRow}>
          <div {...col} {...imageArea}>
            <Card {...imageWrapper} {...imageWrapperOne}>
              <Fade left>
                <Image {...imageOne} alt="ayazona asset"  />
              </Fade>
            </Card>
            {/* <Card {...imageWrapper} {...imageWrapperTwo}>
              <Fade bottom>
                <Image {...imageTwo} />
              </Fade>
            </Card> */}
          </div>
        </div>
      </Container>
      <Container>
        <div {...row} {...textAreaRow}>
          <div {...col} {...textArea}>
            <Text {...sectionSubTitle} />
            <FeatureBlock
              title={<Heading {...title} className="sub-title" />}
              description={<Text {...description} />}
              button={
                <Link href="https://www.explore.lyoneer.com/remote-learning/">
                  <a target="_blank" rel="nofollow">
                    <Button {...button} {...btnStyle} className="cta-btn"/>
                  </a>
                </Link>
              }
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
    width: ['100%', '100%', '100%', '50%', '50%'],
  },
  imageArea: {
    width: ['0px', '0px', '53%', '50%', '50%'],
    flexBox: true,
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
    content: 'REMOTE SWITCH',
    as: 'span',
    display: 'block',
    fontSize: '18px',
    letterSpacing: '0.11em',
    fontWeight: '600',
    color: 'rgb(186, 200, 209)',
    textTransform: 'uppercase',
    mb: '10px',
    textAlign: ['left'],
  },
  title: {
    content: 'Support remote learning',
    fontSize: '4.0625rem',
    fontWeight: '800',
    color: '#000000',
    letterSpacing: '-0.010em',
    mb: '20px',
    maxWidth: '100%',
    textAlign: ['left'],
  },
  description: {
    content:
      'Transitioning to a remote learning environment—can take some adjustment for both you and your students. If your school is moving to remote learning, Lyoneer offers a free teacher account to support online instruction. From assignments to activities, Lyoneer makes sure you get the information you need, when you need it, right on your phone.',
    fontSize: '16px',
    color: '#000000',
    lineHeight: '1.75',
    mb: '33px',
    maxWidth: ['100%', '100%', '100%', '440px', '440px'],
    textAlign: ['left'],
  },
  button: {
    title: 'LEARN MORE',
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
  },
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
  },
};

export default ControllSection;
