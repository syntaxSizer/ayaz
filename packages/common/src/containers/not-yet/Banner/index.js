import React from 'react';
import PropTypes from 'prop-types';
 import Image from '../../../layout/elements/Image';
import Heading from '../../../layout/elements/Heading';
import Text from '../../../layout/elements/Text';
import ContainerWrapper from './banner.style';
import rider from '../../../assets/image/restaurants/rider.svg'
import cyclist from '../../../assets/image/not-yet/cyclist.svg'

const DomainSection = ({ SectionWrapper, row, col, title, city }) => {
  return (
    <ContainerWrapper {...SectionWrapper}>
        <div className="wrapper">
          <div>
            <Heading className="header" content={`${city} - Here we go!`} />
            <Text className="text" content="Onboarding of amazing restaurants has begun on the coastal side of Kenya! Over the next few weeks, the central side of the city will be open for deliveries and we'll continue to add more places to make sure nothing is missing, Stay tuned and keep the appetite" />
          </div>
          <Image className="cyclist" src={cyclist}  alt="ayazona asset" />
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
};

export default DomainSection;
