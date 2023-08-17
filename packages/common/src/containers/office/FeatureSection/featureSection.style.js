import styled from 'styled-components';

const BackgroundWrapper = styled.div`
  background: ${props => props.bg || 'initial'};
`;
const FeatureSectionWrapper = styled.section`
  margin: auto;
  .mainSection {
    background-color: #f6f6f8;
    height: 468px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 80px 0;
  }
  .business-advantages {
    padding: 80px 0px;
    max-width: 1300px;
    width: 100%;
    margin: 0px auto;
    @media screen and (max-width: 1350px) {
      padding: 80px 12px;
    }
    @media screen and (max-width: 768px) {
      padding: 50px 12px;
    }
  }
  .business-advantages__content {
    width: 100%;
    margin: 0px auto;
  }
  .business-advantages__title {
    margin-bottom: 60px;
  }
  .title {
    font-weight: 700;
    font-size: 28px;
    line-height: 1.145;
    color: rgb(56, 52, 52);
    transition: color 0.3s ease 0s;
  }
  .business-advantages__cards {
    display: flex;
    flex-wrap: wrap;
  }
  .business-advantages__card {
    display: flex;
    flex-basis: 50%;
    :nth-child(n + 3) {
      margin-top: 95px;
    }
    @media screen and (max-width: 768px) {
      flex-basis: 100%;
      :nth-child(n + 3) {
        margin-top: 30px;
      }
      :nth-child(n + 2) {
        margin-top: 30px;
      }
    }
  }
  .business-advantages__card-icon {
    flex-shrink: 0;
  }
  .business-advantages__card-texts {
    padding: 0px 20px 0px 16px;
  }
  .business-advantages__card-title {
    margin: 0px;
    margin-bottom: 8px;
  }
  .actualTitle {
    font-weight: 700;
    font-size: 22px;
    line-height: 1.275;
    transition: color 0.3s ease 0s;
    color: rgb(56, 52, 52);
    margin: 0;
  }
  .business-advantages__card-description {
    font-weight: 400;
    font-size: 17px;
    line-height: 1.545;
    transition: color 0.3s ease 0s;
    color: rgb(56, 52, 52);
  }
  .mainBox {
    max-width: 1300px;
    margin: auto;
    display: flex;
    grid-column-gap: 32px;
    max-width: 100%;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    margin: 0 auto;
    width: 100%;
    @media screen and (max-width: 1350px) {
      padding: 0 40px;
    }
    @media screen and (max-width: 800px) {
      padding: 0 15px;
    }
    justify-content: space-between;
  }

  .joinAyazonaBlock {
    background-color: #22594b;
    height: 468px;
    padding: 120px 0;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
  }

  .joinSection {
    grid-column-gap: 64px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    margin: 0 auto;
    width: 100%;
    @media screen and (max-width: 800px) {
      grid-column-gap: 16px;
      max-width: 464px;
    }
  }

  .joinContent {
    grid-column: span 12;
  }

  .joinInfo {
    display: flex;
    flex-direction: column;
    text-align: center;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
  }

  .joinHeader {
    font-size: 48px;
    line-height: 56px;
    letter-spacing: -3px;
    color: #ffffff;
    font-weight: 600;
    margin: 0 0 20px;
    @media screen and (max-width: 800px) {
      margin: 0 0 20px;
      font-size: 36px;
      line-height: 40px;
      letter-spacing: -2px;
      max-width: 270px;
    }
  }

  .joinText {
    max-width: 896px;
    font-size: 22px;
    line-height: 32px;
    letter-spacing: -0.5px;
    color: #ffffff;
    margin: 0 0 32px;
    font-weight: 400;
    @media screen and (max-width: 800px) {
      font-weight: 400;
      font-size: 18px;
      line-height: 24px;
      letter-spacing: -0.5px;
      color: #ffffff;
      margin: 0 0 32px;
    }
  }

  .callToAction {
    grid-column: span 12;
    .text-wrapper {
      padding: 100px 20px 0 20px;
      width: 500px;
    }
    .header {
      font-weight: 600;
      margin: 0 0 20px;
      font-size: 48px;
      line-height: 56px;
      letter-spacing: -3px;
      max-width: 100%;
      color: #2f3137;
      @media screen and (max-width: 800px) {
        font-weight: 600;
        margin: 0 0 20px;
        font-size: 36px;
        line-height: 40px;
        letter-spacing: -2px;
        color: #2f3137;
        max-width: 270px;
      }
    }
    .text {
      font-size: 22px;
      line-height: 32px;
      letter-spacing: -0.5px;
      max-width: 896px;
      color: #002524;
      margin: 0 0 32px;
      font-weight: 400;
      @media screen and (max-width: 800px) {
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.5px;
        color: #002524;
        margin: 0 0 32px;
      }
    }
    .inner {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      text-align: center;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }
  }
  .demoScreen {
    transform: translateY(0);
  }
  .innerContent {
    margin-bottom: 120px;
    margin-top: 120px;
    padding-left: 48px;
    padding-right: 0;
    grid-column-gap: 64px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    width: 100%;
    margin: 0 auto;
    @media screen and (max-width: 800px) {
      box-sizing: border-box;
      display: grid;
      grid-column-gap: 16px;
      grid-template-columns: repeat(12, 1fr);
      margin: 0 auto;
      max-width: 464px;
      width: 100%;
      margin-bottom: 48px;
      margin-top: 48px;
      padding-left: 32px;
      padding-right: 32px;
    }
  }
  .content {
    order: unset;
    text-align: left;
    grid-column: 2 / span 4;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    margin: 0;
    @media screen and (max-width: 800px) {
      grid-column: span 12;
      justify-content: center;
      margin: 0;
      text-align: center;
      order: 1;
    }
  }
  .contentInfo {
    box-sizing: border-box;
    margin-bottom: 0;
    border-bottom: none;
    @media screen and (max-width: 800px) {
      box-sizing: border-box;
      margin-bottom: 0;
      border-bottom: none;
    }
  }
  .infoHeader {
    font-size: 48px;
    line-height: 56px;
    letter-spacing: -3px;
    font-weight: 600;
    margin: 0;
    @media screen and (max-width: 800px) {
      font-weight: 600;
      font-size: 36px;
      line-height: 40px;
      letter-spacing: -2px;
      margin: 0;
    }
  }
  .infoText {
    font-size: 22px;
    line-height: 32px;
    letter-spacing: -0.5px;
    color: #002524;
    margin: 8px 0 24px 0;
    font-weight: 400;
    @media screen and (max-width: 800px) {
      font-size: 18px;
      line-height: 24px;
    }
  }
  .imageSection {
    margin-top: 0;
    margin-bottom: 0;
    text-align: left;
    grid-column: 7 / span 6;
    order: unset;
    @media screen and (max-width: 800px) {
      grid-column: span 12;
      order: unset;
      margin-bottom: 48px;
    }
  }
  .officeImage {
    width: 100%;
  }
`;

export { BackgroundWrapper, FeatureSectionWrapper };
