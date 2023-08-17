import React from 'react';
import PropTypes from 'prop-types';
import { ContainerWrapper, SectionHeader } from './banner.style';
import BreadCrums from '../../App/Breadcrums';

const DomainSection = ({ title, links }) => {
  return (
    <SectionHeader>
      <ContainerWrapper>
        <div className="header-wrapper">
          {/* <span className="breadCrums"><BreadCrums links={links}/></span> */}
          <h1 className="header">{title}</h1>
        </div>
      </ContainerWrapper>
    </SectionHeader>
  );
};

DomainSection.propTypes = {
  title: PropTypes.object,
};

DomainSection.defaultProps = {
  title: {
    content: 'Cuisines on Ayazona',
    fontWeight: '600',
    color: '#000',
    fontSize: '42px',
    paddingTop: '32px',
    mb: '20px',
  },
};

export default DomainSection;
