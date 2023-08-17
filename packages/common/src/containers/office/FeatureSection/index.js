import React from 'react';
import PropTypes from 'prop-types';
 import Text from '../../../layout/elements/Text';
import Heading from '../../../layout/elements/Heading';
import Link from '../../../layout/elements/Link';
import Image from '../../../layout/elements/Image';
import {FeatureSectionWrapper, BackgroundWrapper} from './featureSection.style';
import styled from 'styled-components';
import officeDemo from '../../../assets/image/office/showcase.935cee22.jpg';

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
          <h1 className="business-advantages__title"><span className="title">Why your company should try Ayazona</span></h1>
          <div className="business-advantages__cards">
            <div className="business-advantages__card">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" className="business-advantages__card-icon"><g fill="none" fill-rule="evenodd"><circle cx="32" cy="32" r="27.25" stroke="#000" stroke-width="1.5"></circle><g fill="#000" transform="translate(22 23)"><circle cx="2.5" cy="2.5" r="2.5"></circle><circle cx="17.5" cy="2.5" r="2.5"></circle></g><path stroke="#000" stroke-linecap="round" stroke-width="1.5" d="M16.759 36.523c.582 7.91 7.183 14.145 15.24 14.145 8.046 0 14.639-6.216 15.24-14.107"></path></g></svg>
              <div className="business-advantages__card-texts">
                <h3 className="business-advantages__card-title"><span className="actualTitle">Happier employees</span></h3>
                <Text className="business-advantages__card-description" content={`Dining at restaurants empowers your employees to be happier and more productive.`}/>
              </div>
            </div>
            <div className="business-advantages__card">
             <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" className="business-advantages__card-icon"><g fill="none" fill-rule="evenodd"><path d="M0 0h64v64H0z"></path><path fill="#000" d="M31.3 43.45v-2.5c-2.15-.2-4.117-1.058-5.9-2.575l1.125-1.5c1.567 1.4 3.183 2.192 4.85 2.375V33c-1.867-.45-3.22-1.05-4.063-1.8-.841-.75-1.262-1.783-1.262-3.1 0-1.283.487-2.35 1.462-3.2.976-.85 2.238-1.317 3.788-1.4v-1.45h1.6v1.5c1.667.15 3.258.817 4.775 2l-1.075 1.5c-1.133-.967-2.392-1.567-3.775-1.8v6.15c1.9.433 3.275 1.037 4.125 1.813.85.775 1.275 1.804 1.275 3.087 0 1.333-.492 2.425-1.475 3.275-.983.85-2.267 1.325-3.85 1.425v2.45h-1.6zm.075-12.4v-5.875c-1.033.033-1.858.317-2.475.85-.617.533-.925 1.2-.925 2 0 .75.242 1.358.725 1.825.483.467 1.375.867 2.675 1.2zm1.45 8.275c1.05-.05 1.892-.346 2.525-.888.633-.541.95-1.229.95-2.062 0-.767-.246-1.383-.737-1.85-.492-.467-1.405-.858-2.738-1.175v5.975z"></path><circle cx="32" cy="32" r="27.25" stroke="#000" stroke-width="1.5"></circle></g></svg>
              <div className="business-advantages__card-texts">
                <h3 className="business-advantages__card-title"><span className="actualTitle">Clear costs</span></h3>
                <Text className="business-advantages__card-description" content={`The company only pays or co-pays regular restaurant menu prices. No additional fees.`}/>
              </div>
            </div>
            <div className="business-advantages__card">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" className="business-advantages__card-icon"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5"><path d="M42.585 25.868c0-5.909-4.79-10.698-10.698-10.698-5.909 0-10.698 4.79-10.698 10.698s4.79 10.698 10.698 10.698 10.698-4.79 10.698-10.698"></path><path stroke-linejoin="round" d="M48.193 40.502c-.926 1.313-1.82 2.476-3.439 4.507-.578.726-.865 1.086-1.151 1.448-.54.682-.98 1.245-1.395 1.79a547.682 547.682 0 01-4.976 6.354c.068-.084-1.536 1.973-2.293 2.918l-.18.225a53.625 53.625 0 01-1.67 1.997 8.943 8.943 0 01-.63.652c-.11.101-.209.177-.312.236-.338.192-.723.243-1.056-.181L17.856 43.375c-5.69-7.302-7.606-10.988-7.606-16.867 0-11.744 9.69-21.258 21.637-21.258 11.946 0 21.637 9.514 21.637 21.258 0 4.8-1.779 9.06-5.331 13.994z"></path><path stroke-linecap="round" d="M31.75 20.5v6m2.94 3.234l-2.942-3.217"></path></g></svg>
              <div className="business-advantages__card-texts">
                <h3 className="business-advantages__card-title"><span className="actualTitle">Use anytime, anywhere</span></h3>
                <Text className="business-advantages__card-description" content={`Both in-office and field employees can enjoy any of our partner restaurants on their own schedule.`}/>
              </div>
            </div>
            <div className="business-advantages__card">
            <svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="business-advantages__card-icon"><g fill="none" fill-rule="evenodd"><g transform="translate(10 5)" stroke="#000" stroke-width="1.5"><path d="M-2.128 26.63h53.256l-6.4 5.15H4.272l-6.401-5.15z" stroke-linecap="round" stroke-linejoin="round"></path><path d="M47.33 26.63C46.938 14.285 36.866 4.4 24.5 4.4c-12.365 0-22.437 9.885-22.83 22.23h45.66z"></path><ellipse cx="24.5" cy="1.825" rx="1.815" ry="1.825"></ellipse></g><path d="M51.894 38.063l-.234-1.27H21.83l-.83.503-5.508 3.653a4.52 4.52 0 00.435 5.487 4.328 4.328 0 006.184.257 183.607 183.607 0 013.772-3.436l.162-.143.213-.037c4.625-.81 12.848-2.119 24.672-3.929a1.15 1.15 0 00.963-1.085z" stroke="#000" stroke-width="1.53"></path><path fill="#FFF" d="M1.393 51.032l12.786-10.729 10.537 12.558L11.93 63.59z"></path><path stroke="#000" stroke-width="1.53" stroke-linecap="round" stroke-linejoin="round" d="M1.088 48.844L14.2 39.966l10.043 12.225-11.728 10.477"></path></g></svg>
              <div className="business-advantages__card-texts">
                <h3 className="business-advantages__card-title"><span className="actualTitle">Real dining experiences</span></h3>
                <Text className="business-advantages__card-description" content={`Your employees receive exceptional service at great restaurants, not food in a box.`}/>
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
                content="A benefit for employees."
              />
              <Text
                className="text"
                {...{ fontSize: '18px', color: '#fff', pt: '20px', lineHeight: 1.4 }}
                content="Easily place orders for smaller meetings or company-wide lunches right on your computer. Should you have any questions or issues, our customer support and dedicated account managers are only one click away."
              />
              <CustomLink>
                  Get Started
              </CustomLink>
            </div>
          </div>
        </div>
      </div>
      <div className="demoScreen">
        <div className="innerContent">
          <div className="content">
            <div className="contentInfo">
              <Heading className="infoHeader" content={`The same user experience.`} />
              <Text className="infoText" content={`With our corporate service Ayazona office, you can save time and make office dining easy and fast. Choose from a wide selection of great restaurants and make orders in advance. `} />
            </div>
            </div>
            <div className="imageSection">
              <Image className="officeImage" src={officeDemo} alt="Let your team use non-contact delivery or curbside pickup—or give them the option to do either. At checkout, their Business Credits will automatically apply for the times and locations you decide." />
            </div>
        </div>
      </div>
      <div className="joinAyazonaBlock">
        <div className="joinSection">
          <div className="joinContent">
            <div className="joinInfo">
              <Heading className="joinHeader" content={`Try Office.`} />
              <Text className="joinText" content={`Give your employees the best options. Sign up for Ayazona for Office.`} />
              <CustomJoin>
                  Get Started
              </CustomJoin>
            </div>
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
