import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../../layout/elements/Text';
import Heading from '../../../layout/elements/Heading';
import Input from '../../../layout/elements/Input';
import Image from '../../../layout/elements/Image';
import Link from '../../../layout/elements/Link';
import { DownloadAppBanner, SearchPanelWrapper } from './searchPanel.style';
import Button from '../../../layout/elements/Button';
import styled from 'styled-components';

import android from '../../../assets/image/app/android.svg';
import apple from '../../../assets/image/app/appple.svg';
import mobileShot from '../../../assets/image/app/newMobile.jpg';
import { toast, Zoom } from 'react-toastify';

const TextMe = styled(Button)`
  background: #002524;
  margin: 20px 0 20px 0;
  color: #fff;
  padding: 16px 36px;
  cursor: pointer;
  border-radius: 30px;
  font-size: 12px;
  letter-spacing: 0.72px;
  font-weight: 600;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  text-align: center;
`;

const SearchPanel = ({ titleStyle, textStyle, btnStyle }) => {
  const [phoneData, setPhoneData] = React.useState('');

  const CustomBtn = () => {
    return (
      <TextMe
        onClick={() => {
          var phone = phoneData;
          var linkData = {
            tags: [],
            channel: 'Website',
            feature: 'TextMeTheApp',
            data: {
              foo: 'bar',
            },
          };
          var options = {};
          var callback = function(err, result) {
            if (err) {
              toast.info(
                'Please enter a valid number, including your country code.',
                {
                  position: toast.POSITION.BOTTOM_LEFT,
                  autoClose: 10000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  closeButton: false,
                  transition: Zoom,
                }
              );
            } else {
              toast.success(
                'SMS sent! Please check your phone for the app download link.',
                {
                  position: toast.POSITION.BOTTOM_LEFT,
                  autoClose: 10000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  closeButton: false,
                  transition: Zoom,
                }
              );
            }
          };
          branch.sendSMS(phone, linkData, options, callback);
          phone = '';
        }}
        title="GET THE APP"
        {...btnStyle}
      />
    );
  };
  return (
    <div>
      <DownloadAppBanner>
        <Heading
          className="header"
          content={'Download Ayazona'}
          {...titleStyle}
        />
        <div className="linksWrapper">
          <Link href="#">
            <button className="apple">
              <img src={apple} alt="ayazona asset" />
            </button>
          </Link>
          <Link href="#">
            <button className="android">
              <img src={android} alt="ayazona asset" />
            </button>
          </Link>
        </div>
      </DownloadAppBanner>
      <SearchPanelWrapper id="get-ayazona-app" {...{ as: 'section' }}>
        <div className="getAppBanner">
          <Heading
            content={'Try the app, get'}
            {...{ ...titleStyle, ...{ mb: '0px' } }}
          />
          <Heading content={'groceries in 30 mins.'} {...titleStyle} />
          <Text
            {...textStyle}
            content="With the best customer services and support, you can explore your local area, find your local favorites, and watch as we deliver your grocery right to your door at a budget familiar to you. Download the app and start ordering for free."
          />
          <form>
            <Input
              onChange={v => setPhoneData(v)}
              inputType="tel"
              placeholder="Enter your phone number to get the app."
            />
            <CustomBtn {...btnStyle} />
            <a className="directLink">We'll text you the download link</a>
          </form>
        </div>
        <div className="appImgBanner">
          <Image className="imgEl" src={mobileShot} alt="Ayazona app" />
          <Heading
            className="appImgHeader"
            content={'Try the app and get groceries in 30 mins.'}
            {...{ ...titleStyle, ...{ fontSize: '28px', mb: '0px' } }}
          />
          <Text
            className="mobileDescription"
            {...textStyle}
            content="With the best customer services and support, you can explore your local area, find your local favorites, and watch as we deliver your grocery right to your door at a budget familiar to you. Download the app and start ordering for free."
          />
          <TextMe
            className="mobileDownload"
            href="https://www.ayazona.app.link"
            title="DOWNLOAD NOW"
            {...btnStyle}
          />
        </div>
      </SearchPanelWrapper>
    </div>
  );
};

// SearchPanel style props
SearchPanel.propTypes = {
  titleStyle: PropTypes.object,
  hintTextStyle: PropTypes.object,
  textStyle: PropTypes.object,
  btnStyle: PropTypes.object,
};

// SearchPanel default style
SearchPanel.defaultProps = {
  // Title default style
  titleStyle: {
    fontSize: '35px',
    fontWeight: '500',
    color: '#000000',
    letterSpacing: '-0.025em',
    mb: '30px',
  },
  // hint default style
  hintStyle: {
    fontSize: '15px',
    fontWeight: '400',
    color: 'rgba(32, 32, 29, 0.55)',
    letterSpacing: '-0.025em',
    mt: '17px',
    ml: ['15px', '30px'],
    mb: '0',
  },
  textStyle: {
    margin: '16px 0 24px',
    color: '#8F95A3',
    fontSize: '16px',
    marginBottom: '0px',
    letterSpacing: '0.14px',
    lineHeight: '26px',
  },
  btnStyle: {
    background: '#002524',
    border: 'none',
    padding: '11px 20px',
    cursor: 'pointer',
    borderRadius: '8px',
    fontSize: '14px',
    letterSpacing: '0px',
    fontFamily: 'BigHearted',
    transition: 'background-color .2s ease-in-out,color .2s ease-in-out',
    textAlign: 'center',
  },
};

export default SearchPanel;
