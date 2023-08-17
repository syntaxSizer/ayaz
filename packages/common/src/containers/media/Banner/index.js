import React from 'react';
import PropTypes from 'prop-types';
 
import ContainerWrapper from './banner.style';

const DomainSection = ({ SectionWrapper, col }) => {
  return (
    <ContainerWrapper {...SectionWrapper}>
      <div className="header-wrapper" {...col}>
        <h1 className="title">Press &amp; Media</h1>
      </div>
    </ContainerWrapper>
  );
};

DomainSection.propTypes = {
  SectionWrapper: PropTypes.object,
  col: PropTypes.object
};

DomainSection.defaultProps = {
  SectionWrapper: {
    as: 'section',
    mt: '150px',
    overflow: 'hidden',
  },
  col: {
    flexBox: true,
    width: '100%',
    maxWidth: '1300px',
    m: 'auto',
    p: '64px 0 0 25px',
  }
};

export default DomainSection;
