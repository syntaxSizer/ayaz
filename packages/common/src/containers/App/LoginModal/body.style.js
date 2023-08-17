import styled from 'styled-components';
import { themeGet } from 'styled-system';

const AuthContent = styled.div`
  padding-top: 35px;
  padding-left: 45px;
  padding-right: 45px;
  padding-bottom: 0px;
`;

const LoginModalWrapper = styled.div`
  width: 100%;
  height: auto;
  border-radius: 0px;
  max-width: 435px;
  max-height: 740px;
  box-shadow: rgba(34, 34, 34, 0.15) 0px 2px 20px 0px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.3s;
  overflow: hidden;
  background-color: ${themeGet('colors.white', '#ffffff')};
  @media screen and (max-width: 768px) {
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    max-height: 100%;
    margin: -1px;
  }
  .terms {
    margin: 5px 0 10px;
    padding: 0;
    position: relative;
    margin-bottom: 30px;
    font-size: 12px;
    color: #8f95a3;
    text-align: center;
    a {
      color: #2d3138;
      text-decoration: none;
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
  }
  .errorText,
  .successText {
    width: 100%;
    padding: 0 auto;
    font-weight: 500;
    color: #ff1d15;
    font-size: 12px;
    text-align: center;
  }
  .loginForm {
    @media screen and (max-width: 768px) {
      margin-top: 20% !important;
    }
  }
  .successText {
    color: green;
  }

  .rememberMe {
    input[type='checkbox'].checkbox:checked + div {
      border-color: #002524;
      background-color: #002524;
    }
  }
  .rc-tabs-ink-bar {
    background-color: #002524 !important;
  }

  .rc-tabs-tab-active,
  .rc-tabs-tab:hover,
  .rc-tabs-tab-active:hover {
    color: #002524 !important;
  }

  .reusecore__button {
    background-color: transparent;
    &.default {
      background-color: #002524;
      border-radius: 30px;
      padding: 18px;
      transition: all 0.3s ease;
    }
  }

  .rc-tabs {
    border: 0;
    @media only screen and (max-width: 991px) {
      max-width: 100%;
    }
    .rc-tabs-bar {
      margin-left: 15px;
      display: none;
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
          text-align: center;
        }
      }
    }
    .google-login__btn {
      width: 100%;
      font-size: 15px;
      font-weight: 700;
      margin-bottom: 45px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
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
        input {
          text-align: center;
          font-family: Ayazona, 'Helvetica Neue', Helvetica;
        }
        &.is-focus {
          label {
            color: rgb(26, 115, 232);
            top: -12px;
          }
          .highlight {
            background-color: #002524;
            height: 1px;
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
    .regNameForm .reusecore__input {
      width: 50%;
    }
    .signUp input {
      text-align: left !important;
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

const ModalFooter = styled.div`
  width: 100%;
  border-top: 1px solid rgba(217, 219, 224, 0.5);
  text-align: center;
  padding-top: 24px;
  padding-bottom: 34px;
  margin-top: 20px;
`;

const ActionArea = styled.div`
  font-size: 14px;
  letter-spacing: initial;
  font-weight: 600;
  text-transform: uppercase;
  line-height: normal;
  color: #002524;
  margin-left: auto;
  cursor: pointer;
`;

const InfoArea = styled.div`
  font-size: 14px;
  letter-spacing: 0.14px;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 10px;
`;

export { LoginModalWrapper, ModalFooter, ActionArea, InfoArea, AuthContent };
