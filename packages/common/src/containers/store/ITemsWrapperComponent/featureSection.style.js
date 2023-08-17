import styled from 'styled-components';

const FeatureSectionWrapper = styled.section`
  max-width: 1300px;
  margin: auto;
  padding: ${({ pt }) => pt || '30px 10px 100px'};
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  width: 100%;
  font-family: Ayazona, 'Helvetica Neue', Helvetica;
  margin-bottom: 24px;
  @media screen and (max-width: 1350px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 800px) {
    padding: 0 15px;
  }
  .conditionalHeader {
    padding-bottom: 20px;
    border-bottom: 1px solid #f0f0f0;
    width: 100%;
    margin: 12px 18px 20px;
    margin-bottom: 0;
  }
  @media screen and (max-width: 990px) {
    padding-top: 0;
  }
  .cardWrapper {
    background: #fff;
    margin-top: 55px;
    border-radius: 0;
    margin-left: 24px;
    width: calc(16.6% - 20px);
    flex: 0 1 calc(16.6% - 20px);
    cursor: pointer;
    transition: all 0.25s;
    position: relative;

    :nth-of-type(6n + 1) {
      margin-left: 0 !important;
    }
    a {
      color: #202125;
      display: unset;
    }
    .text {
      font-size: 15px;
      letter-spacing: 0px;
      font-family: BigHearted;
      line-height: 22px;
      color: rgb(52, 53, 56);
      margin-top: 8px;
      margin-bottom: 0;
    }
    .header {
      font-size: 15px;
      letter-spacing: -0.48px;
      line-height: 22px;
      color: rgb(52, 53, 56);
      margin-bottom: 0;
    }
    .info {
      font-size: 12px;
      letter-spacing: -0.48px;
      line-height: 18px;
      color: rgb(114, 118, 126);
      margin-bottom: 0;
    }
    .css-bjcmdk {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      transition: padding 0.2s ease-out 0s;
      padding: 0px 4px;
    }
    .css-1euo17n {
      font-size: 15px;
      line-height: 22px;
      font-weight: 600;
      color: rgb(52, 53, 56);
      transition: all 0.2s ease-out 0s;
      overflow: hidden;
      white-space: nowrap;
      padding-left: 4px;
    }
    .but {
      touch-action: manipulation;
      cursor: pointer;
      border: none;
      box-shadow: rgb(0 0 0 / 16%) 0px 2px 8px;
      border-radius: 20px;
      font-weight: 600;
      white-space: nowrap;
      user-select: none;
      -webkit-font-smoothing: antialiased;
      background-image: none;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
      font-size: 12px;
      height: 36px;
      background-color: white;
      color: #002524;
      min-width: 36px;
      position: absolute;
      top: 8px;
      right: 0px;
      :focus {
        outline: none;
      }
      :hover {
        background-color: rgb(246, 247, 248);
      }
    }

    .select {
      position: absolute;
      inset: -4px;
    }

    @media screen and (max-width: 1280px) and (min-width: 1200px) {
      width: calc(20% - 20.5px);
      flex: 0 1 calc(20% - 20.5px);
      margin-left: 24px !important;
      :nth-of-type(5n + 1) {
        margin-left: 0 !important;
      }
    }

    @media screen and (max-width: 1200px) and (min-width: 830px) {
      width: calc(25% - 25.5px);
      flex: 0 1 calc(25% - 25.5px);
      margin-left: 30px !important;
      :nth-of-type(4n + 1) {
        margin-left: 0 !important;
      }
    }

    @media screen and (max-width: 830px) and (min-width: 667px) {
      width: calc(33.3% - 12.5px);
      flex: 0 1 calc(33.3% - 12.5px);
      margin-left: 15px !important;
      :nth-of-type(3n + 1) {
        margin-left: 0 !important;
      }
    }

    @media screen and (max-width: 667px) {
      width: calc(50% - 8.5px);
      flex: 0 1 calc(50% - 8.5px);
      margin-left: 17px !important;
      :nth-of-type(2n + 1) {
        margin-left: 0 !important;
      }
      margin-top: 25px;
    }
  }
`;

export default FeatureSectionWrapper;
