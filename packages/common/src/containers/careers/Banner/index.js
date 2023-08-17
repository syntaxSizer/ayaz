import React from 'react';
import PropTypes from 'prop-types';
 import ContainerWrapper from './banner.style';

const DomainSection = ({ SectionWrapper, row, col, title }) => {
  return (
    <ContainerWrapper {...SectionWrapper}>
      <div className="innerNav">
        <div className="navSection">
          <span>Careers</span>
        </div>
        <div className="navMore">
          <a className="link" href="https://www.ayazona.com/careers">Overview</a>
          <a className="link" href="https://ayazona.breezy.hr" target="_blank" rel="nofollow">Openings</a>
        </div>
      </div>
      <h1 className="header-wrapper">
        <span>Careers</span>
      </h1>
    </ContainerWrapper>
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
};

export default DomainSection;
