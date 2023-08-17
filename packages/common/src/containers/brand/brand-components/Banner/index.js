import React from 'react';
import PropTypes from 'prop-types';
import Box from '../../../../layout/elements/Box';
import Image from '../../../../layout/elements/Image';
import Heading from '../../../../layout/elements/Heading';
import Text from '../../../../layout/elements/Text';
import Container from '../../../../components/UI/Container';
import { SearchBar } from '../../../App/GeoLocation';
import ContainerWrapper from './banner.style';

const DomainSection = ({ SectionWrapper, row, col, title, brand }) => {
  return (
    <ContainerWrapper {...SectionWrapper}>
      <Container>
        <div {...row}>
          <div className="searcBarWrapper" {...col}>
            <Image className="brandImage" alt="ayazona asset"  src={`${brand.image}`} />
            <h1 className="header">{`Order From ${brand.text}`}</h1>
            <Text
              className="text"
              content="Browse local restaurants and businesses available
              for pickup by entering your address below."
            />
            <div className="searchBar">
              <SearchBar extraStyles = {{pt: 0, pb: 0, mb: 0, width: '100%'}} onlySearchBar={true} />
            </div>
            <p className="menuLink">Or, <a className="link" href={`${brand.link}/menu`}>browse the menu</a></p>
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

    alignItems: 'center',
  },
  col: {
    width: '100%',
    mt: 'auto',
  },
  title: {
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
    fontSize: '56px',
    paddingTop: '32px',
    mb: '20px',
  },
};

export default DomainSection;
