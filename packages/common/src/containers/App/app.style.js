import styled, { createGlobalStyle } from 'styled-components';
import { themeGet } from 'styled-system';

import Substract from '../../assets/image/app/substract.png';
import SubstractHover from '../../assets/image/app/substract-hover.png';
import BannerPattern from '../../assets/image/app/pattern.png';
import HeroPattern from '../../assets/image/app/tour-m-group-7.svg';
import FooterPattern from '../../assets/image/app/action-bg-desktop.svg';
import RemotePattern from '../../assets/image/app/bottom-left-section-bg-desktop.svg';
import map from '../../assets/image/app/map2.png';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Ayazona,'Helvetica Neue', Helvetica;
    width: 100%;
    margin: auto!important;
    letter-spacing: 0.14px;
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: BigHearted;
    letter-spacing: 0px !important;
  }

  .pac-container {
    box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
    border: none;
    margin-top: 15px;
  }
  .pac-item {
    padding: 16px;
    background-color: #fff;
    font-family: Ayazona, "Helvetica Neue", Helvetica;
    font-size: 14px;
    line-height: 34px;
    border: none;
    border-bottom: 1px solid rgba(217, 219, 224, 0.5);
  }
  .pac-item:hover {
    background-color: #f6f6f6;
  }
  .pac-item-query {
    font-size: 14px;
    line-height: 34px;
    color: #202125;
    font-family: Ayazona, "Helvetica Neue", Helvetica;
  }
  .pac-matched {
    color: #202125;
    font-family: Ayazona, "Helvetica Neue", Helvetica;
  }
  .pac-icon {
    height: 24px;
    width: 24px;
    margin-right: 7px;
    display: inline-block;
    margin-top: 5px;
    background-image: url(${map});
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
  }
  .sticky-inner-wrap {
    .sticky-inner-wrapper {
      transform: none !important;
      position: fixed !important;
      width: 100%;
    }
  }
  .sticky-outer-wrapper {
   height: 72px;
  }

  #nprogress {
    pointer-events: none;
  }

  #nprogress .bar {
    background: #002524;

    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;

    width: 100%;
    height: 5px;
  }

  /* Fancy blur effect */
  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px #002524, 0 0 5px #002524;
    opacity: 1.0;

    -webkit-transform: rotate(3deg) translate(0px, -4px);
        -ms-transform: rotate(3deg) translate(0px, -4px);
            transform: rotate(3deg) translate(0px, -4px);
  }

  .nprogress-custom-parent {
    overflow: hidden;
    position: relative;
  }

  .nprogress-custom-parent #nprogress .spinner,
  .nprogress-custom-parent #nprogress .bar {
    position: absolute;
  }

  @-webkit-keyframes nprogress-spinner {
    0%   { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  @keyframes nprogress-spinner {
    0%   { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .cta-home {
    text-align: left;
  }
  .hero-img {
    background: url(${HeroPattern});
  }
  .remote {
    background: url(${RemotePattern});
  }
  .cta {
    text-align: center;
  }


  .row2 {
    float: right;
    margin-bottom: -100px;
    margin-top: -70px;
    @media only screen and (max-width: 768px) {
      margin-bottom: 0px;
      margin-top: 0px;
    }
  }
  .image2 {
    transform: translateX(-50%);
  }
  .btn_mob {
    font-weight: 700;
    width: max-content;
  }

  .actionable {
    display: block;
    height: auto;
    box-sizing: border-box;
    background: url(${FooterPattern}) 50% no-repeat;
    margin: auto;
    transform: translateX(-50%);
    margin-left: 55%;
    margin-top: 70px;
    width: 100vw;
    max-width: 1600px;
  }

  .user {
    background: #fff;
    z-index: 99;
    margin-right: 6px;
    postion: relative;
    padding-left: 0.015rem;
    padding-top: 0.015rem;
    padding-right: 3.125rem;
    justify-content: space-between;
    height: 14rem;
    -webkit-transition:all .3s ease;
    -o-transition:all .3s ease;
    transition:all .3s ease;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    overflow: visible;
    &:nth-child(2) {
      background: #fff;
    }
    &:hover {
      background: #ffd700;
      -webkit-transform:scale(1.15);
      -ms-transform:scale(1.15);
      transform:scale(1.15);
      -webkit-transition:all .3s ease;
      -o-transition:all .3s ease;
      transition:all .3s ease;
      z-index: 100;
      cursor:pointer
    }
    @media only screen and (max-width: 800px) {
      height: 8rem;
      &:nth-child(2) {
        background: rgb(255, 215, 0);
      }
    }
  }

  .cta-btn {
    padding: 0 32px !important;
    line-height: 48px;
  }

  @media only screen and (max-width: 768px) {
    .sub-title {
      font-size: 2.0625rem;
    }
    .kids-mob {
      display: none;
    }
  }

  section{

    transform: translate(0,0);
    transition: transform 1.2s ease,opacity 1s ease,-webkit-transform 1.2s ease;
    max-width: ${({ maxWidth }) => maxWidth || '100vw'}
    margin: auto;
  }

    .drawer {
      .drawer-content-wrapper {
        .reusecore-drawer__close {
          position: absolute;
          top: 20px;
          right: 30px;
          > button {
            box-shadow: 0px 8px 38px 0px rgba(16, 172, 132, 0.5);
            transition: all 0.3s ease;
            svg {
              width: 22px;
              height: 22px;
            }
            &:hover {
              opacity: 0.9;
            }
          }
        }
        .scrollspy__menu {
          padding: 60px 71px;

          li {
            margin: 35px 0;
            a {
              display: block;
              color: #20201d;
              font-size: 24px;
              font-weight: 400;
              transition: all 0.3s ease;
              @media only screen and (max-width: 480px) {
                font-size: 21px;
              }
              &:hover {
                color: #002524;
              }
            }
            &.is-current {
              a {
                color: #002524;
                position: relative;
                &:before {
                  content: '';
                  display: block;
                  width: 8px;
                  height: 8px;
                  border-radius: 50%;
                  background-color: #002524;
                  position: absolute;
                  top: calc(50% - 8px / 2);
                  left: -20px;
                }
              }
            }
          }
        }
      }
    }

    /* Modal default style */
    .reuseModalOverlay {
    }

    button.modalCloseBtn {
      position: fixed !important;
      z-index: 999991 !important;
      background-color: transparent !important;
      color: ${themeGet('colors.black', '#000')} !important;
      top: 10px !important;
      right: 10px !important;

      @media(max-width: 460px){
        top: 0 !important;
        right: 0 !important;
      }

      span.btn-icon {
        font-size: 24px !important;
        transform: rotate(45deg) !important;
      }

      &.alt {
        background-color: ${themeGet('colors.primary', '#002524')} !important;
        border-radius: 50% !important;
        z-index: 999999 !important;
        padding: 0 !important;
        box-shadow: 0 8px 38px rgba(26, 115, 232, 0.5) !important;
        transition: all 0.3s ease !important;
        top: 25px !important;
        right: 30px !important;
        span.btn-icon {
          font-size: 20px !important;
        }
        &:hover {
          opacity: 0.88 !important;
        }
      }
    }

    .reuseModalHolder {
      border: 0 !important;
      background-color: transparent !important;
    @media screen and (max-width: 800px) {
      max-height: 100% !important;
      max-width: 100% !important;
      top: 0 !important;
      left: 0 !important;
    }

      &.search-modal,
      &.video-modal {
        background-color: rgba(255, 255, 255, 0.96) !important;
        overflow-y: auto !important;

        .innerRndComponent {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;

          iframe {
            max-width: 700px !important;
            max-height: 380px !important;
            width: 100% !important;
            height: 100% !important;
            border-radius: 5px !important;
          }
        }
      }

      &.demo_switcher_modal {
        border: 0 !important;
        background-color: rgba(16, 30, 77, 0.8) !important;
        .innerRndComponent {
          border-radius: 8px !important;
        }
      }

      &.video-modal {
        background-color: transparent !important;
      }

      .innerRndComponent {
        padding-right: 0 !important;
      }
    }

    .reuseModalCloseBtn {
      cursor: pointer !important;
    }
    @media screen and (max-width: 800px) {
      .title {
        padding-top: 32px;
      }
      .btn_mob {
        display: none;
      }
    }
    @media screen and (max-width: 768px) {
      .title {
        font-size: 38px;
      }
    }
`;

const ContainerWithMerchantImage = styled.div`
  background-color: rgb(247, 247, 248);
  position: relative;
  height: 260px;
  width: 100%;
  text-align: center;
  ${({ opn }) =>
    opn == 0 &&
    `
    &::before {
      content: "";
      position: absolute;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      width: 100%;
      height: 100%;
      z-index: 9;
      background-color: rgba(0, 0, 0, 0.6);
    }
  `}
  @media screen and (max-width: 767px) {
    height: 130px;
  }
  .images {
    object-fit: cover;
  }
`;

const MerchantStatus = styled.p`
  position: absolute;
  align-items: center;
  color: #fff;
  font-weight: 600;
  z-index: 10;
  top: 50%;
  left: 0;
  right: 0;
  margin-top: -9px;
  font-size: 28px;
  letter-spacing: -0.9px;
  @media screen and (max-width: 667px) {
    font-size: 18px;
  }
`;

const PageWrapper = styled.section`
  margin-top: 308px;
  position: relative;
  background-color: rgb(255, 255, 255);
  z-index: 200;
`;

const SubPageWrapper = styled.section`
  margin-top: 177px;
  position: relative;
  background-color: rgb(255, 255, 255);
  z-index: 200;
  border-top: 1px solid rgba(217, 219, 224, 0.5);
  background-color: #fff;
`;

const MerchantPageWrapper = styled.section`
  margin-top: 260px;
  top: 0px;
  background-color: rgb(255, 255, 255);
  z-index: 200;
  position: relative;
  border-top: 1px solid rgba(217, 219, 224, 0.5);
  background-color: #fff;
  @media screen and (max-width: 767px) {
    margin-top: 130px;
  }
`;

const AppWrapper = styled.div`
  position: relative;
  background: ${({ bk }) => bk || '#fff'};
  @media screen and (max-width: 1099px) {
    overflow: hidden;
  }
  .mapNavBar {
    @media screen and (max-width: 800px) {
      display: none !important;
    }
  }

  .reusecore__navbar {
    width: 100%;
    left: 0;
    top: 0;
    transition: all 0.3s ease;

    .reusecore__button {
      .btn-icon {
        color: #202125;
        font-size: 18px;
        @media only screen and (max-width: 1100px) {
          color: #202125;
        }
        @media only screen and (max-width: 420px) {
          font-size: 14px;
        }
      }
    }
    .button__wrapper {
      @media only screen and (max-width: 480px) {
        text-align: center;
      }
    }
    .hamburgMenu__bar {
      margin-left: 8px;
      @media only screen and (max-width: 420px) {
        width: 40px;
      }
      > span {
        background-color: #000;
        @media only screen and (max-width: 990px) {
          background-color: ${themeGet('colors.primary', '#002524')};
        }
      }
    }
  }
  .sticky-nav-active {
    .reusecore__navbar {
      background-color: #fff;
      .reusecore__button {
        .btn-icon {
          color: #202125;
        }
      }
      .hamburgMenu__bar > span {
        color: #202125;
      }
    }
  }

  .particle {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    @media screen and (max-width: 990px) {
      display: none;
    }
  }
  .reusecore__button {
    transition: all 0.3s ease;
    cursor: pointer;
    .btn-icon {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      color: rgb(26, 115, 232);
      width: 35px;
    }
    &.withoutBg {
      @media screen and (max-width: 460px) {
        margin-top: 20px;
        margin-left: 0;
        border: 1px solid #002524;
        min-width: auto;
      }
    }
  }
  .control-sec-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;

    @media screen and (max-width: 767px) {
      position: relative;
      top: 0%;
      left: 0%;
      transform: none;
      display: none;
    }
    .particle {
      position: absolute;
      width: 50%;
      height: 100%;
      top: 0;
      left: 0;
      overflow: hidden;
    }
    &.payment {
      .particle {
        z-index: -1;
      }
    }
  }

  .testimonialSlider {
    .image-gallery-content {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      @media screen and (max-width: 767px) {
        flex-direction: column;
      }
      .image-gallery-slide-wrapper {
        max-width: 60%;
        width: 60%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column-reverse;
        @media screen and (max-width: 1100px) and (min-width: 992px) {
          max-width: 56%;
          width: 56%;
        }
        @media screen and (max-width: 991px) {
          max-width: 50%;
          width: 50%;
        }
        @media screen and (max-width: 767px) {
          max-width: 100%;
          width: 100%;
        }
        > span {
          display: flex;
          @media screen and (max-width: 480px) {
            justify-content: center;
          }
          .image-gallery-left-nav,
          .image-gallery-right-nav {
            position: relative;
            top: 0;
            transform: none;
            margin-top: 0;
          }
          .image-gallery-left-nav {
          }
          .image-gallery-right-nav {
            margin-left: 10px;
          }
        }
        .image-gallery-swipe {
          .image-gallery-slide {
            .image-gallery-description {
              background: transparent;
              bottom: 0px;
              color: #202125;
              position: relative;
              .testimonialDes {
                box-sizing: border-box;
                margin-top: -10px;
                max-width: 550px;
                font-size: 36px;
                line-height: 50px;
                color: #0f2137;
                font-weight: 300;
                -webkit-letter-spacing: -0.01em;
                -moz-letter-spacing: -0.01em;
                -ms-letter-spacing: -0.01em;
                letter-spacing: -0.01em;
                @media screen and (max-width: 991px) {
                  font-size: 30px;
                  line-height: 40px;
                  max-width: 100%;
                }
                @media screen and (max-width: 768px) {
                  font-size: 24px;
                  line-height: 36px;
                }
                @media screen and (max-width: 480px) {
                  font-size: 20px;
                  text-align: center;
                }
                &::before {
                  content: 'CUSTOMER OPINIONS';
                  box-sizing: border-box;
                  margin-bottom: 10px;
                  margin-top: 0px;
                  font-size: 14px;
                  color: #002524;
                  display: block;
                  font-weight: 700;
                  text-align: left;
                  -webkit-letter-spacing: 0.11em;
                  -moz-letter-spacing: 0.11em;
                  -ms-letter-spacing: 0.11em;
                  letter-spacing: 0.11em;
                  @media screen and (max-width: 480px) {
                    text-align: center;
                  }
                }
              }
              .testimonialDetails {
                @media screen and (max-width: 480px) {
                  text-align: center;
                }
                .testimonialName {
                  font-size: 18px;
                  line-height: 33px;
                  color: #343d48;
                  font-weight: 700;
                  margin-bottom: -3px;
                }
                .testimonialDesignation {
                  font-size: 16px;
                  line-height: 33px;
                  color: #343d48;
                  font-weight: 400;
                  opacity: 0.8;
                }
              }
            }
          }
        }
        .image-gallery-left-nav {
          padding: 0;
          font-size: 0;
          margin-top: -15px;
          width: 15px;
          height: 2px;
          transition: width 0.25s ease-in-out;
          background-image: url(${Substract});
          width: 20px;
          height: 30px;
          background-repeat-x: repeat;
          background-position: center;
          background-size: contain;
          &:hover {
            width: 35px;
            background-image: url(${SubstractHover});
            &::before {
              background-color: #002524;
            }
            &::after {
              background-color: #002524;
            }
          }

          &::before {
            top: 11px;
            content: '';
            width: 10px;
            height: 2px;
            background-color: #343d48;
            display: block;
            position: absolute;
            transform: rotate(-36deg);
            transition: inherit;
            left: 0;
          }
          &::after {
            content: '';
            width: 10px;
            height: 2px;
            background-color: #343d48;
            display: block;
            position: absolute;
            bottom: 11px;
            transform: rotate(36deg);
            transition: inherit;
            left: 0;
          }
        }
        .image-gallery-right-nav {
          padding: 0;
          font-size: 0;
          margin-top: -15px;
          width: 15px;
          height: 2px;
          transition: all 0.25s ease-in-out;
          background-image: url(${SubstractHover});
          width: 30px;
          height: 30px;
          background-repeat-x: repeat;
          background-position: center;
          background-size: contain;
          &:hover {
            &::before {
              background-color: #002524;
            }
            &::after {
              background-color: #002524;
            }
          }

          &::before {
            top: 11px;
            content: '';
            width: 10px;
            height: 2px;
            background-color: #002524;
            display: block;
            position: absolute;
            transform: rotate(36deg);
            transition: inherit;
            left: 20px;
          }
          &::after {
            content: '';
            width: 10px;
            height: 2px;
            background-color: #002524;
            display: block;
            position: absolute;
            bottom: 11px;
            transform: rotate(-36deg);
            transition: inherit;
            left: 20px;
          }
        }
      }
      .image-gallery-thumbnails-wrapper {
        max-width: 40%;
        height: 520px;
        width: 40%;

        @media screen and (max-width: 1100px) and (min-width: 992px) {
          padding-left: 25px;
          overflow: hidden;
        }
        @media screen and (max-width: 991px) {
          padding-left: 0px;
          overflow: hidden;
          max-width: 50%;
          width: 50%;
        }
        @media screen and (max-width: 767px) {
          max-width: 100%;
          width: 100%;
          height: auto;
          margin-top: 50px;
          overflow: hidden;
        }
        .image-gallery-thumbnails {
          overflow: initial;
          padding-left: 30px;
          @media screen and (max-width: 991px) {
            padding-left: 0px;
          }
          @media screen and (max-width: 767px) {
            overflow: hidden;
          }
        }
        .image-gallery-thumbnails-container {
          position: relative;
          height: 520px;
          @media screen and (max-width: 1100px) and (min-width: 992px) {
            margin-left: -20px;
            margin-top: 15px;
          }
          @media screen and (max-width: 991px) {
            margin-left: -25px;
          }
          @media screen and (max-width: 767px) {
            height: auto;
            margin-left: 0px;
          }
          img {
            border-radius: 50%;
            height: 100%;
            width: 100%;

            @media screen and (max-width: 768px) {
              box-shadow: none;
            }
            @media screen and (max-width: 991px) {
              width: 70px;
              height: 70px;
            }
            @media screen and (max-width: 480px) {
              width: 70px;
              height: 70px;
            }
          }

          .image-gallery-thumbnail:nth-child(1) {
            position: absolute;
            top: 150px;
            left: 0;
            width: 120px;
            height: 120px;
            @media screen and (max-width: 991px) {
              position: absolute;
              top: 220px;
              left: 80px;
              width: 120px;
              height: 120px;
              img {
                width: 80px;
                height: 80px;
              }
            }
            @media screen and (max-width: 767px) {
              position: relative;
              top: 0;
              left: 0;
              width: calc(33.33% - 30px);
              height: auto;
              margin-right: 30px;
              margin-left: 10px;
            }
            img {
            }
          }
          .image-gallery-thumbnail:nth-child(2) {
            position: absolute;
            top: 0;
            left: 180px;
            width: 100px;
            height: 100px;
            @media screen and (max-width: 991px) {
              position: absolute;
              top: 110px;
              left: 160px;
              width: 100px;
              height: 100px;
            }
            @media screen and (max-width: 767px) {
              position: relative;
              top: 0;
              width: calc(33.33% - 30px);
              height: auto;
              margin-right: 30px;
              left: 0;
            }
          }
          .image-gallery-thumbnail:nth-child(3) {
            position: absolute;
            top: 160px;
            left: 250px;
            width: 70px;
            height: 70px;
            @media screen and (max-width: 1100px) and (min-width: 992px) {
              position: absolute;
              top: 180px;
              left: 220px;
              width: 70px;
              height: 70px;
            }
            @media screen and (max-width: 991px) {
              position: absolute;
              top: 200px;
              left: 272px;
              width: 70px;
              height: 70px;
            }
            @media screen and (max-width: 767px) {
              position: relative;
              top: 0;
              width: calc(33.33% - 30px);
              height: auto;
              margin-right: 30px;
              left: 0;
            }
          }
          .image-gallery-thumbnail:nth-child(4) {
            position: absolute;
            bottom: 100px;
            left: 200px;
            width: 90px;
            height: 90px;
            @media screen and (max-width: 991px) {
              position: absolute;
              bottom: 100px;
              left: 240px;
              width: 90px;
              height: 90px;
            }
            @media screen and (max-width: 767px) {
              position: relative;
              top: 0;
              width: calc(33.33% - 30px);
              height: auto;
              margin-right: 30px;
              left: 0;
            }
          }
          .image-gallery-thumbnail:nth-child(5) {
            position: absolute;
            bottom: 20px;
            left: 20px;
            width: 105px;
            height: 105px;
            @media screen and (max-width: 1100px) and (min-width: 992px) {
              position: absolute;
              bottom: 50px;
              left: 20px;
              width: 105px;
              height: 105px;
            }
            @media screen and (max-width: 991px) {
              position: absolute;
              bottom: 40px;
              left: 115px;
              width: 105px;
              height: 105px;
            }
            @media screen and (max-width: 767px) {
              position: relative;
              top: 0;
              width: calc(33.33% - 30px);
              height: auto;
              margin-right: 30px;
              left: 0;
            }
          }
          .image-gallery-thumbnail {
            transition: all 0.35s ease;
            border: 0;
            border-radius: 50%;
            .image-gallery-thumbnail-inner {
              width: 100%;
              height: 100%;
            }
            &.active {
              border: 0;
              transform: scale(1.3);
              box-shadow: 0px 18px 68px 0px rgba(22, 30, 54, 0.25);
              @media screen and (max-width: 1100px) {
                box-shadow: none;
              }
              .image-gallery-thumbnail-inner {
                @keyframes pulse {
                  0% {
                    transform: translateX(-50%) translateY(-50%) translateZ(0)
                      scale(1);
                    opacity: 1;
                  }

                  100% {
                    transform: translateX(-50%) translateY(-50%) translateZ(0)
                      scale(1.5);
                    opacity: 0;
                  }
                }
                @media screen and (max-width: 991px) {
                  @keyframes pulse {
                    0% {
                      transform: translateX(-50%) translateY(-50%) translateZ(0)
                        scale(1);
                      opacity: 0;
                    }

                    100% {
                      transform: translateX(-50%) translateY(-50%) translateZ(0)
                        scale(1.2);
                      opacity: 0;
                    }
                  }
                }
                &::before {
                  content: '';
                  position: absolute;
                  display: block;
                  width: 100%;
                  height: 100%;
                  box-shadow: 0 0 0 0.8px rgba(0, 0, 0, 0.1);
                  border-radius: 50%;
                  top: 50%;
                  left: 50%;
                  opacity: 0;
                  -webkit-transform: translate(-50%, -50%);
                  transform: translate(-50%, -50%);
                  animation: pulse 2.2s ease-out infinite;
                  backface-visibility: hidden;
                  pointer-events: none;
                }
                &::after {
                  content: '';
                  position: absolute;
                  display: block;
                  width: 100%;
                  height: 100%;
                  box-shadow: 0 0 0 0.8px rgba(0, 0, 0, 0.1);
                  border-radius: 50%;
                  top: 50%;
                  left: 50%;
                  opacity: 0;
                  -webkit-transform: translate(-50%, -50%);
                  transform: translate(-50%, -50%);
                  animation: pulse 2.2s ease-out infinite;
                  backface-visibility: hidden;
                  pointer-events: none;
                  animation-delay: 1s;
                }
              }
              img {
                position: relative;
                @media screen and (max-width: 768px) {
                  margin: 10px 0;
                }
              }
            }
          }
        }
      }
    }
  }
  .cardExtraImage {
    @media screen and (max-width: 1440px) and (min-width: 1100px) {
      margin-left: -270px;
      margin-top: 50px;
    }
  }
`;

const BannerSquareShape = styled.div`
  width: 1000px;
  height: 250px;
  background: #ffd700;
  border-radius: 0px;
  -webkit-transform: rotate(105deg);
  -ms-transform: rotate(105deg);
  transform: rotate(107deg);
  position: absolute;
  left: 58%;
  top: -28%;
  z-index: -1;
  pointer-events: none;
  background-image: url(${BannerPattern});
  @media screen and (max-width: 1300px) {
    width: 870px;
    height: 1000px;
    transform: rotate(103deg);
    position: absolute;
    left: 64%;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const BannerCircleShape = styled.div`
  width: 500px;
  height: 500px;
  background: #ffc845;
  border-radius: 50%;
  position: absolute;
  left: 55%;
  top: 47%;
  z-index: -1;
  transform: translateY(-50%);
  pointer-events: none;
  @media screen and (max-width: 1300px) {
    width: 400px;
    height: 400px;
    left: 63%;
  }
  @media screen and (max-width: 1100px) {
    width: 400px;
    height: 400px;
    left: 60%;
  }
  @media screen and (max-width: 991px) {
    width: 345px;
    height: 345px;
    left: 54%;
  }
`;
const PaymentCircleShape = styled.div`
  width: 700px;
  height: 700px;
  background: #ffc845;
  border-radius: 50%;
  position: absolute;
  left: 5%;
  top: 47%;
  z-index: -1;
  transform: translateY(-50%);
  pointer-events: none;
  @media screen and (max-width: 1440px) {
    width: 550px;
    height: 550px;
  }
  @media screen and (max-width: 1100px) {
    width: 450px;
    height: 450px;
  }
  @media screen and (max-width: 991px) {
    width: 350px;
    height: 350px;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
const ConditionWrapper = styled.div`
  position: relative;
`;

const HeroWrapper = styled.section`
  max-width: 1300px;
  width: 100%;
  margin: auto;
  @media screen and (max-width: 1350px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 800px) {
    padding: 0 15px;
  }
`;

const ContainerWithBackgroundImage = styled.div`
  width: 100%;
  height: ${props => props.height};
  background-image: url(${props => props.url});
  background-color: ${({ bg }) => bg || '#002524'};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 800px) {
    background-image: url(${props => props.urlmobile});
    background-color: ${({ bg }) => bg || '#002524'};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: ${props => props.mobileheight};
  }

  .delivery-sticky-nav-active {
    transform: none !important;
    position: fixed !important;
    .sticky-inner-wrapper {
      background: #002524;
      width: 100%;
    }
  }
`;
export {
  GlobalStyle,
  AppWrapper,
  BannerSquareShape,
  BannerCircleShape,
  PaymentCircleShape,
  ConditionWrapper,
  ContainerWithMerchantImage,
  ContainerWithBackgroundImage,
  HeroWrapper,
  PageWrapper,
  SubPageWrapper,
  MerchantPageWrapper,
  MerchantStatus,
};
