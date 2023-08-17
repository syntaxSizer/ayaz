import styled from 'styled-components';
import { themeGet } from 'styled-system';

const Container = styled.div`
  overflow: hidden;
  overflow: auto;
  background-color: ${themeGet('colors.white', '#ffffff')};
  box-shadow: rgba(34, 34, 34, 0.15) 0px 2px 20px 0px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  z-index: 1100;
  transition: transform 200ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
  max-height: 600px;
  max-width: 530px;
  @media screen and (max-width: 800px) {
    max-height: 100%;
    max-width: 100%;
  }

  .errorWrapper {
    color: red;
    font-size: 12px;
    height: 12px;
  }

  .menuInfo {
    margin-top: 40px;
    position: relative;
    box-shadow: none;
    padding: 0 20px;
    border-bottom: 1px solid rgba(217, 219, 224, 0.5);
    .header {
      color: #2d3138;
      margin-top: 0px;
      font-size: 24px;
      letter-spacing: -1.16px;
      font-weight: 600;
      line-height: normal;
      margin-bottom: 8px;
    }

    .description {
      font-size: 16px;
      letter-spacing: 0.14px;
      font-weight: 400;
      color: rgb(143, 149, 163);
      line-height: 1.33;
    }
  }

  .mainCard {
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 12px;
    min-height: 150px;
    padding: 20px;
    transition: all 0.25s;
    box-shadow: none;
    height: calc(100% - 150px);
    border-bottom: 1px solid rgba(217, 219, 224, 0.5);
    overflow: hidden;
    padding-top: 0;

    .price {
      font-size: 12px;
      letter-spacing: 0.19px;
      font-weight: 400;
      display: block;
      text-transform: uppercase;
      color: rgb(143, 149, 163);
      line-height: 1.33;
    }

    .header,
    .price {
      font-weight: 600;
    }
  }
  .menuCard {
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: auto;
    min-height: 150px;
    transition: all 0.25s;
    box-shadow: none;
    padding-bottom: 150px;
    @media screen and (max-width: 768px) {
      width: calc(100% - 10px);
    }
    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: darkgrey;
      outline: 1px solid slategrey;
      border-radius: 12px;
    }
    .optionWrapper {
      display: flex;
      justify-content: space-between;
      padding: 12px 0;
      appearance: none;
      .priceAdditionsWrapper {
        font-size: 12px;
        font-weight: 600;
      }
      * {
        margin-right: 5px;
        cursor: pointer;
      }
    }
    .headerWrapper {
      border-bottom: 1px solid rgba(217, 219, 224, 0.5);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 10px;
      padding-bottom: 10px;
      .menuSection {
        font-size: 12px;
        letter-spacing: 0.72px;
        font-weight: 600;
        text-transform: uppercase;
        line-height: normal;
        color: rgb(45, 49, 56);
      }
      .helperText {
        font-size: 12px;
        letter-spacing: 0.72px;
        text-transform: uppercase;
        line-height: normal;
        color: rgb(143, 149, 163);
        font-weight: 500;
      }
    }
    input[type='radio'] + div::after,
    input[type='checkbox'].checkbox:checked + div {
      background-color: #002524;
      border-color: #002524;
    }
  }
  .actionBtnsWrapper {
    display: flex;
    justify-content: space-between;
    display: flex;
    position: absolute;
    bottom: 0px;
    left: 0px;
    align-items: center;
    width: 100%;
    background-color: rgb(255, 255, 255);
    padding: 16px 20px;
    border-top: 1px solid rgba(217, 219, 224, 0.5);
    box-shadow: none;

    .btnsWrapper {
      display: flex;
      @media screen and (max-width: 800px) {
        width: 100%;
      }
      .actionButton {
        line-height: normal;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        background-color: rgb(255, 255, 255);
        width: 168px;
        max-width: 168px;
        height: 56px;
        color: rgb(45, 49, 56);
        border: 1px solid rgba(217, 219, 224, 0.5);
        border-radius: 100px;
        margin: 0px 12px 0px auto;
        .btn {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          cursor: pointer;
          height: 100%;
          width: calc(100% - 15px);
          user-select: none;
          color: rgb(45, 49, 56);
          font-size: 16px;
          letter-spacing: -0.28px;
          font-weight: 500;
          line-height: normal;
        }
        @media screen and (max-width: 800px) {
          margin: auto;
        }
        @media screen and (max-width: 350px) {
          width: 128px;
        }
      }
      .addToCartBtn {
        margin: 0px;
        appearance: none;
        border: none;
        outline: none;
        font-size: 12px;
        letter-spacing: 0.72px;
        text-transform: uppercase;
        line-height: normal;
        cursor: pointer;
        text-align: center;
        height: 56px;
        transition: background-color 0.2s ease-in-out 0s,
          color 0.2s ease-in-out 0s;
        background-color: #002524;
        color: rgb(255, 255, 255);
        padding: 0px 16px;
        border-radius: 28px;
        width: 100%;
        display: flex;
        -webkit-box-pack: end;
        justify-content: flex-end;
        font-weight: 600;
        -webkit-box-align: center;
        align-items: center;
        .cartQuantity {
          font-weight: 600;
          line-height: normal;
          text-align: right;
          flex: 1 1 0%;
          color: rgb(255, 255, 255);
          margin-left: 30px;
        }
        @media screen and (max-width: 350px) {
          font-size: 10px;
        }
      }
      @media screen and (max-width: 1150px) {
        .btn {
          padding: 10px;
        }
      }
    }
  }
  .col {
    position: relative;
    .patternImage {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    @media only screen and (max-width: 991px) {
      width: 100%;
      &.imageCol {
        display: none;
      }
    }
  }
  .reusecore__button {
    background-color: transparent;
    &.default {
      background-color: rgb(26, 115, 232);
      transition: all 0.3s ease;
    }
  }

  .rc-tabs {
    border: 0;
    max-width: 360px;
    margin: 30px 0 0;
    @media only screen and (max-width: 991px) {
      max-width: 100%;
    }
    .rc-tabs-bar {
      margin-left: 15px;
    }
    .rc-tabs-nav-container {
      padding: 0;
      .rc-tabs-tab-prev,
      .rc-tabs-tab-next {
        display: none;
      }
      .rc-tabs-nav-scroll,
      .rc-tabs-nav {
        width: 100%;
        .rc-tabs-tab {
          width: 50%;
          margin-right: 0;
          padding: 13px 0;
          text-align: center;
        }
      }
    }
    .rc-tabs-tabpane {
      padding-left: 15px;
      padding-bottom: 15px;
      padding-right: 15px;
      @media (min-width: 1200px) {
        min-height: 560px;
      }
    }
    .google-login__btn {
      width: 100%;
      font-size: 15px;
      font-weight: 700;
      margin-bottom: 45px;
      .btn-icon {
        position: relative;
        left: -22px;
        img {
          width: 21px;
          height: auto;
        }
      }
    }
    .reusecore__input {
      margin-bottom: 30px;
      &.is-material {
        &.is-focus {
          label {
            color: rgb(26, 115, 232);
            top: -12px;
          }
          .highlight {
            background-color: rgb(26, 115, 232);
          }
        }
      }

      label {
        font-weight: 400;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.6);
        top: 15px;
      }
    }
    .reusecore__checkbox {
      margin: 0 0 35px;
      label {
        .reusecore__field-label {
          font-size: 13px;
          font-weight: 400;
        }
      }
    }
  }
`;

export default Container;
