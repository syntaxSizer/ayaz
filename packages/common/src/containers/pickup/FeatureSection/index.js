import React from 'react';
import PropTypes from 'prop-types';
 import Text from '../../../layout/elements/Text';
import Heading from '../../../layout/elements/Heading';
import Link from '../../../layout/elements/Link';
import Image from '../../../layout/elements/Image';
import {FeatureSectionWrapper, BackgroundWrapper} from './featureSection.style';
import { SearchBar } from '../../App/GeoLocation';
import Button from '../../../layout/elements/Button';
import imageSrc from '../../../assets/image/pickup/check.svg'
import pickupNow from '../../../assets/image/pickup/pickup_now.png'
import newReady from '../../../assets/image/pickup/new-ready.png'
import newEat from '../../../assets/image/pickup/new-eat.png'


const FeatureSection = ({
  row
}) => {
  return (
    // TODO: update how the image and text are aligned on the page section
    <FeatureSectionWrapper id="services">
        <div className="mainBox">
          <div className="callToAction">
          <div className="text-wrapper">
            <Heading
              {...{mb: 0}}
              className="header"
              content="No fees." />
            <Heading
              className="header"
              content="Just convenience."
              {...{mb: 0}}
            />
            <Text
              className="text"
              content="With Ayazona Pickup, you place an order for pickup and we’ll let you know when it’s ready. No wallet. No wait." />
            </div>
            <div>
            <div className="listItem">
              <Image src={imageSrc} alt="ayazona asset" />
              <Text content="Order ahead"/>
            </div>
            <div className="listItem">
              <Image src={imageSrc} alt="ayazona asset" />
              <Text content="Skip the line"/>
            </div>
            <div className="listItem">
              <Image src={imageSrc} alt="ayazona asset" />
              <Text content="Forget the fees" />
            </div>
            <Link href="/">
            <Button {...{mb: '40px', mt: '30px'}} className="headerButton" title={"TRY PICKUP"}/>
            </Link>
            </div>
          </div>
        </div>
        <div className="secondBox">
            <div {...{mt: '30px'}} className="image">
              <Image src={pickupNow} alt="ayazona asset" />
            </div>
            <div>
              <Heading
                className="header"
                content="Restaurants near you available on demand."/>
              <Text
                className="text"
                content="Breakfast, lunch, and dinner all ready when you are." />
            </div>
        </div>
        <div className="imageBanner">
          <Heading
            className="header"
            content="We’ll let you know when it’s ready."
          />
          <div className="appImageBox">
            <Image src={newReady} alt="ayazona asset" />
          </div>
        </div>
        <div  className="secondBox" >
            <div {...{mt: '30px'}} className="image">
              <Image src={newEat} alt="ayazona asset" />
            </div>
            <div className="modified text-wrapper">
            <Heading
              {...{fontSize: '48px'}}
              content="It's ready."
            />
            <Heading
              {...{fontSize: '48px'}}
              content="Grab and go."
            />
            <Text
              className="text"
              content="For people who want their order ready the moment they walk through the door. Skip the line and get on your way."
            />
            </div>
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
