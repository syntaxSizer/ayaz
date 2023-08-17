import styled from 'styled-components';

const BackgroundWrapper = styled.div`
  background: ${props => props.bg || 'initial'};
`;
const FeatureSectionWrapper = styled.section`
  margin: auto;
  padding: 80px 0 0;
  @media screen and (max-width: 1440px) {
    padding: 40px 0 0;
  }
  @media screen and (max-width: 768px) {
    padding: 40px 0 0;
  }
  @media screen and (max-width: 500px) {
    padding: 30px 0 0;
  }
  .mainBox {
    max-width: 1300px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 1350px) {
      padding: 0 40px;
    }
    @media screen and (max-width: 800px) {
      padding: 0 15px;
    }
    @media screen and (max-width: 913px) {
      flex-direction: column;
    }
  }
  .row {
    @media screen and (max-width: 913px) {
      width: 100%;
      padding: 30px 20px 0 20px;
    }
  }

  .listItem {
    display: flex;
    align-items: center;
    padding: 12px;
    p {
      margin: 0 12px 0 12px;
      font-size: 20px;
      margin-bottom: 0;
    }
  }

  .secondBox {
    margin: auto;
    max-width: 1300px;
    display: flex;
    padding: 0 10px;
    margin-bottom: 50px;
    @media screen and (max-width: 913px) {
      flex-direction: column;
    }
    .img {
      width: 50%;
    }
    .modified {
      margin: 70px 0 0 50px;
      @media screen and (max-width: 999px) {
        margin: auto;
      }
    }
    .header {
      margin: 16px 0 30px;
      padding: 100px 100px 0 0;
      font-size: 48px;
      @media screen and (max-width: 940px) {
        margin-bottom: 20px;
      }
      @media screen and (max-width: 768px) {
        font-size: 30px;
      }
    }
    .text {
      margin: 16px 0 30px;
      padding: 0 0 0 0px;
      color: #8f95a3;
      font-size: 18px;
      line-height: 1.4;
    }
    .appImageBox {
      padding-top: 30px;
      margin-bottom: -8px;
      width: 100%;
    }
  }

  .imageBanner {
    background: #002524;
    margin: auto;
    max-width: 1300px;
    display: flex;
    padding: 0 10px;
    @media screen and (max-width: 913px) {
      flex-direction: column;
    }

    .header {
      padding: 100px 0 0 0;
      margin: 0;
      color: #fff;
      margin-top: 50px;
      letter-spacing: -0.48px;
      font-weight: 600;
      line-height: 1.4;
      font-size: 48px;
      padding-top: 20px;
      @media screen and (max-width: 940px) {
        margin-bottom: 80px;
      }
      @media screen and (max-width: 768px) {
        font-size: 30px;
      }
    }
    .appImageBox {
      margin-top: -100px;
      padding: 30px 30px 0 30px;
    }
  }
  .headerButton {
    background: #002524;
    text-decoration: none;
    color: #ffffff;
    padding: 15px 52px;
    border-radius: 30px;
    font-size: 14px;
  }
  .boxHeader {
    line-height: 1.4;
    font-size: 28px;
    color: #202125;
    @media screen and (max-width: 768px) {
      font-size: 24px;
    }
    @media screen and (max-width: 599px) {
      font-size: 14px;
    }
  }
  .boxText {
    font-size: 30px;
    line-height: 1.4;
  }
  .imageTag {
    padding-top: 20px;
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
    font-family: Ayazona, 'Helvetica Neue', Helvetica, Helvetica;
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

  .callToAction {
    max-width: 1300px;
    word-break: break-word;
    display: flex;
    padding: 0px 49px;
    margin: auto;
    height: fit-content;
    .modified {
      margin: 70px 0 0 50px;
    }
    .text-wrapper {
      width: 500px;
      margin: 0 30px 0 30px;
    }
    .header {
      margin: 0;
      color: #202125;
      line-height: 1.4;
      font-size: 48px;
      font-weight: 600;
      letter-spacing: -1.7px;
    }
    .text {
      margin: 16px 0 24px;
      color: #8f95a3;
      font-size: 16px;
      line-height: 1.4;
    }
    .image {
      max-width: 100%;
    }
    @media screen and (max-width: 999px) {
      flex-direction: column;
      .modified {
        margin: auto;
      }
      .text-wrapper {
        margin: auto;
        width: 100%;
      }
      .header {
        font-size: 25px;
      }
      .text {
        font-size: 16px;
      }
    }
  }
`;

export { BackgroundWrapper, FeatureSectionWrapper };
