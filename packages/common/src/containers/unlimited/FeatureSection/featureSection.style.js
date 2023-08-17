import styled from 'styled-components';

const FeatureSectionWrapper = styled.section`
  margin: auto;

  .welcomeSection {
    opacity: 1;
    transform: translateY(0);
    max-width: 1300px;
    grid-column-gap: 64px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(12,1fr);
    transition: opacity 0.4s ease 0s,transform 0.8s ease 0s;
    margin: 0 auto;
    width: 100%;
    margin-top: 120px;
    @media screen and (max-width: 800px) {
      max-width: 464px;
      width: 100%;
      grid-column-gap: 16px;
    }
  }
  .welcomeInner {
    grid-column: span 12;
    padding: 0;
  }
  .header {
    font-size: 48px;
    line-height: 56px;
    letter-spacing: -1.5px;
    font-weight: 400;
    color: #002524;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: auto;
    @media screen and (max-width: 800px) {
      font-size: 24px;
      line-height: 32px;
      letter-spacing: -0.5px;
    }
  }

  .freeSection {
    transform: translateY(0);
    max-width: 1300px;
    grid-column-gap: 64px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(12,1fr);
    margin: 0 auto;
    width: 100%;
    grid-row-gap: 16px;
    transition: opacity 0.4s ease 0s,transform 0.8s ease 0s;
    margin-top: 236px;
    @media screen and (max-width: 800px) {
      grid-column-gap: 16px;
      margin: 0 auto;
      margin-top: 107px;
      max-width: 100%;
    }
  }
  .freeInfo {
    grid-column: 1 / span 6;
    margin-top: auto;
    margin-bottom: auto;
    @media screen and (max-width: 800px) {
      grid-column: span 12;
      margin-top: auto;
      margin-bottom: auto;
      padding: 0 24px;
    }
  }
  .title {
    font-size: 48px;
    line-height: 56px;
    letter-spacing: -3px;
    font-weight: 600;
    color: #582D44;
    margin: 0 0 20px;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 800px) {
      flex-direction: column;
      font-size: 36px;
      line-height: 40px;
      letter-spacing: -2px;
      text-align: center;
    }
  }
  .list {
    margin: 0;
    width: fit-content;
    @media screen and (max-width: 800px) {
      margin: 0 auto;
    }
  }
  .listInfo {
    font-size: 22px;
    line-height: 32px;
    letter-spacing: -0.75px;
    font-weight: 400;
    color: #002524;
    @media screen and (max-width: 800px) {
      font-size: 18px;
      line-height: 24px;
      letter-spacing: -0.5px;
    }
  }
  .items {
    font-size: 22px;
    letter-spacing: -0.75px;
    font-weight: 400;
    color: #002524;
    line-height: 36px;
    list-style-type: disc;
    @media screen and (max-width: 800px) {
      font-size: 18px;
      line-height: 36px;
      letter-spacing: -0.5px;
    }
  }
  .freeMobileImage {
    grid-column: span 12;
    display: none;
    @media screen and (max-width: 800px) {
     display: block;
    }
  }
  .freeImage {
    grid-column: 7 / span 6;
    @media screen and (max-width: 800px) {
      display: none;
    }
  }
  .img {
    width: 100%;
  }

  .optionsSection {
    transform: translateY(0);
    max-width: 1300px;
    grid-column-gap: 64px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(12,1fr);
    margin: 0 auto;
    width: 100%;
    grid-row-gap: 16px;
    margin-top: 224px;
    transition: opacity 0.4s ease 0s,transform 0.8s ease 0s;
    @media screen and (max-width: 800px) {
      grid-column-gap: 16px;
      margin: 0 auto;
      margin-top: 107px;
      max-width: 100%;
    }
  }
  .optionsImage {
    grid-column: span 6;
    @media screen and (max-width: 800px) {
      grid-column: span 12;
    }
  }
  .optionsInfo {
    grid-column: span 6;
    width: 416px;
    max-width: 100%;
    margin: auto;
    @media screen and (max-width: 800px) {
      grid-column: span 12;
      margin-top: auto;
      margin-bottom: auto;
      padding: 0 24px;
    }
  }
  .optionsTitle {
    color: #582D44;
    font-size: 48px;
    line-height: 56px;
    letter-spacing: -3px;
  }
  .actionSection {
    transform: translateY(0);
    grid-column-gap: 64px;
    transition: opacity 0.4s ease 0s,transform 0.8s ease 0s;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(12,1fr);
    margin: 0 auto;
    width: 100%;
    margin-top: 240px;
    margin-bottom: 100px;
    @media screen and (max-width: 800px) {
      grid-column-gap: 16px;
      max-width: 464px;
      margin-top: 84px;
    }
  }
  .actionInner {
    grid-column: span 12;
  }
  .actionHeader {
    letter-spacing: -4.5px;
    line-height: 80px;
    font-size: 72px;
    text-align: center;
    margin: auto;
    margin-bottom: 8px;
    display: flex;
    font-weight: 600;
    color: #582D44;
    flex-direction: column;
    @media screen and (max-width: 800px) {
      letter-spacing: -3px;
      line-height: 56px;
      font-size: 48px;
      margin-bottom: 8px;
    }
  }
  .actionText {
    font-size: 22px;
    line-height: 32px;
    letter-spacing: -0.75px;
    color: #002524;
    text-align: center;
    margin: auto;
    width: 577px;
    max-width: 100%;
    margin-bottom: 32px;
    font-weight: 400;
    @media screen and (max-width: 800px) {
      font-size: 18px;
      line-height: 24px;
      letter-spacing: -0.5px;
      padding: 0 32px;
    }
  }
  .actionArea {
    text-align: center;
    margin: auto;
  }
  .actionButton {
    display: inline-flex;
    appearance: none;
    border: none;
    outline: none;
    cursor: pointer;
    position: relative;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    background-color: #582D44;
    color: #FFFFFF;
    padding: 23px 52px 22px 52px;
    font-weight: 500;
    font-size: 18px;
    line-height: 19px;
    letter-spacing: -0.5px;
    border-radius: 100px;
    width: 227px;
  }
  .actionSpan {
    z-index: 5;
    display: block;
  }
  .actionIcon {
    fill: #FFFFFF;
    width: 16px;
    height: 16.8px;
    position: relative;
    top: 2px;
    left: 4px;
  }
`;

export default FeatureSectionWrapper;
