import React from 'react';
import PropTypes from 'prop-types';
 import Text from '../../../layout/elements/Text';
import Container from '../../../components/UI/Container';
import { SearchBar } from '../GeoLocation';
import ContainerWrapper from './banner.style';

const LandingBanner = ({ row, col, header, textColor="#fff", subText }) => {
  return (
    <ContainerWrapper>
      <Container>
        <div {...row}>
          <div className="searcBarWrapper" {...col}>
            <Text className="header" content={header} />
            <h1 className="text">{subText}</h1>
            <SearchBar extraStyles = {{pt: 0, pb: 20, pl: 0, width: '100%', ml: 0}} onlySearchBar={true} />
          </div>
        </div>
      </Container>
    </ContainerWrapper>
  );
};

LandingBanner.propTypes = {
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

LandingBanner.defaultProps = {
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

export default LandingBanner;
