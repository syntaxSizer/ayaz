import React from 'react';
import PropTypes from 'prop-types';
 import Text from '../../../layout/elements/Text';
import Container from '../../../components/UI/Container';
import { SearchBar } from '../../App/GeoLocation';

import ContainerWrapper from './banner.style';

const DomainSection = ({ SectionWrapper, row, col, title }) => {
  return (
    <ContainerWrapper {...SectionWrapper}>
      <Container>
        <div {...row}>
          <div className="searcBarWrapper" {...col}>
            <h1 className="header">Find restaurants that deliver near you</h1>
            <Text
              className="text"
              content="Enter your delivery address and order from the best
              restaurants in your neighborhood."
            />
            <div className="searchBar">
              <SearchBar extraStyles = {{pt: 0, pb: 20, pl: 0, width: '100%', ml: 0}} onlySearchBar={true} />
            </div>
          </div>
        </div>
      </Container>
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
    pt: '50px',
    overflow: 'hidden',
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',

    alignItems: 'left',
  },
  col: {
    width: '100%',
    mt: 'auto',
  },
};

export default DomainSection;
