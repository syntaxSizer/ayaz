import styled from 'styled-components';

const Container = styled.section`
  width: 100%;
  margin: auto;
  .sectionHeader {
    height: 177px;
    opacity: 1;
    border-bottom: 1px solid rgba(217, 219, 224, 0.5);
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
    @media screen and (max-width: 667px) {
      bottom: unset;
    }
  }
  .title {
    font-size: 32px;
    letter-spacing: -2.4px;
    font-weight: 500;
    line-height: normal;
    color: rgb(45, 49, 56);
    margin: 0px;
  }
  .tabWrapper {
    margin: auto;
    display: flex;
    margin-top: 30px;
    max-width: 1300px;
    justify-content: space-between;
    @media screen and (max-width: 1350px) {
      padding: 0 40px;
    }
    @media screen and (max-width: 800px) {
      padding: 0 15px;
    }
    @media screen and (max-width: 1000px) {
      flex-direction: column;
    }
    @media screen and (max-width: 667px) {
      margin-top: 0px;
    }
  }
  .walletD {
    letter-spacing: -1.7px;
    margin: 0px;
    color: rgb(32, 33, 37);
    line-height: 1.4;
  }
  .description {
    color: rgb(143, 149, 163);
    font-size: 16px;
  }
  .formSection {
    padding: 20px 0;
    .btnw {
      bottom: 30px;
      right: 30px;
      margin: 20px 0;
      float: right;
      cursor: pointer;
      transition: all 0.3s ease;
      padding: 0;
      appearance: none;
      border: none;
      outline: none;
      font-size: 12px;
      letter-spacing: 0.72px;
      font-weight: 600;
      text-transform: uppercase;
      line-height: normal;
      cursor: pointer;
      text-align: center;
      height: 56px;
      transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
      border-radius: 28px;
      background-color: #002524;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 165px;
      height: 48px;
      transition: all 0.3s ease;
      &:hover {
        transform: scale(1.1);
      }
    }
    .inputFiled {
      background-color: transparent;
      cursor: pointer;
      letter-spacing: -0.28px;
      font-weight: 300;
      line-height: normal;
      width: 100%;
      color: rgb(45, 49, 56);
      margin: 0px;
      border-radius: 4px;
      border: 1px solid #ebebeb;
      font-size: 14px;
      padding: 12px;
      appearance: none;
      transition: all 0.3s ease;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  .recordsSection {
    display: flex;
    flex-direction: column;
    width: 65%;
    @media only screen and (max-width: 1000px) {
      width: 100%;
    }
    .topupHistory {
      transition: all 0.3s ease;
      max-height: calc(100vh - 452px);
      overflow-y: auto;
      overflow-x: hidden;
      padding: 12px 0px;
      @media only screen and (max-width: 768px) {
        max-height: calc(100vh - 617px);
      }
      @media only screen and (max-width: 667px) {
        max-height: 100vh;
      }
    }
    .transactionItem {
      display: flex;
      flex-direction: column;
      padding: 12px;
      margin: 12px 0;
      border-radius: 4px;
      border: 1px solid #ebebeb;
      transition: all 0.3s ease;
      .date {
        font-size: 12px;
        color: grey;
        margin: 4px 0;
      }
      .paymentMethod {
        display: flex;
        justify-content: space-between;
        .method {
          font-size: 12px;
          text-transform: uppercase;
          color: grey;
          margin: 4px 0;
        }
      }
    }
    .infox {
      position: relative;
      border-top: 0px;
      margin-bottom: 32px;
      transition: all 0.3s ease;
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
        display: none;
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
  }
`;

export default Container;
