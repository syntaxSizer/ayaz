import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Text from '../../../layout/elements/Text';
import Button from '../../../layout/elements/Button';
import FeatureBlock from '../../../components/FeatureBlock';
import Container from '../../../components/UI/Container';
import ImageOne from '../../../assets/image/app/info1.png';
import ImageTwo from '../../../assets/image/app/info2.png';

const ActionSection = ({
  sectionWrapper,
  row,
  col,
  description,
  button,
  textArea,
  textAreaRow,
  btnStyle,
}) => {
  return (
    <div {...sectionWrapper} className="actionable" id="control">
      <Container>
        <div {...row} {...textAreaRow}>
          <div {...col} {...textArea}>
            <FeatureBlock className="cta-home"
              button={
                <Link href="">
                  <a>
                    <Button {...button} {...btnStyle} className="cta-btn"/>
                  </a>
                </Link>
              }
              description={<Text {...description} />}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

ActionSection.propTypes = {
  sectionWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  btnStyle: PropTypes.object,
};

ActionSection.defaultProps = {
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
  description: {
    content:
      'Ready to extend learning beyond the classroom?',
    fontSize: '2.25rem',
    color: '#003147',
    fontWeight: '800',
    maxWidth: '32.5rem',
    mb: '33px',
    textAlign: 'left',
  },
  button: {
    title: 'GET STARTED',
    type: 'button',
    fontSize: '14px',
    fontWeight: '700',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
  },
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    padding: '0 32px',
    lineHeight: '48px',
  },
};

export default ActionSection;
