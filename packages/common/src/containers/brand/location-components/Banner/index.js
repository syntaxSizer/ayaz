import React from 'react';
import PropTypes from 'prop-types';
import Box from '../../../../layout/elements/Box';
import Heading from '../../../../layout/elements/Heading';
import Text from '../../../../layout/elements/Text';
import Container from '../../../../components/UI/Container';
import Image from '../../../../layout/elements/Image';

import ContainerWrapper from './banner.style';
import BreadCrums from '../../../App/Breadcrums';

const DomainSection = ({ SectionWrapper, row, col, title, location, brand }) => {
  const links = [{
    name: "Ayazona",
    itemtype: "http://schema.org/ListItem",
    href: "/",
    itemprop: "item",
    position: 1
  },
  {
    name: "restaurants",
    itemtype: "http://schema.org/ListItem",
    href: "/brands",
    itemprop: "name",
    position: 2
  },
  {
    href: brand.link,
    name: brand.text,
    itemtype: "http://schema.org/ListItem",
    itemprop: "name",
    position: 3
  },
  {
    href: `${brand.link}/${location.toLowerCase()}`,
    itemtype: "http://schema.org/ListItem",
    name: `${location.toLowerCase()}`,
    itemprop: "name",
    position: 4
  }];

  return (
    <ContainerWrapper {...SectionWrapper}>
      <Container>
        <div {...row}>
          <div className="searcBarWrapper" {...col}>
            <div className="textAndImageWrapper">
              <div className="textWrapper">
                <span className="breadCrums">
                  <BreadCrums links={links}/>
                </span>
                <h1 className="header">{`Order From ${brand.text}`}</h1>
                <Text
                  className="text"
                  content="Just order online or through the app to get your favorite neighborhood affordable classics delivered right to your door."/>
              </div>
              <Image className="brandImage" alt="ayazona asset"  src={`${brand.image}`} />
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
  title: {
    fontWeight: '600',
    textAlign: 'left',
    fontSize: '53px',
    paddingTop: '32px',
    mb: '30px',
  },
};

export default DomainSection;
