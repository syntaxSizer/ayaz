import React from 'react';
import PropTypes from 'prop-types';
 import Heading from '../../../layout/elements/Heading';
import Text from '../../../layout/elements/Text';

import ContainerWrapper from './banner.style';
import styled from 'styled-components';

const CustomLink = styled.a`
  text-decoration: underline;
  color: #202125;
  cursor: pointer;
  font-size: 38px;
  margin-top: 40px;
  font-weight: 800;
  text-align: left;
  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 40px;
    margin-top: 0;
  }
`

const DomainSection = ({ SectionWrapper, row, col, title }) => {
  return (
    <ContainerWrapper {...SectionWrapper}>
      <div className="header-wrapper" {...col}>
        <h1 className="title">PICKUP</h1>
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
