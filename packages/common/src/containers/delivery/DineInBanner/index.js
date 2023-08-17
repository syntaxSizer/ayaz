import React from 'react';
import PropTypes from 'prop-types';
import ContainerWrapper from './banner.style';
 import BreadCrums from '../../App/Breadcrums';

const DomainSection = ({ headerText, headerSecondText, links }) => {
  return (
    <ContainerWrapper>
      <div className="innerSection">
      <span className="breadCrums"><BreadCrums links={links}/></span> 
        <div className="infoSection">
          <h1 className="header"><span className="headerSpan">{headerText} <br />{headerSecondText}</span></h1>
          <p className="text">Skip the queue and pre-order your meal ahead. Just grab a seat and enjoy.</p>
        </div>
      </div>
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
