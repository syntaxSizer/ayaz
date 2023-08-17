import styled from 'styled-components';

const FeatureSectionWrapper = styled.section`
  margin: auto;
  padding: 0;
  @media screen and (max-width: 1440px) {
    padding: 40px 0 50px;
  }
  @media screen and (max-width: 768px) {
    padding: 40px 0 0px;
  }
  @media screen and (max-width: 500px) {
    padding: 30px 0;
  }

  .logoWrapper {
    display: flex;
    justify-content: baseline;
    .header {
      margin: 0!important;
    }
    .logoImage {
      margin-top: 0;
      margin-right: 12px;
      padding: 0!important;
      height: 50px;
    }
  }

  .mainBox {
    max-width: 1300px;
    margin: auto;
    @media screen and (max-width: 1350px) {
      padding: 0 40px;
    }  
    @media screen and (max-width: 800px) {
      padding: 0 15px;
    }
    margin-bottom: 80px;
    display: flex;
    justify-content: space-between;
    img {
      margin-top: -35px;
    }
    .appDownload {
      width: 90%;
      margin-top: 20px;
    }
    .header {
      padding-bottom: 20px;
      padding-top: 20px;
      margin-top: 70px;
      color: #202125;
      line-height: 1.4;
      font-size: 58px;
      font-weight: 600;
      letter-spacing: -1.7px;
      @media screen and (max-width: 768px) {
        font-size: 40px;
      }
    }
    .text {
      margin: 16px 0 24px;
      color: #8F95A3;
      font-size: 18px;
      line-height: 1.4;
    }
    .iosBlock {
      img {
        padding-top: 50px;
      }
    }
    @media screen and (max-width: 800px) {
      display: none;
    }
  }
  .mobileMainBox {
    display: none;
    flex-direction: column;
    justify-conent: center;
    align-items: center;
    .header {
      font-size: 48px;
      @media screen and (max-width: 768px) {
        font-size: 40px;
      }
    }
    @media screen and (max-width: 800px) {
      display: flex;
      text-align: center;
      margin: 40px 0 30px 0;
    }
    .title, .text {text-align: center}
    img {
      padding: 15px 0 15px 0;
    }
    .text {
      margin: 16px 0 24px;
      color: #8F95A3;
      font-size: 18px;
      line-height: 1.4;
    }
  }

  .registerButton {
    background: #9313A6;
    text-decoration: none;
    color: #ffffff;
    padding: 15px 52px;
    border-radius: 30px;
    font-size: 14px;
  }
  .offerBox {
    max-width: 1300px;
    margin: auto;
    margin-top: 60px;
    margin-bottom: 60px;
    @media screen and (max-width: 1350px) {
      padding: 0 40px;
    }  
    @media screen and (max-width: 800px) {
      padding: 0 15px;
    }
    color: #fff;
    padding: 20px;
    .boxHeader {
      margin: 0;
      color: #fff;
      line-height: 1.4;
      font-size: 48px;
      font-family: Ayazona, 'Helvetica Neue', Helvetica, 'Helvetica Neue'
      font-weight: 600;
      letter-spacing: -1.7px;
      @media screen and (max-width: 900px) {
        text-align: center
      }
      @media screen and (max-width: 768px) {
        font-size: 40px;
      }
    }
    .boxText {
      margin: 16px 0 24px;
      color: #fff;
      font-size: 18px;
      line-height: 1.4;
      @media screen and (max-width: 900px) {
        text-align: center
      }
    }
  }

  .joinAyazonaBlock {
    text-align: center;
    width: 575px;
    padding: 65px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    @media screen and (max-width: 768px) {
      padding-left: 0;
      padding-right: 0;
      width: 100%;
      .borderedBoxText {
        display: none;
      }
    }
  }

  .joinAyazonaBlock .header {
    line-height: 1.4;
    font-size: 65px;
    font-family: Ayazona,'Helvetica Neue', Helvetica,
      Helvetica;
    font-weight: 600;
    letter-spacing: -1.7px;
    color: #202125;
    @media screen and (max-width: 768px) {
      font-size: 30px;
    }
  }

  .joinButton {
    background: #002524;
    text-decoration: none;
    color: #ffffff;
    padding: 18px 46px;
    border-radius: 30px;
    font-size: 14px;
  }

  .secondBox {
    display: flex;
    padding: 0 60px;
    background: #faf0f0;
    @media screen and (max-width: 913px) {
      flex-direction: column;
    }
  }
  .secondBox .header {
    padding: 100px 0 0 0;
    font-size: 39px;
    @media screen and (max-width: 940px) {
      margin-bottom: 80px;
    }
  }
  .secondBox .imageTag {
    margin-top: -100px;
    padding: 30px 30px 0 30px;
  }
  .imageTag {
    padding-top: 20px;
  }

  .joinUnlimitedBlock {
    padding: 65px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 768px) {
      padding-left: 0px;
      padding-right: 0px;
    }
  }

  .joinUnlimitedBlock .header {
    line-height: 1.4;
    font-size: 65px;
    font-family: Ayazona,'Helvetica Neue', Helvetica,
      Helvetica;
    font-weight: 600;
    letter-spacing: -1.7px;
    color: #202125;
    @media screen and (max-width: 768px) {
      font-size: 40px;
    }
  }

  .listWrapper {
    margin: 30px 30px 0 30px;
    li {
      font-size: 20px;
      font-weight: 600;
      line-height: 1.4;
      font-family: Ayazona,'Helvetica Neue', Helvetica;
      text-align: left;
      list-style-type: disc;
    }
  }
  .joinButton {
    background: #c61354;
    text-decoration: none;
    color: #ffffff;
    padding: 18px 46px;
    border-radius: 30px;
    font-size: 14px;
  }

  .borderedBox {
    padding: 56px 49px;
    margin:0 20px;
    height: fit-content;
    border: solid 20px #9313A6;
    @media screen and (max-width: 913px) {
      width: 100%;
      margin: 0;
    }
  }
`;

export default FeatureSectionWrapper;
