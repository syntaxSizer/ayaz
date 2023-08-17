import React from 'react';
import PropTypes from 'prop-types';

import ContainerWrapper from './banner.style';
import Box from '../../../layout/elements/Box';
import BreadCrums from '../../App/Breadcrums';

const DomainSection = ({ SectionWrapper, col, content, links, textColor }) => {
  return (
    <ContainerWrapper {...SectionWrapper}>
      <Box className="header-wrapper" {...col}>
        {/* <span className="breadCrums"><BreadCrums links={links}/></span> */}
        <h1 {...{ color: textColor }} className="title">
          {content}
        </h1>
      </Box>
    </ContainerWrapper>
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
    mt: '150px',
    overflow: 'hidden',
  },
  col: {
    flexBox: true,
    width: '100%',
    maxWidth: '1300px',
    m: 'auto',
    p: '64px 0 0 25px',
  },
};

export default DomainSection;
