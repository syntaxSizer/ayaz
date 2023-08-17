import React from 'react';
import PropTypes from 'prop-types';
 import Text from '../../../layout/elements/Text';
import Heading from '../../../layout/elements/Heading';
import Link from '../../../layout/elements/Link';
import Image from '../../../layout/elements/Image';
import Container from '../../../components/UI/Container';
import FeatureSectionWrapper from './featureSection.style';
import Button from '../../../layout/elements/Button';

import imgSrc from './../../../assets/image/ignite/1.jpg';
import imgSrc2 from './../../../assets/image/ignite/2.jpg';
import imgSrc3 from './../../../assets/image/ignite/3.jpg';


const FeatureSection = ({
  row
}) => {
  return (
    <FeatureSectionWrapper id="services">
      <div className="container">
        <div className="innerSection">
          <div className="headerSection">
            <span className="topArea">
              <span>Reaching Every Low-Income Family</span>
            </span>
            <h1 className="header"><span>Ignite Labs</span></h1>
          </div>
          <div className="heroSection">
            <div className="imageShot">
              <div className="shotSection">
                <div>
                  <Image src={imgSrc2} alt="ayazona asset"  />
                </div>
                <div className="level" />
              </div>
            </div>
            <div className="infoShot">
              <div className="imageArea">
                <div>
                  <Image src={imgSrc} alt="ayazona asset"  />
                </div>
                <div className="secondLevel" />
              </div>
              <div className="textArea">
                <Text className="text" content={`We built Ignite Labs to amplify our positive impact on every low-income family in urban centres around Kenya and beyond. We believe in the importance of technology as a tool to unlock all the good in our communities.`} />
                <Text className="text" content={`Through Ignite Labs, we are using Machine Learning and AI to put together a complete week-long grocery and essentials kit working with a budget of as low as KES 1,000 per household.`} />
                <div className="data">
                  <div className="initialData">
                    <span className="dataInfo">500+</span>
                    <span className="dataInfo2">Kits Delivered</span>
                  </div>
                  <div className="initialData">
                    <span className="dataInfo">200+</span>
                    <span className="dataInfo2">Families Served</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="missionSection">
            <h2 className="missionTitle"><span>Our Mission</span></h2>
            <blockquote className="missionStatement"><span>To positively impact our neighborhoods through making access to food and essential items affordable for everyone while ensuring 0% food wastes.</span></blockquote>
          </div>
          <h4 className="lonelyTitle" id="giving-back"><span>How We Are Giving Back</span></h4>
          <div className="smileSection">
            <div className="innerSmile">
              <div className="smileImage">
                <div className="imageHolder">
                  <Image className="smiley" src={imgSrc3} alt="ayazona asset"  />
                </div>
              </div>
              <div className="smileInfo">
                <div className="infoHolder">
                  <h3 className="smileHeader"><span>Eliminating Food Waste</span></h3>
                  <Text className="information" content={`The simple truth is that access to healthy, nutritious food on a regular basis is currently not possible for more than 90% of Africans. And we believe that access to healthy food should be a universal right, not a privilege.`} />
                  <Text className="information" content={`Wasted food is the single biggest occupant in the landfills. With so much excess food going to the wrong places, we are joining Karma and built a first of its kind product that allows our restaurant partners to utilize the Ayazona platform to make available any excess food to middle to low income households at half the cost. This ensures not only a zero-waste solution, but a sustainable loop.`} />
                  <div className="data">
                    <div className="initialData">
                      <span className="dataInfo">200+</span>
                      <span className="dataInfo2">Food Units Rescued</span>
                    </div>
                    <div className="initialData">
                      <span className="dataInfo">20+</span>
                      <span className="dataInfo2">Special Partners</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contactSection">
            <h3 className="contactHeader"><span>Contact Us</span></h3>
            <div className="contactBox">
              <div className="theBox">
                <div className="insideBox">
                  <span className="boxHeader">Ignite Labs</span>
                  <span className="boxInfo">IGNITE LABS INQUIRIES</span>
                  <a className="email" href=""><span className="emailAddress">ignite@ayazona.com</span></a>
                </div>
              </div>
              <div className="theBox">
                <div className="insideBox">
                  <span className="boxHeader">Contacts Center</span>
                  <span className="boxInfo">PRESS INQUIRIES</span>
                  <a className="email" href=""><span className="emailAddress">info@ayazona.com</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="moreSection">
        <h3 className="moreTitle"><span>Do you own a business?</span></h3>
        <h3 className="secondTitle"><span>Read more about how we can help reduce your wastes.</span></h3>
        <a href="/blog/why-your-business-should-on-ayazona"><button className="button"><span>Learn more<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="actionIcon"><path d="M10 2L8.6 3.4 14.2 9H2v2h12.2l-5.6 5.6L10 18l8-8z"></path></svg></span></button></a>
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
