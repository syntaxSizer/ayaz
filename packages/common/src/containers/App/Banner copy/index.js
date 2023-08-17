import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../../layout/elements/Text';
import Container from '../../../components/UI/Container';
import { SearchBar } from '../GeoLocation';
import ContainerWrapper from './banner.style';
import Box from '../../../layout/elements/Box';

const DomainSection = ({ row, col, header, textColor="#fff", subText }) => {
  return (
    <ContainerWrapper>
      <Container>
        <Box {...row}>
          <Box className="searcBarWrapper" {...col}>
            <h1 className="header">{header}</h1>
            <Text
              {...{color: textColor}}
              className="text"
              content={subText}
            />
            <Box className="searchBar">
              <SearchBar extraStyles = {{pt: 0, pb: 20, pl: 0, width: '100%', ml: 0}} onlySearchBar={true} />
            </Box>
          </Box>
        </Box>
      </Container>
    </ContainerWrapper>
  );
};

DomainSection.propTypes = {
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
  row: {
    flexBox: true,
    flexWrap: 'wrap',

    alignItems: 'center',
  },
  col: {
    width: '100%',
    mt: 'auto',
  },
};

export default DomainSection;
