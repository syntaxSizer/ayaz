import React from 'react';
import PropTypes from 'prop-types';
 import Text from '../../../layout/elements/Text';
import Heading from '../../../layout/elements/Heading';
import Image from '../../../layout/elements/Image';
import {FeatureSectionWrapper} from './featureSection.style';
import styled from 'styled-components';
import OptionsImage5 from '../../../assets/image/partner/Block-5.jpg';
import OptionsImage2 from '../../../assets/image/partner/Block-2.jpg';
import OptionsImage1 from '../../../assets/image/partner/Block-1.jpg';
import OptionsImage4 from '../../../assets/image/partner/Block-4.jpg';

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
      <div className="business-advantages">
        <div className="business-advantages__content">
          <h1 className="business-advantages__title"><span className="title">Why Ayazona?</span></h1>
          <div className="business-advantages__cards">
            <div className="business-advantages__card">
            <svg height="64" viewBox="0 0 64 64" width="64" className="business-advantages__card-icon"><g fill="none" fill-rule="evenodd"><path d="M58 32.36C58 46.52 46.52 58 32.36 58 18.199 58 6.72 46.52 6.72 32.36c0-14.161 11.479-25.641 25.64-25.641 14.16 0 25.64 11.48 25.64 25.64z" stroke="#000" stroke-width="1.471"></path><path d="M33.125 41.75c.645 0 1.256-.114 1.828-.344a5.006 5.006 0 001.515-.938 4.26 4.26 0 001.032-1.421 4.37 4.37 0 00.375-1.828c0-.77-.125-1.412-.375-1.923-.25-.51-.59-.925-1.016-1.248a5.044 5.044 0 00-1.5-.766 19.275 19.275 0 00-1.859-.5zM31.656 22.5c-.583 0-1.13.094-1.64.28-.51.189-.958.455-1.344.8a3.679 3.679 0 00-.906 1.233 3.795 3.795 0 00-.328 1.594c0 .687.11 1.26.328 1.718.22.458.52.839.906 1.14.386.304.834.548 1.345.735.509.187 1.056.365 1.64.532zm1.47 23.312h-1.439v-2.374c-1.77-.106-3.234-.594-4.39-1.47-1.156-.874-1.922-2.187-2.297-3.937-.041-.27-.073-.53-.093-.78l-.062-.752h2.031c0 .71.113 1.37.343 1.986a4.93 4.93 0 00.985 1.624c.426.468.932.85 1.515 1.141s1.23.458 1.937.5v-9.282a22.066 22.066 0 01-2.421-.734 7.095 7.095 0 01-1.985-1.093 4.77 4.77 0 01-1.328-1.671c-.322-.668-.484-1.49-.484-2.47 0-.875.167-1.666.5-2.374a5.458 5.458 0 011.36-1.814 5.96 5.96 0 011.984-1.14 6.775 6.775 0 012.405-.36v-1.906h1.438v1.907c.854 0 1.646.12 2.375.36.729.24 1.364.593 1.906 1.062.542.468.97 1.047 1.282 1.735.313.687.49 1.468.53 2.343h-2.03a3.61 3.61 0 00-.328-1.547 3.785 3.785 0 00-.876-1.203 4.01 4.01 0 00-1.28-.782 4.389 4.389 0 00-1.579-.281v8.313c1.02.25 1.948.521 2.781.812.834.292 1.541.676 2.126 1.156.582.48 1.035 1.1 1.36 1.86.322.76.483 1.734.483 2.921 0 .918-.198 1.734-.593 2.453a5.993 5.993 0 01-1.547 1.829c-.636.499-1.36.886-2.172 1.156s-1.625.417-2.438.438z" fill="#000"></path></g></svg>
              <div className="business-advantages__card-texts">
                <h3 className="business-advantages__card-title"><span className="actualTitle">Pricing & transparency</span></h3>
                <Text className="business-advantages__card-description" content={`Earn more without high commissions eating your profits. Restaurant fees are clearly disclosed to users.`}/>
              </div>
            </div>
            <div className="business-advantages__card">
            <svg width="64" height="64" viewBox="0 0 64 64" className="business-advantages__card-icon"><g fill="none" fill-rule="evenodd"><path d="M0 0h64v64H0z"></path><path fill="#000" fill-rule="nonzero" d="M22 16v-2a4 4 0 014-4h12a4 4 0 014 4v2h11a5 5 0 015 5v28a5 5 0 01-5 5H11a5 5 0 01-5-5V21a5 5 0 015-5h11zm1.5 0h17v-2a2.5 2.5 0 00-2.5-2.5H26a2.5 2.5 0 00-2.5 2.5v2zM11 17.5A3.5 3.5 0 007.5 21v28a3.5 3.5 0 003.5 3.5h42a3.5 3.5 0 003.5-3.5V21a3.5 3.5 0 00-3.5-3.5H11z"></path><path fill="#000" d="M57 32h-.5v1a3.5 3.5 0 01-3.5 3.5H11A3.5 3.5 0 017.5 33v-1H7v4a4.992 4.992 0 004 2h42a4.992 4.992 0 004-2v-4z"></path><circle cx="32" cy="32" r="2" fill="#000"></circle></g></svg>
              <div className="business-advantages__card-texts">
                <h3 className="business-advantages__card-title"><span className="actualTitle">Corporate customers</span></h3>
                <Text className="business-advantages__card-description" content={`Get your restaurant in front of Ayazona's corporate clients with thousands of hungry employees in your area.`}/>
              </div>
            </div>
            <div className="business-advantages__card">
            <svg height="64" viewBox="0 0 64 64" width="64" className="business-advantages__card-icon"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.368"><path d="M49.98 57.988H14.586a4.776 4.776 0 01-4.776-4.776v-20.52h44.946v20.52a4.776 4.776 0 01-4.776 4.776z"></path><path d="M54.024 32.693H10.541a4.87 4.87 0 01-4.868-4.87V24.46a4.869 4.869 0 014.868-4.868h43.483c2.69 0 4.87 2.18 4.87 4.868v3.363a4.87 4.87 0 01-4.87 4.87zM32.283 57.988V19.59M39.242 19.592h-6.959v-6.96a6.96 6.96 0 116.96 6.96zM32.283 19.592h-5.958a5.958 5.958 0 115.958-5.959z"></path></g></svg>
              <div className="business-advantages__card-texts">
                <h3 className="business-advantages__card-title"><span className="actualTitle">Free marketing</span></h3>
                <Text className="business-advantages__card-description" content={`Turn your website and social media visits into commission-free sales with Ayazona-paid promotions.`}/>
              </div>
            </div>
            <div className="business-advantages__card">
            <svg width="64" height="64" viewBox="0 0 64 64" className="business-advantages__card-icon"><g fill="none" fill-rule="evenodd"><path d="M0 0h64v64H0z"></path><path fill="#000" fill-rule="nonzero" d="M22 4h20a5 5 0 015 5v46a5 5 0 01-5 5H22a5 5 0 01-5-5V9a5 5 0 015-5zm0 1.5A3.5 3.5 0 0018.5 9v46a3.5 3.5 0 003.5 3.5h20a3.5 3.5 0 003.5-3.5V9A3.5 3.5 0 0042 5.5H22z"></path><path fill="#000" fill-rule="nonzero" d="M18 50h28v1.5H18z"></path><circle cx="32" cy="55" r="2" fill="#000"></circle></g></svg>
              <div className="business-advantages__card-texts">
                <h3 className="business-advantages__card-title"><span className="actualTitle">Easy</span></h3>
                <Text className="business-advantages__card-description" content={`Start taking orders right on your tablet, phone, receipt printer, or POS - all with a couple of taps.`}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mainSection">
        <div className="mainBox">
          <div className="callToAction">
            <div className="inner">
              <Heading
                className="header"
                content="Orders your way."
              />
              <Text
                className="text"
                {...{ fontSize: '18px', color: '#fff', pt: '20px', lineHeight: 1.4 }}
                content="Access our large diner base and engage your existing customers using our marketing options, all paid by Ayazona. It’s free, safe, and simple for you and your dine-in guests. Just scan & order. Easy as that. Your regular customers remain commission-free for life. Restaurant-friendly fee only applies on diners coming from the platform."
              />
              <CustomLink href="https://partner.ayazona.com/account/create" target="_blank" rel="nofollow">
                  Get Started
              </CustomLink>
            </div>
          </div>
        </div>
      </div>
      <div className="freeSection">
        <div className="freeMobileImage">
          <Image src={OptionsImage5} className="img" />
        </div>
        <div className="freeInfo">
          <h2 className="title">Data to scale your business.</h2>
          <p className="listInfo">Get access to tools & data, which you can use to run your own promotions and target the right customer. Take part in local and national campaigns.</p>
          <a href="https://partner.ayazona.com/account/create" target="_blank" rel="nofollow"><button className="learn">Learn more <span>→</span></button></a>
        </div>
        <div className="freeImage">
          <Image src={OptionsImage5} className="img" />
        </div>
      </div>
      <div className="freeSection">
        <div className="optionsImage">
          <Image src={OptionsImage2} className="img" />
        </div>
        <div className="optionsInfo">
          <h2 className="optionsTitle">A great customer experience.</h2>
          <p className="listInfo">Let your digital storefront make the first impression. From an order being placed to the food being delivered, Ayazona will support you every step of the way, to make sure your customer has the best experience.</p>
          <a href="https://partner.ayazona.com/account/create" target="_blank" rel="nofollow"><button className="learn">Learn more <span>→</span></button></a>
        </div>
      </div>
      <div className="freeSection">
        <div className="freeMobileImage">
          <Image src={OptionsImage1} className="img" />
        </div>
        <div className="freeInfo">
          <h2 className="title">Connect with new local customers.</h2>
          <p className="listInfo">Grow your sales and become a favorite. With Ayazona, you can take orders either by using our own rider network or your own delivery fleet. This allows you to reach more customers, more often.</p>
          <a href="https://partner.ayazona.com/account/create" target="_blank" rel="nofollow"><button className="learn">Learn more <span>→</span></button></a>
        </div>
        <div className="freeImage">
          <Image src={OptionsImage1} className="img" />
        </div>
      </div>
      <div className="freeSection">
        <div className="optionsImage">
          <Image src={OptionsImage4} className="img" />
        </div>
        <div className="optionsInfo">
          <h2 className="optionsTitle">Minimize losses and wastes.</h2>
          <p className="listInfo">One-third of all food produced is thrown away annually, resulting in 1.3 billion tonnes of waste worldwide. With Ayazona you can rescue unsold meals with a discount. All food should be eaten. Let’s fight waste together!</p>
          <a href="https://partner.ayazona.com/account/create" target="_blank" rel="nofollow"><button className="learn">Learn more <span>→</span></button></a>
        </div>
      </div>
      <div className="actionSection">
        <div className="actionInner">
          <h2 className="actionHeader">Ready for more business?</h2>
          <p className="actionText">Sign up today and start receiving orders in just a few days.</p>
          <div className="actionArea">
          <a href="https://partner.ayazona.com/account/create" target="_blank" rel="nofollow"><button className="actionButton"><span>Get Started <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="actionIcon"><path d="M10 2L8.6 3.4 14.2 9H2v2h12.2l-5.6 5.6L10 18l8-8z"></path></svg></span></button></a>
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
