import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../../../layout/elements/Heading';
import Container from '../../../components/UI/Container';

const DomainSection = ({ SectionWrapper, titleContent, row, col, title }) => {
  return (
    <div {...SectionWrapper}>
      <Container>
        <div {...row}>
          <div {...col}>
            <Heading {...title} content={titleContent} className="title" />
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
    pt: '50px',
    overflow: 'hidden',
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',

    alignItems: 'center',
  },
  col: {
    width: '100%',
    mt: 'auto',
  },
  title: {
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
    fontSize: '53px',
    paddingTop: '32px',
    mb: '20px',
  },
};

export default DomainSection;
