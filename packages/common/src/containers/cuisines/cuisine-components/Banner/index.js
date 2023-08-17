import React from 'react';
import PropTypes from 'prop-types';
import Box from '../../../../layout/elements/Box';
import { ContainerWrapper, SectionHeader } from './banner.style';
import BreadCrums from '../../../App/Breadcrums';

const DomainSection = ({ SectionWrapper, col, cuisine, bannerTitle, links }) => {
const headerText = bannerTitle || `${cuisine.split('-').join(' ')} Delivery`;
  return (
    <SectionHeader>
      <ContainerWrapper {...SectionWrapper}>
        <span className="breadCrums"><BreadCrums links={links}/></span>
        <div className="header-wrapper" {...col}>
          <h1 className="header">{headerText}</h1>
          <p className="text">{`Get ${cuisine.toLocaleLowerCase()} delivered right to your door.`} Or, order ahead for Dine-in and <a className="pickupLink" href="/pickup">Takeaway</a>.</p>
        </div>
      </ContainerWrapper>
    </SectionHeader>
  );
};

DomainSection.propTypes = {
  SectionWrapper: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
};

DomainSection.defaultProps = {
  SectionWrapper: {
    as: 'section',
    pt: '50px',
    overflow: 'hidden',
  },
  col: {
    width: '100%',
    maxWidth: '1300px',
    m: 'auto',
    display: 'inline-block',
  },
};

export default DomainSection;
