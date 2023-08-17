import styled from 'styled-components';

const FeatureSectionWrapper = styled.section`
  width: 100%;
  margin: auto;
  .sectionHeader {
    height: 177px;
    opacity: 1;
    border-bottom: 1px solid rgba(217, 219, 224, 0.5);
    @media screen and (max-width: 667px) {
      display: none;
    }
  }
  .innerSection {
    max-width: 1300px;
    height: 100%;
    width: 100%;
    position: relative;
    margin: 0px auto;
    @media screen and (max-width: 1350px) {
      padding: 0 40px;
    }
    @media screen and (max-width: 800px) {
      padding: 0 15px;
    }
  }
  .mainHeader {
    position: absolute;
    bottom: 24px;
    opacity: 1;
    transform: translateY(0%);
    transition: opacity 300ms ease-in-out 0s, transform 300ms linear 0s;
  }
  .title {
    font-size: 42px;
    letter-spacing: -2.4px;
    font-weight: 600;
    line-height: normal;
    color: rgb(45, 49, 56);
    margin: 0px;
    @media screen and (max-width: 768px) {
      font-size: 32px;
      letter-spacing: -2px;
    }
    @media screen and (max-width: 667px) {
      font-size: 28px;
      letter-spacing: -1.44px;
    }
  }
  .mainSection {
    max-width: 1300px;
    margin: 0px auto;
    box-sizing: content-box;
    @media screen and (max-width: 1350px) {
      padding: 0 40px;
    }
    @media screen and (max-width: 800px) {
      padding: 0 15px;
    }
  }
  .container {
    margin-top: 40px;
    display: flex;
    @media screen and (max-width: 1000px) {
      flex-direction: column;
    }
  }
  .avatar {
    width: 160px;
    margin-right: 77px;
    @media screen and (max-width: 1000px) {
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      margin-right: initial;
      margin-bottom: 60px;
      width: 100%;
    }
  }
  .css-avatar {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: column;
  }
  .imageSection {
    position: relative;
    overflow: hidden;
    font-size: 12px;
    letter-spacing: -0.1px;
    font-weight: 500;
    text-transform: uppercase;
    width: 80px;
    height: 80px;
    border-radius: 80px;
    background-color: rgba(0, 0, 0, 0.1);
    text-align: center;
    line-height: 80px;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .sec {
    height: 160px;
    padding-bottom: 0px;
  }
  .button {
    font-size: 12px;
    font-family: BigHearted;
    letter-spacing: 0px;
    text-transform: uppercase;
    line-height: normal;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgba(217, 219, 224, 0.5);
    position: relative;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    width: 160px;
    height: 40px;
    border-radius: 160px;
    text-align: center;
    cursor: pointer;
  }
  .innerIcon {
    margin: auto;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
  }
  .icon {
    display: inline-block;
    margin-right: 9px;
  }
  .css-1p25 {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 160px;
    height: 40px;
    opacity: 0;
    cursor: pointer;
  }
  .myName {
    display: none;
    font-size: 24px;
    letter-spacing: -1.16px;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 15px;
    @media screen and (max-width: 1000px) {
      display: block;
    }
  }
  .account {
    width: 100%;
  }
  .accountDetails {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(217, 219, 224, 0.5);
  }
  .css-accountDetails {
    font-size: 21px;
    letter-spacing: -0.88px;
    font-weight: 600;
    line-height: normal;
  }
  .info {
    position: relative;
    border-top: 0px;
    border-bottom: 1px solid rgba(217, 219, 224, 0.5);
    margin-bottom: 32px;
  }
  .infox {
    position: relative;
    border-top: 0px;
    margin-bottom: 32px;
  }
  .wllts-container {
    background: #0575e6;
    background: -webkit-linear-gradient(to right, #0575e6, #021b79);
    background: linear-gradient(to right, #0575e6, #021b79);
    border-radius: 12px;
  }
  .wllt {
    border-radius: 10px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    max-width: 100%;
    overflow: hidden;
    width: 100%;

    @media screen and (max-width: 480px) {
      flex-direction: column;
    }
  }

  .wllt h6 {
    opacity: 0.6;
    margin: 0;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .balance {
    letter-spacing: 1px;
    margin: 10px 0;
    color: #fff;
    font-weight: 600;
    font-size: 35px;
  }
  .wllt-name {
    font-size: 1.5em;
    letter-spacing: 1px;
    margin: 10px 0;
    color: #fff;
    font-weight: 600;
  }

  .wllt-preview {
    border-right: 1px solid;
    color: #fff;
    padding: 30px;
    max-width: 350px;
    width: 350px;
    @media screen and (max-width: 480px) {
      max-width: 100%;
      width: 100%;
      border-right: none;
      border-bottom: 1px solid;
    }
  }

  .wllt-preview a {
    color: #fff;
    display: inline-block;
    font-size: 12px;
    opacity: 0.6;
    margin-top: 30px;
    text-decoration: none;
  }

  .wllt-info {
    padding: 30px;
    position: relative;
    width: 100%;
    h6 {
      color: #fff;
    }
  }

  .progress-container {
    position: absolute;
    top: 30px;
    right: 30px;
    text-align: right;
    width: 150px;
  }

  .progress {
    background-color: #ddd;
    border-radius: 3px;
    height: 5px;
    width: 100%;
  }

  .progress::after {
    border-radius: 3px;
    background-color: #2a265f;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 5px;
    width: 66%;
  }

  .progress-text {
    font-size: 15px;
    color: #fff;
    font-weight: 600;
    letter-spacing: 1px;
  }

  .btnw {
    background-color: #fff;
    border: 0;
    border-radius: 50px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
    color: #2a265f;
    font-size: 16px;
    padding: 12px 25px;
    position: absolute;
    bottom: 30px;
    right: 30px;
    letter-spacing: 1px;
    cursor: pointer;
  }

  .floating-btn {
    border-radius: 26.5px;
    background-color: #001f61;
    border: 1px solid #001f61;
    box-shadow: 0 16px 22px -17px #03153b;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    line-height: 20px;
    padding: 12px 20px;
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 999;
  }

  .floating-btn:hover {
    background-color: #ffffff;
    color: #001f61;
  }

  .floating-btn:focus {
    outline: none;
  }

  .floating-text {
    background-color: #001f61;
    border-radius: 10px 10px 0 0;
    color: #fff;
    font-family: 'Muli';
    padding: 7px 15px;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    z-index: 998;
  }

  .floating-text a {
    color: #ff7500;
    text-decoration: none;
  }

  @media screen and (max-width: 480px) {
    .social-panel-container.visible {
      transform: translateX(0px);
    }

    .floating-btn {
      right: 10px;
    }
  }
  .name {
    border-bottom: 1px solid rgba(217, 219, 224, 0.5);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 22px;
    line-height: normal;
    user-select: none;
    cursor: pointer;
    :last-child {
      border-bottom: 0px;
    }
  }
  .field {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
  .css-a6w00 {
    background-color: transparent;
    cursor: pointer;
    font-size: 16px;
    letter-spacing: -0.28px;
    font-weight: 300;
    line-height: normal;
    width: 100%;
    color: rgb(45, 49, 56);
    padding: 0px;
    margin: 0px;
    border: none;
    color: rgb(45, 49, 56);
  }
  .btn {
    font-size: 12px;
    letter-spacing: 0.72px;
    font-weight: 600;
    text-transform: uppercase;
    line-height: normal;
    border: 0px;
    background: transparent;
    color: rgb(45, 49, 56);
    cursor: pointer;
  }
  .personal {
    border-bottom: 1px solid rgba(217, 219, 224, 0.5);
    display: flex;
    line-height: normal;
    padding-bottom: 22px;
    padding-top: 20px;
    :last-child {
      border-bottom: 0px;
    }
  }
  .e1v11p8r4 {
    position: relative;
    margin-right: 13px;
  }
  .subH {
    font-size: 16px;
    letter-spacing: -0.28px;
    font-weight: 500;
    line-height: normal;
  }
  .email {
    font-size: 16px;
    letter-spacing: 0.14px;
    font-weight: 400;
    color: rgb(143, 149, 163);
    line-height: 24px;
  }
  .promos {
    margin-bottom: 36px;
  }
  .code {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .codeInner {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    height: 48px;
    padding: 5px;
    padding-left: 12px;
    padding-right: 12px;
    border: 1px solid rgb(239, 239, 239);
  }
  .css-6q {
    border-radius: 0px;
    appearance: none;
    width: 100%;
    caret-color: rgb(0, 0, 0);
    font-size: 14px;
    letter-spacing: 0.14px;
    font-weight: 300;
    line-height: normal;
    height: 100%;
    color: rgb(45, 49, 56);
    box-shadow: none !important;
    border: none;
  }
  .apply {
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    line-height: normal;
    letter-spacing: 0.7px;
    height: 100%;
    cursor: pointer;
    border: 0px;
    padding: 0px;
    background-color: rgb(255, 255, 255);
    color: rgb(45, 49, 56);
    margin-left: 16px;
    :disabled {
      opacity: 0.3;
    }
  }
  .addressAction {
    max-width: 1300px;
    margin: 0px auto;
    box-sizing: content-box;
    padding-left: 0px;
    padding-right: 0px;
    @media screen and (max-width: 1350px) {
      padding: 0 40px;
    }
    @media screen and (max-width: 800px) {
      padding: 0 15px;
    }
  }
  .addressInner {
    position: relative;
    border-top: 0px;
    border-bottom: 0px;
    margin-bottom: 32px;
  }
  .adr {
    font-size: 16px;
    letter-spacing: -0.28px;
    font-weight: 500;
    line-height: normal;
    cursor: pointer;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding-top: 21px;
    padding-bottom: 21px;
  }
  .newAdr {
    font-size: 16px;
    letter-spacing: -0.28px;
    font-weight: 500;
    line-height: normal;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }
  .add {
    margin-right: 16px;
  }
`;

export default FeatureSectionWrapper;
