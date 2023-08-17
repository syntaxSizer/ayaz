import React from 'react';
import PropTypes from 'prop-types';
 import Text from '../../../layout/elements/Text';
import Heading from '../../../layout/elements/Heading';
import Link from '../../../layout/elements/Link';
import Image from '../../../layout/elements/Image';
import {FeatureSectionWrapper} from './featureSection.style';
import {brands} from '../../../data/brand/FeatureSection';


const FeatureSection = ({
  row
}) => {
  const [items, setItems] = React.useState([...brands].slice(0, 21))

  const toggleView = () => {
    setItems(items.length > 21 ? [...brands].slice(0, 21): [...brands]);
  }
  return (
    <FeatureSectionWrapper>
      <div className="centeredContainer">
        <Heading className="header" content="Food Rescue On Restaurants"/>
        <div className="brandsWrapper">
          {
            items.map(b=>(
              <Link href={b.link} className="brandWrapper">
                <div className="singleBrandWrapper">
                  <Image src={b.image} alt="ayazona asset" />
                  <Text className="text" content={b.text}/>
                </div>
              </Link>)
            )
          }
        </div>
        <button onClick={toggleView} className="bigBtn">{ items.length > 21 ? "VIEW LESS": "VIEW MORE"}</button>
      </div>
    </FeatureSectionWrapper>
  );
};

// FeatureSection style props
FeatureSection.propTypes = {
  row: PropTypes.object,
};

FeatureSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
  },
};

export default FeatureSection;
