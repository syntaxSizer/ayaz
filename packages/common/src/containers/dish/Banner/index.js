import React from 'react';
import PropTypes from 'prop-types';
 import Heading from '../../../layout/elements/Heading';
import Text from '../../../layout/elements/Text';
import Container from '../../../components/UI/Container';
import { SearchBar } from '../../App/GeoLocation';
import ContainerWrapper from './banner.style';

const DomainSection = ({ SectionWrapper, row, col, margin, header, onlySearchBar, fixedWord, loopWords }) => {
  return (
    <ContainerWrapper onlySearchBar={onlySearchBar} {...SectionWrapper}>
      <Container>
        <div {...row}>
          <div className="searchBarWrapper" {...col} style={{margin: margin}}>
            <h1 className="header">{header}</h1>
            <Text
              className="text"
              content="Enter your delivery address, browse items from the best affordable local products and brands in your neighborhood, and order delivery."
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
  }
};

export default DomainSection;
