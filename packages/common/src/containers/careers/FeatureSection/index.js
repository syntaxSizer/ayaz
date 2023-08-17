import React from 'react';
 import Link from '../../../layout/elements/Link';
import Image from '../../../layout/elements/Image';
import FeatureSectionWrapper from './featureSection.style';
import styled from 'styled-components';

import imgSrc from './../../../assets/image/careers/image.f2fdbfd6.jpeg';
import imgSrc3 from './../../../assets/image/careers/image.20bc5b6a.jpeg';

const FeatureSection = ({
}) => {
  return (
    <FeatureSectionWrapper id="services">
      <div className="innerSection">
        <div className="actionCard">
          <div className="card">
            <div className="cardHeader">Work with us.</div>
            <a href="https://ayazona.breezy.hr" target="_blank" rel="nofollow" className="infoLink">See openings →</a>
            <a href="https://fleet.ayazona.com" target="_blank" rel="nofollow" className="infoLink">Join the fleet →</a>
          </div>
        </div>
        <div className="initialImage">
          <Image src={imgSrc} className="image"  alt="ayazona asset" />
          <Image src={imgSrc} className="ghost image"  alt="ayazona asset" />
        </div>
        <div className="theWhy">
          We're a young team working to directly help achieve the 2<sup>nd</sup> of the World's 17 Sustainable Goals.<br /> <br />End hunger, achieve food security and improved nutrition and promote sustainable agriculture.
        </div>
        <div className="box">
          <span className="boxInfo">Our mission is to make it possible for the low income families to get sustainable access to food &amp; household essentials while directly tackling food waste.</span>
          <div className="topBar"></div>
          <div className="rightBar"></div>
          <div className="bottomBar"></div>
          <div className="leftBar"></div>
        </div>
        <div className="think">
          <Image src={imgSrc3} className="image"  alt="ayazona asset" />
          <Image src={imgSrc3} className="ghost image" alt="ayazona asset"  />
        </div>
        <div className="benefits">
          <div className="benefitsHeader">Our Benefits</div>
          <div className="benefitsCard">
            <div className="bHeader">
              <span>Health</span>
            </div>
            <div className="bInfo">
              <span>We'll pay 100% of employee medical, dental, and vision insurance premiums.</span>
            </div>
          </div>
          <div className="benefitsCard2">
            <div className="bHeader">
              <span>Equipment</span>
            </div>
            <div className="bInfo">
              <span>We'll provide whatever you need to work efficiently and creatively.</span>
            </div>
          </div>
          <div className="benefitsCard3">
            <div className="bHeader">
              <span>Community</span>
            </div>
            <div className="bInfo">
              <span>Ayazona is an impact-first work environment with a strong company vision.</span>
            </div>
          </div>
          <div className="benefitsCard4">
            <div className="bHeader">
              <span>Food</span>
            </div>
            <div className="bInfo">
              <span>We have a snack-filled kitchen as well as tasty and healthy lunches at the office.</span>
            </div>
          </div>
          <div className="benefitsCard5">
            <div className="bHeader">
              <span>Salary &amp; Equity</span>
            </div>
            <div className="bInfo">
              <span>Every employee is paid a competitive salary and or given a generous stock option plan.</span>
            </div>
          </div>
          <div className="benefitsCard6">
            <div className="bHeader">
              <span>Wellness</span>
            </div>
            <div className="bInfo">
              <span>We provide workshops and massages to ensure your mental and physical wellbeing.</span>
            </div>
          </div>
        </div>
        <div className="secondBar"></div>
      </div>
        <div className="actionSection">
          <div className="actionInner">
            <h2 className="actionHeader">Find your place at Ayazona.</h2>
            <p className="actionText">Help us make it possible for middle &amp; low income households to get sustainable access to food and essentials.</p>
            <div className="actionArea">
              <a className="actionButton" href="https://ayazona.breezy.hr" target="_blank" rel="nofollow"><span>OPENINGS <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="actionIcon"><path d="M10 2L8.6 3.4 14.2 9H2v2h12.2l-5.6 5.6L10 18l8-8z"></path></svg></span></a>
            </div>
          </div>
        </div>
    </FeatureSectionWrapper>
  );
};


export default FeatureSection;
