import styled from 'styled-components';

const FeatureSectionWrapper = styled.section`
  max-width: 1300px;
  margin: auto;
  @media screen and (max-width: 1350px) {
    padding: 0px 40px;
  }
  @media screen and (max-width: 800px) {
    padding: 0px 15px;
  }
  .container {
    margin-top: 0px;
    margin-bottom: 100px;
    border-bottom: 2px solid rgb(217, 219, 223);
  }
  .innerSection {
    margin: 0px auto;
    max-width: 1300px;
  }
  .headerSection {
    padding: 0px;
  }
  .topArea {
    font-size: 18px;
    line-height: 1.56;
    color: rgb(0, 0, 0);
    position: relative;
  }
  .header {
    font-size: 96px;
    line-height: 0.94;
    letter-spacing: -5.2px;
    color: rgb(0, 0, 0);
    font-weight: 500;
    margin-top: 0px;
    margin-bottom: 10px;
    @media screen and (max-width: 800px) {
      font-size: 60px;
      line-height: 1;
      letter-spacing: -3.3px;
    }
  }
  .heroSection {
    max-width: 960px;
    width: 100%;
    margin: 0px auto;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;
    display: flex;
  }
  .imageShot {
    width: 50% @media screen and (max-width: 800px) {
      display: none;
    }
  }
  .shotSection {
    height: 768px;
    width: 510px;
    margin-left: -60px;
    margin-top: 110px;
    display: block;
    position: relative;
    overflow: hidden;
    background-color: transparent;
    max-width: 510px;
    max-height: 768px;
    transition: all 0.1s ease 0s;
    @media screen and (max-width: 800px) {
      display: none;
    }
  }
  .moreSection {
    padding-top: 120px;
    text-align: center;
    padding-bottom: 300px;
  }
  .moreTitle {
    font-size: 72px;
    line-height: 77px;
    letter-spacing: -2.5px;
    color: rgb(0, 0, 0);
    font-weight: bold;
    text-align: center;
    margin: 0px 0px 6px;
    @media screen and (max-width: 768px) {
      font-size: 52px;
      line-height: 77px;
      letter-spacing: -1.81px;
    }
    @media screen and (max-width: 768px) {
      font-size: 48px;
      line-height: 66px;
      letter-spacing: -1.5px;
    }
  }
  .secondTitle {
    font-size: 42px;
    line-height: 48px;
    letter-spacing: -1px;
    color: rgb(0, 0, 0);
    font-weight: 400;
    text-align: center;
    margin: 0px 0px 30px;
    font-family: Ayazona, 'Helvetica Neue', Helvetica;
    @media screen and (max-width: 768px) {
      font-size: 32px;
      line-height: 48px;
    }
    @media screen and (max-width: 768px) {
      margin: 0px 0px 30px;
      font-size: 18px;
      letter-spacing: 0px;
    }
  }
  .button {
    appearance: none;
    border: none;
    outline: none;
    font-family: BigHearted;
    letter-spacing: 0px;
    line-height: normal;
    cursor: pointer;
    text-align: center;
    height: 56px;
    transition: background-color 0.2s ease-in-out 0s, color 0.2s ease-in-out 0s;
    border-radius: 28px;
    background-color: #c61354;
    color: #fff;
    font-size: 18px;
    padding: 0px 30px;
    margin: 0px auto;
    width: auto;
    text-transform: none;
    text-decoration: none;
  }
  .actionIcon {
    fill: #fff;
    width: 16px;
    height: 16.8px;
    position: relative;
    top: 2px;
    left: 4px;
  }
  .imageHolder {
    position: absolute;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    transition: opacity 0.4s linear 0s;
    background-image: url(./../../../assets/image/ignite/2.jpeg);
    opacity: 1;
  }
  .secondImageHolder {
    position: absolute;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    transition: opacity 0.4s linear 0s;
    background-image: url(./../../../assets/image/ignite/1.jpeg);
    opacity: 1;
  }
  .level {
    height: auto;
    padding-bottom: 130.784%;
  }
  .secondLevel {
    height: auto;
    padding-bottom: 66.875%;
    @media screen and (max-width: 768px) {
      padding-bottom: 0px;
    }
  }
  .infoShot {
    width: 50%;
    @media screen and (max-width: 800px) {
      width: 100%;
    }
  }
  .imageArea {
    height: 321px;
    width: 480px;
    max-width: 480px;
    max-height: 321px;
    position: relative;
    overflow: hidden;
    background-color: transparent;
    @media screen and (max-width: 800px) {
      position: relative;
      overflow: hidden;
      background-color: transparent;
      width: 100%;
      height: auto;
      max-width: 100%;
    }
  }
  .textArea {
    padding: 70px 40px 20px;
    @media screen and (max-width: 768px) {
      padding: 42px 16px;
    }
  }
  .text {
    font-size: 21px;
    line-height: 1.52;
    letter-spacing: -0.1px;
    color: rgb(0, 0, 0);
    margin-top: 0px;
  }
  .missionSection {
    z-index: 10;
    max-width: 960px;
    margin-top: -20px;
    margin-left: auto;
    margin-right: auto;
    padding: 111px;
    border: 16px solid #c61354;
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 79px;
    @media screen and (max-width: 800px) {
      margin-bottom: 79px;
      padding: 100px 30px;
      margin-top: auto;
    }
  }
  .missionTitle {
    position: relative;
    display: block;
    font-size: 21px;
    line-height: 1.52;
    font-weight: 400;
    letter-spacing: -0.1px;
    text-align: center;
    color: rgb(0, 0, 0);
    margin: 0px auto 36px;
  }
  .missionStatement {
    font-size: 42px;
    line-height: 1.14;
    letter-spacing: -1.9px;
    text-align: center;
    margin: 0px;
    color: rgb(0, 0, 0);
    font-weight: 500;
    @media screen and (max-width: 768px) {
      font-size: 32px;
      line-height: 1.25;
      letter-spacing: -1px;
    }
  }
  .lonelyTitle {
    position: relative;
    display: block;
    font-size: 21px;
    line-height: 1.52;
    font-weight: 400;
    letter-spacing: -0.1px;
    text-align: center;
    color: rgb(0, 0, 0);
    margin: 0px auto 36px;
    ::after {
      content: '';
      position: absolute;
      left: 0px;
      right: 0px;
      height: 2px;
      margin-left: 50%;
      background-color: rgb(217, 219, 223);
      width: 59px;
      transform: translateX(-50%);
      bottom: -0.5em;
    }
  }
  .smileSection {
    padding-bottom: 103px;
    padding-top: 97px;
    @media screen and (max-width: 800px) {
      padding-bottom: 30px;
      padding-top: 30px;
    }
  }
  .innerSmile {
    flex-direction: row-reverse;
    max-width: 960px;
    width: 100%;
    margin: 0px auto;
    -webkit-box-pack: justify;
    justify-content: space-between;
    display: flex;
    @media screen and (max-width: 800px) {
      flex-direction: column;
      max-width: 100%;
      -webkit-box-pack: unset;
      justify-content: unset;
    }
  }
  .smileImage {
    width: 50%;
    @media screen and (max-width: 800px) {
      width: 100%;
      max-width: 100%;
    }
  }
  .imageHolder {
    height: 550px;
    width: 550px;
    max-width: 550px;
    max-height: 550px;
    position: relative;
    overflow: hidden;
    background-color: transparent;
    @media screen and (max-width: 800px) {
      position: relative;
      overflow: hidden;
      background-color: transparent;
      width: auto;
      height: auto;
    }
  }
  .smileInfo {
    width: 50%;
    padding: 0px 40px;
    @media screen and (max-width: 800px) {
      width: 100%;
      max-width: 100%;
      padding: unset;
    }
  }
  .infoHolder {
    padding: 0px;
    @media screen and (max-width: 800px) {
      padding: 0px 16px;
    }
  }
  .smileHeader {
    font-size: 48px;
    margin-top: 0px;
    line-height: 1.08;
    letter-spacing: -2.1px;
    font-weight: 500;
    color: rgb(0, 0, 0);
    @media screen and (max-width: 800px) {
      margin-top: 40px;
      line-height: 1.14;
      letter-spacing: -1.9px;
      font-size: 42px;
    }
  }
  .smiley {
    @media screen and (max-width: 800px) {
      width: 100%;
    }
  }
  .information {
    font-size: 18px;
    line-height: 1.56;
    color: rgb(0, 0, 0);
    margin-top: 0px;
    max-width: 44em;
  }
  .data {
    max-width: 960px;
    width: 100%;
    margin: 0px auto;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;
    display: flex;
  }
  .initialData {
    margin-right: 0px;
    width: 50%;
  }
  .dataInfo {
    display: block;
    font-size: 48px;
    font-weight: 500;
    line-height: 1.08;
    letter-spacing: -2.1px;
    color: rgb(0, 0, 0);
    margin: 0px auto;
  }
  .dataInfo2 {
    display: block;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: -0.1px;
    color: rgb(143, 149, 163);
  }
  .contactSection {
    padding: 0;
    border-top: 2px solid rgb(217, 219, 223);
  }
  .contactHeader {
    font-size: 21px;
    line-height: 1.52;
    letter-spacing: -0.1px;
    margin: 0px 0px 72px;
    color: rgb(0, 0, 0);
    font-weight: 400;
    margin-top: 50px;
  }
  .contactBox {
    width: 100%;
    margin: 0px auto;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;
    display: flex;
    @media screen and (max-width: 800px) {
      flex-direction: column;
      max-width: 100%;
    }
  }
  .theBox {
    width: 50%;
    @media screen and (max-width: 800px) {
      width: 100%;
    }
  }
  .insideBox {
    padding-bottom: 157px;
    @media screen and (max-width: 800px) {
      padding-bottom: 40px;
    }
  }
  .boxHeader {
    display: block;
    font-size: 28px;
    font-weight: 500;
    line-height: 1.21;
    letter-spacing: -1px;
  }
  .boxInfo {
    display: block;
    font-size: 12px;
    font-weight: 500;
    line-height: 2.33;
    letter-spacing: 0.4px;
    color: rgb(0, 0, 0);
    text-transform: uppercase;
  }
  .email {
    font-size: 18px;
    line-height: 1.56;
    color: rgb(0, 0, 0);
  }
  .emailAddress {
    background-image: linear-gradient(
      to top,
      #c61354 99%,
      rgb(255, 255, 255) 0%
    );
    background-position: 0px 1em;
    background-size: auto;
    background-repeat: no-repeat;
    display: inline;
    transition: all 100ms ease-in-out 0s;
  }
`;

export default FeatureSectionWrapper;
