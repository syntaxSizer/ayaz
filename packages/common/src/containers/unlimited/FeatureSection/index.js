import React from 'react';
import PropTypes from 'prop-types';
 import Text from '../../../layout/elements/Text';
import Heading from '../../../layout/elements/Heading';
import Image from '../../../layout/elements/Image';
import FeatureSectionWrapper from './featureSection.style';
import FreeImage from '../../../assets/image/unlimited/free_delivery.baf03882.png';
import OptionsImage from '../../../assets/image/unlimited/try_it_all.37baeec4.jpg';

const FeatureSection = ({
  row
}) => {
  return (
    <FeatureSectionWrapper id="services">
      <div className="welcomeSection">
        <div className="welcomeInner">
          <Heading className="header" content={`You don’t always have time to shop, cook, and clean. As an Unlimited member, you get free delivery on every order over Ksh. 300`} />
        </div>
      </div>
      {/* <div className="freeSection">
        <div className="freeMobileImage">
          <Image src={FreeImage} className="img" />
        </div>
        <div className="freeInfo">
          <h2 className="title">Unlock Awesome<br/>Perks of Unlimited.</h2>
          <ul className="list">
            <li className="items">Free delivery on orders over Ksh. 300</li>
            <li className="items">Special offers just for members</li>
            <li className="items">Access to exclusive giveaways and events</li>
          </ul>
        </div>
        <div className="freeImage">
          <Image src={FreeImage} className="img" />
        </div>
      </div> */}
      {/* <div className="freeSection">
        <div className="optionsImage">
          <Image src={OptionsImage} className="img" />
        </div>
        <div className="optionsInfo">
          <h2 className="optionsTitle">Affordable Restaurants and Businesses</h2>
          <p className="listInfo">We’re adding new places all the time. So explore a new part of town, grab your favorite booze, and get your all-time favorites. All delivered for free.</p>
        </div>
      </div> */}
      <div className="actionSection">
        <div className="actionInner">
          <h2 className="actionHeader">Try Ayazona Unlimited Free</h2>
          <p className="actionText">Get Ayazona Unlimited and receive free delivery on every order over Ksh. 300</p>
          <div className="actionArea">
            <button className="actionButton"><span>Try It Free <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="actionIcon"><path d="M10 2L8.6 3.4 14.2 9H2v2h12.2l-5.6 5.6L10 18l8-8z"></path></svg></span></button>
          </div>
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
