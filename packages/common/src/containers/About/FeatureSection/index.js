import React from 'react';
import Text from '../../../layout/elements/Text';
import Heading from '../../../layout/elements/Heading';
import Link from '../../../layout/elements/Link';
import FeatureBlock from '../../../components/FeatureBlock';
import data from '../../../data/About/pageContent';
import callToAction from '../../../data/About/callToAction';
import Container from '../../../components/UI/Container';
import {FeatureSectionWrapper, Navigation, Main} from './featureSection.style';
import Button from '../../../layout/elements/Button';
import styled from 'styled-components';

const CustomLink = styled(Link)`
  a {
    text-decoration: underline;
  }
  background-color: yellow;
  color: #202125;
`;
const FeatureSection = ({
}) => {
  return (
    <FeatureSectionWrapper id="services">
      <Navigation>
        <div className="innerNav">
          <nav className="nav">
            <span className="active"><span>About Us</span></span>
          </nav>
          <nav className="nav">
            <ul className="other">
              <li><a href="#mission"><span>Our Mission</span></a></li>
              <li><a href="#team"><span>Our Team</span></a></li>
            </ul>
          </nav>
        </div>
      </Navigation>
      <Main>
        <div className="headerSection">
          <Heading className="title" content={`About Us`} />
        </div>
        <div className="seperator">
          <div className="bloc" />
        </div>
        <div className="infoSection" id="mission">
          <h3 className="infoTitle"><span>Our Mission</span></h3>
          <div className="info">
            <div>
              <h3 className="innerTitle"><span>We help middle &amp; low income households get sustainable access to food, grocery and household essentials.</span></h3>
              <Text content={`The simple truth is that access to healthy, nutritious food on a regular basis is not possible for more than 80% of households in Africa, with over 39% of households facing severe inadequate access to food, and up to 49% of households not getting diversity in their diets, while a third of food produced ending in waste bins. At Ayazona, we are challenging that.`} />
            </div>
            <div>
              <Text content={`Local farmers help us provide the freshest produce and ensure short supply chains while supporting local communities.`} />
              <Text content={`Partnering with brands from each city we operate in helps us meet the taste of local communities and get beloved brands the attention they deserve.`} />
              <Text content={`Through Ignite Labs, we are using data and Machine Learning to put together a complete week-long grocery and essentials kit working with a budget of as low as KES 1,000 per household.`} />
              <Text content={`With compact and strategically located micro fulfilment centers, helps reduced operaton costs that was traditionally used for supermarkets.`} />
            </div>
          </div>
        </div>
        <div className="seperator">
          <div className="bloc" />
        </div>
        <div className="infoSection" id="team">
          <h3 className="teamTitle"><span>Our Team</span></h3>
          <blockquote className="quote">
            <span>Ayazona is being built by a passionate team of engineers, designers, and growth specialists, headquartered in Nairobi. The company was founded by <a href="https://www.linkedin.com/in/samsonlarsson/" target="_blank" rel="nofollow">Samson Larsson</a> in 2019, who was later joined by a young, vibrant and creative team always eager to make a lasting impact.</span>
          </blockquote>
        </div>
        <div className="moreSection">
          <h3 className="moreTitle"><span>Want to join us?</span></h3>
          <h3 className="secondTitle"><span>Read more about Ayazona and opportunities.</span></h3>
          <a href="/careers"><button className="button"><span>To Careers Page 🚀</span></button></a>
        </div>
      </Main>
    </FeatureSectionWrapper>
  );
};

export default FeatureSection;
