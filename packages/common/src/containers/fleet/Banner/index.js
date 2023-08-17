import React from 'react';
import PropTypes from 'prop-types';
 import Heading from '../../../layout/elements/Heading';
import Text from  '../../../layout/elements/Text';

import ContainerWrapper from './banner.style';

const DomainSection = ({ SectionWrapper, row, col, title }) => {
  return (
    <ContainerWrapper>
      <div className="mainSecton">
        <header className="headerSection">
          <div className="innerSection">
            <div className="section">
              <div className="titleSection">
                <h1 className="title">Join the Ayazona Fleet</h1>
                <Text className="text" content={`Signing up takes less than 5 minutes – and start accepting deliveries.`} />
                <a href="https://fleet.ayazona.com/account/create" target="_blank" rel="nofollow"><button className="actionButton"><span>Sign Up <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="actionIcon"><path d="M10 2L8.6 3.4 14.2 9H2v2h12.2l-5.6 5.6L10 18l8-8z"></path></svg></span></button></a>
              </div>
            </div>
          </div>
        </header>
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
