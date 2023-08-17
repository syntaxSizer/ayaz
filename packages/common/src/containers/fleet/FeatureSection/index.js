import React from 'react';
import PropTypes from 'prop-types';
 import Text from '../../../layout/elements/Text';
import Heading from '../../../layout/elements/Heading';
import Image from '../../../layout/elements/Image';
import {FeatureSectionWrapper} from './featureSection.style';
import styled from 'styled-components';
import offer from '../../../assets/image/fleet/offer.jpg';
import earning from '../../../assets/image/fleet/fleet-earning.jpg';
import pay from '../../../assets/image/fleet/instantpay.jpg';

const CustomLink = styled.a`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  margin: 0;
  outline: none;
  padding: 0;
  cursor: pointer;
  width: auto;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  position: relative;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  background-color: #22594B;
  color: #FFFFFF;
  padding: 23px 52px 22px 52px;
  font-weight: 500;
  font-size: 18px;
  line-height: 19px;
  letter-spacing: -0.5px;
  border-radius: 100px;
`;

const CustomJoin = styled.a`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  margin: 0;
  outline: none;
  padding: 0;
  cursor: pointer;
  width: auto;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  position: relative;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  background-color: #FFFFFF;
  color: #22594B;
  padding: 23px 52px 22px 52px;
  font-weight: 500;
  font-size: 18px;
  line-height: 19px;
  letter-spacing: -0.5px;
  border-radius: 100px;
`

const FeatureSection = ({
  row
}) => {
  return (
    <FeatureSectionWrapper id="services">
      <div className="freeSection">
        <div className="freeMobileImage">
          <Image src={offer} className="img" />
        </div>
        <div className="freeInfo">
          <h2 className="title">Deliver with ease</h2>
          <p className="listInfo">Know where you're going, and when to get there. Earn more with weekly guarantees and keep 100% of the tips you receive.</p>
          <a href="https://fleet.ayazona.com/account/create" target="_blank" rel="nofollow"><button className="learn">Learn more <span>→</span></button></a>
        </div>
        <div className="freeImage">
          <Image src={offer} className="img" />
        </div>
      </div>
      <div className="freeSection">
        <div className="optionsImage">
          <Image src={earning} className="img" />
        </div>
        <div className="optionsInfo">
          <h2 className="optionsTitle">Earn on your own schedule</h2>
          <p className="listInfo">Download the free Ayazona Fleet app for iOS or Android and come online whenever you want to make money.</p>
          <a href="https://fleet.ayazona.com/account/create" target="_blank" rel="nofollow"><button className="learn">Learn more <span>→</span></button></a>
        </div>
      </div>
      <div className="freeSection">
        <div className="freeMobileImage">
          <Image src={pay} className="img" />
        </div>
        <div className="freeInfo">
          <h2 className="title">Clear earnings, instant deposits</h2>
          <p className="listInfo">See how much you earned after each delivery and exactly how your earnings were calculated. Get free weekly deposits or cash out instantly anytime you want.</p>
          <a href="https://fleet.ayazona.com/account/create" target="_blank" rel="nofollow"><button className="learn">Learn more <span>→</span></button></a>
        </div>
        <div className="freeImage">
          <Image src={pay} className="img" />
        </div>
      </div>
      <div className="mainSection">
        <div className="mainBox">
          <div className="callToAction">
            <div className="inner">
              <Heading
                className="header"
                content="Why Ayazona?"
              />
              <Text
                className="text"
                {...{ fontSize: '18px', color: '#fff', pt: '20px', lineHeight: 1.4 }}
                content="It’s free to sign up and fast to get started. There are no fees or time commitments, so you take home 100% of what you earn every time you complete a delivery. All you need is a smartphone – iPhone (iOS 10 and above) or Android (5.0 and above), a scooter, motorbike or bicycle with the necessary safety equipment, and a valid Passport, or a ID and a bank account."
              />
              <CustomLink target="_blank" rel="nofollow" href="https://fleet.ayazona.com/account/create">
                  Get Started
              </CustomLink>
            </div>
          </div>
        </div>
      </div>
      <div className="actionSection">
        <div className="actionInner">
          <h2 className="actionHeader">Join the Ayazona Fleet and start earning.</h2>
          <p className="actionText">Signing up takes less than 5 minutes – Just tell us about yourself, upload a selfie, provide proof of identity and start accepting deliveries. You can cash out your earnings instantly, whenever you want.</p>
          <div className="actionArea">
          <a href="https://fleet.ayazona.com/account/create" target="_blank" rel="nofollow"><button className="actionButton"><span>Get Started <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="actionIcon"><path d="M10 2L8.6 3.4 14.2 9H2v2h12.2l-5.6 5.6L10 18l8-8z"></path></svg></span></button></a>
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
