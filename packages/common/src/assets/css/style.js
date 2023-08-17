import { createGlobalStyle } from 'styled-components';
import './flaticon.css';
// import './fonts.css';

export const ResetCSS = createGlobalStyle`
  .location-modal {
    min-height: 500px;
  }
  .bigBtn {
    background-color: rgb(239, 239, 239);
    color: rgb(45, 49, 56);
    height: 56px;
    border-radius: 30px;
    border-width: 0;
    width: 100%;
    margin-bottom: 20px;
    margin-top: 20px;
    padding: 15px 40px;
    font-family: Ayazona,'Helvetica Neue', Helvetica;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 1.2px;
    cursor: pointer;
    text-align: center;
  }

  #global-loader {
    width: 25px;
    height: 25px;
    background-color: transparent;
    border-radius: 50%;
    border-top: 4px solid black;
    border-right: 4px solid #ccc;
    border-bottom: 4px solid #ccc;
    border-left: 4px solid #ccc;
    animation: rotate .8s linear infinite;
    top: 50%;
    left: 50%;
    bottom: 0;
    right: 0;
    position: relative;
    z-index: 999999;
    margin: 20px 0;
  }

  @keyframes rotate {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .pac-container {
    z-index: 999999;
  }

  .clearCartWrapper {
    .emptyCartWrapper {
      font-size: 14px;
      color: rgb(118, 118, 118);
      padding: 40px 12px 20px 12px;
    }
  }

  @media only screen and (max-width: 768px) {
    .addressNav .drawer-content-wrapper {
      width: 100% !important;
    }
  }

  @media only screen and (max-width: 441px) {
    .drawer-content-wrapper {
      width: 100% !important;
    }
    .mobileNav .drawer-content-wrapper {
      width: 250px !important;
    }
  }
  .Toastify__toast {
    border-radius: 4px;
    font-size: 14px;
    min-height: 45px;
    text-align: center;
    z-index: 9999999999;
    width: auto;
    font-family: Ayazona,'Helvetica Neue', Helvetica;
  }

  ::selection {
    background: #333333;
    color: #ffffff;
  }

  html {
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    scroll-padding-top: 102px;
    color: rgb(45, 49, 56);
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *:focus {
    outline: none;
  }

  html,
  html a,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  p,
  li,
  dl,
  th,
  dt,
  input,
  textarea,
  span,
  div {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    -webkit-tap-highlight-color: transparent;
    width: 100%!important;
    scroll-behavior: smooth;
    font-family: Ayazona,'Helvetica Neue', Helvetica;
    letter-spacing: 0.14px;
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  .reuseModalHolder {
    padding: 0 !important;
    &.demo_switcher_modal {
      border: 0 !important;
      background-color: rgba(16, 30, 77, 0.9) !important;
      .innerRndComponent {
        border-radius: 8px !important;
      }
    }
    @media screen and (max-width: 800px) {
      max-height: 100% !important;
      max-width: 100% !important;
      top: 0 !important;
      left: 0 !important;
    }
  }

  .reuseModalParentWrapper, .reuseModalOverlay {
    z-index: 10000;
    background-color: rgba(255, 255, 255, 0.43);
    transition: background-color 100ms ease-in-out 0s;
  }

  button.modalCloseBtn {
    position: fixed !important;
    z-index: 999991 !important;
    background-color: transparent !important;
    top: 10px !important;
    right: 10px !important;
    min-width: 34px !important;
    min-height: 34px !important;
    padding: 0 !important;
    span.btn-icon {
      font-size: 22px !important;
      transform: rotate(45deg) !important;
    }

    &.alt {
      border-radius: 50% !important;
      z-index: 999999 !important;
      padding: 0 !important;
      transition: all 0.3s ease !important;
      top: 25px !important;
      right: 30px !important;
      min-width: 40px !important;
      min-height: 40px !important;

      span.btn-icon {
        font-size: 20px !important;
      }

      &:hover {
        opacity: 0.88 !important;
      }
    }
  }
`;
