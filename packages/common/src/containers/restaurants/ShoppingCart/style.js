import styled from 'styled-components';

const Container = styled.div`
  font-family: Ayazona, 'Helvetica Neue', Helvetica;
  .cartDrawerWrapper {
    padding: 20px;
    background: rgb(246, 246, 248);
  }
  .error-wrapper {
    color: red;
    font-weight: 500;
    font-size: 12px;
    height: 12px;
  }
  .header {
    padding: 12px;
  }

  .dFlex {
    padding-left: 16px;
    padding-right: 16px;
  }

  .dropDownWrapper {
    overflow: auto;
    max-height: 150px;
  }

  .cartContent {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 150px;
    padding: 30px 40px;
    transition: all 0.25s;
    box-shadow: none;
    height: 100vh;
    background: rgb(246, 246, 248);
    @media screen and (max-width: 667px) {
      padding: 30px 15px;
    }
  }
  .actionButton {
    justify-content: space-between;
    display: flex;
    position: absolute;
    bottom: 8px;
    left: 0px;
    align-items: center;
    width: 100%;
    padding: 20px;
    z-index: 9999;
    @media screen and (max-width: 441px) {
      position: fixed;
    }

    .checkoutBtn {
      padding: 0px;
      margin: 0px;
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
      transition: background-color 0.2s ease-in-out 0s,
        color 0.2s ease-in-out 0s;
      background-color: #002524;
      color: rgb(255, 255, 255);
      margin-bottom: 10px;
      width: 100%;
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
      border-radius: 28px;
      z-index: 400;
    }
  }
  .lott {
    width: 440px;
    height: 300px;
    @media screen and (max-width: 667px) {
      width: 380px;
    }
  }

  .cartWrapper {
    overflow-x: hidden; /* Disable horizontal scroll */
    z-index: 9999;
    position: relative;
    display: flex;
    flex-direction: column;
    transition: 0.3s;
    background: rgb(246, 246, 248);
    height: calc(100vh - 100px);
    border-bottom: 1px solid rgba(217, 219, 224, 0.5);

    .header {
      padding: 4px;
      margin-bottom: 20px;
    }

    .modalCloseBtn {
      color: #000 !important;
      border: none;
      cursor: pointer;
    }
    .actionSectionWrapper {
      display: inline-block;
      justify-content: space-between;
      padding: 20px 0;
      .headerSection {
        display: flex;
        flex-direction: row;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        justify-content: space-between;
        padding: 21px 0px;
        .sectionName {
          color: rgb(151, 156, 166);
          font-size: 14px;
          line-height: 13px;
        }
      }
      .cardWrapper {
        padding: 20px;
        background: white;
        width: 100%;
        .actionBtnWrapper {
          display: flex;
          justify-content: space-between;
          .dropDownWrapper {
            span {
              font-size: 13px;
              font-weight: 600;
              color: #8f95a3;
            }
          }
        }
      }
    }
    .basketHeader {
      .merchantName {
        color: rgb(143, 149, 163);
        font-size: 15px;
        line-height: 24px;
        margin: 0px;
        text-align: center;
        font-weight: 500;
        letter-spacing: 0.14px;
        padding-bottom: 21px;
      }
    }
    .contentWrapper {
      display: flex;
      flex-direction: column;
      padding: 28px;
      background: white;
      flex-direction: column;
      margin-bottom: 16px;
      @media screen and (max-width: 350px) {
        padding: 12px;
      }
      .flexRow {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
      }
      .flexCol {
        display: flex;
        flex-direction: column;
        align-items: space-between;
      }
      .itemHeader {
        position: relative;
        // padding-left: 40px;
        cursor: pointer;

        .itemMenuInfo {
          flex: 1 1 0%;
          padding: 0px 10px;
        }

        .itemSection {
          display: flex;
          flex: 1 1 0%;
          cursor: pointer;
        }

        .itemCount {
          display: flex;
          width: 24px;
          height: 24px;
          -webkit-box-align: center;
          align-items: center;
          -webkit-box-pack: center;
          justify-content: center;
          // position: absolute;
          color: rgb(47, 49, 55);
          font-size: 14px;
          background-color: rgb(246, 246, 248);
          font-feature-settings: 'tnum', 'onum';
          font-weight: 600;
          left: 0px;
          transation: 0.2s;
          &:hover:not(.disabledBtn) {
            background: rgb(230, 230, 230, 1);
          }
        }
        .disabledBtn {
          color: #d6cbcb;
        }

        .itemInfo {
          flex: 1 1 0%;
          padding: 0px 20px;
        }
        .itemName {
          color: rgb(0, 0, 0);
          margin: 0px 0px 2px;
          line-height: 20px;
          letter-spacing: -0.08px;
          font-size: 14px;
          font-weight: 500;
          padding: 2px 0px;
          @media screen and (max-width: 350px) {
            font-size: 12px;
          }
        }
        .itemOptions {
          display: -webkit-box;
          overflow: hidden;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          font-size: 13px;
          letter-spacing: 0.14px;
          font-weight: 300;
          line-height: normal;
          color: rgb(143, 149, 163);
          margin: 4px 0px 6px;
          @media screen and (max-width: 350px) {
            font-size: 11px;
          }
        }
        .itemPrice {
          color: rgb(143, 149, 163);
          line-height: 13px;
          font-size: 13px;
          font-weight: 500;
          text-align: right;
          @media screen and (max-width: 350px) {
            font-size: 12px;
          }
        }

        .header {
          font-size: 16px;
          font-weight: 600;
          font-family: Ayazona, 'Helvetica Neue', Helvetica;
        }
        .removeBtn {
          margin-left: 15px;
          cursor: pointer;
          margin-top: 1px;
          width: 10px;
        }
      }
      .itemWrapper {
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        margin: 8px 0px;
        letter-spacing: 0.14px;
        font-weight: 500;
        line-height: normal;
        color: rgb(143, 149, 163);
        font-family: Ayazona, 'Helvetica Neue', Helvetica;
        font-size: 13px;
      }
    }
    .paymentOptionsHeader {
      color: #8f95a3;
      font-size: 13px;
      @media screen and (max-width: 350px) {
        font-size: 12px;
      }
    }
    .cardWrapper {
      padding: 20px;
      background: rgb(246, 246, 248);
      border-radius: 12px .actionBtnWrapper {
        display: flex;
        justify-content: space-between;
      }
    }
    .formCard {
      label {
        font-size: 14px !important;
      }
      .field-wrapper {
        margin: 0 0 15px 0;
      }
      .hFyCHj textarea,
      .hFyCHj input {
        font-size: 14px;
        padding: 11px;
        display: block;
        width: 100%;
        color: #484848;
        box-shadow: none;
        border-radius: 0px;
        box-sizing: border-box;
        border: 1px solid rgba(217, 219, 224, 0.5);
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        font-family: Ayazona, 'Helvetica Neue', Helvetica;
      }
      .hFyCHj.icon-right .field-wrapper > .input-icon {
        right: 16px;
      }
      .highlight {
        background-color: #002524 !important;
      }
    }
    .addressDropDownTitle {
      font-size: 14px;
      p {
        margin: 0;
      }
      display: flex;
      justify-content: space-between;
      .link {
        cursor: pointer;
        transition: 0.3s;
        cursor: pointer;
        padding: 3px 18px;
        border-radius: 30px;
        background: #002524;
        @media screen and (max-width: 350px) {
          padding: 2px 10px;
        }
      }
      @media screen and (max-width: 350px) {
        font-size: 12px;
      }
    }
    .promoCode {
      border-bottom: 1px solid rgb(217, 219, 223);
      padding: 4px 0px;
      border-top: 1px solid rgb(217, 219, 223);
      .inner {
        display: flex;
        flex-direction: column;
        width: 100%;
        font-size: 13px;
      }
      .content {
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        height: 48px;
        padding-right: 12px;
        border: none;
        position: relative;
        padding-left: 18px;
        ::before {
          content: '';
          display: block;
          background-image: url(https://cdn.ayazona.com/web-assets/img/10216d4d2af5be3e8be274902ee2f2b9.svg);
          background-position: center center;
          background-repeat: no-repeat;
          width: 12px;
          height: 12px;
          position: absolute;
          left: 0px;
          top: 50%;
          transform: translateY(-50%);
        }
        .value {
          border-radius: 0px;
          appearance: none;
          width: 100%;
          caret-color: rgb(0, 0, 0);
          letter-spacing: 0.14px;
          font-weight: 500;
          line-height: normal;
          height: 100%;
          color: rgb(45, 49, 56);
          background-color: transparent;
          font-size: 13px;
          box-shadow: none !important;
          border: none;
        }
        .action {
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          line-height: normal;
          letter-spacing: 0.7px;
          height: 100%;
          cursor: pointer;
          border: 0px;
          padding: 0px;
          opacity: 0.3;
          margin-left: 16px;
        }
      }
    }
    .summaryWrapper {
      background: rgb(246, 246, 248);
      max-width: 100%;
      flex-direction: column;
      padding-top: 21px;
      padding-bottom: 24px;
      .itemWrapper {
        display: flex;
        justify-content: space-between;
        -webkit-box-pack: justify;
        justify-content: space-between;
        margin: 8px 0px;
        letter-spacing: 0.14px;
        font-weight: 500;
        line-height: normal;
        color: rgb(143, 149, 163);
        font-family: Ayazona, 'Helvetica Neue', Helvetica;
        font-size: 13px;
      }
      .information {
        line-height: 18px;
        font-family: Ayazona, 'Helvetica Neue', Helvetica;
        margin: 0;
      }
      .sumTotal {
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        margin-right: 0px;
        margin-left: 0px;
        letter-spacing: -0.48px;
        font-family: Ayazona, 'Helvetica Neue', Helvetica;
        font-weight: 600;
        line-height: normal;
        font-size: 14px;
        margin-bottom: 8px;
        margin-top: 8px !important;
        .total {
          line-height: 18px;
          display: flex;
          font-family: Ayazona, 'Helvetica Neue', Helvetica;
        }
        span {
          color: #002524;
        }
      }
    }
  }
`;

export default Container;
