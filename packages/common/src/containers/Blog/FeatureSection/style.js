import styled from 'styled-components';

const FeatureSectionWrapper = styled.section`
  max-width: 1300px;
  background: #fff;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  row-gap: 72px;
  margin: 117px auto 96px auto;
  column-gap: 32px;
  display: grid;
  @media screen and (max-width: 1350px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 800px) {
    padding: 0 15px;
  }
  .images {
    object-fit: contain;
    border-radius: 12px;
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 32px;
    margin: 38px auto 88px auto;
    max-width: 624px;
  }
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 64px;
    margin: 36px auto 72px auto;
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
  }
  .cardWrapper {
    :first-of-type {
      display: none;
    }
    .imageBox {
      position: relative;
      height: 205px;
      width: 100%;
      @media screen and (max-width: 768px) {
        height: 350px;
      }
      @media screen and (max-width: 520px) {
        height: 250px;
      }
      @media screen and (max-width: 441px) {
        height: 200px;
      }
    }
    :nth-of-type(n + 2):nth-of-type(-n + 4) {
      grid-column: span 2;
      @media screen and (max-width: 900px) {
        grid-column: span 1;
      }
      @media screen and (max-width: 768px) {
        grid-column: span 2;
      }
    }
    :nth-of-type(n + 5):nth-of-type(-n + 6) {
      grid-column: span 3;
      .imageBox {
        height: 315px;
        @media screen and (max-width: 520px) {
          height: 250px;
        }
        @media screen and (max-width: 441px) {
          height: 200px;
        }
      }
      @media screen and (max-width: 900px) {
        grid-column: span 1;
      }
      @media screen and (max-width: 768px) {
        grid-column: span 2;
      }
    }
    :nth-of-type(n + 7) {
      grid-column: span 2;
      @media screen and (max-width: 900px) {
        grid-column: span 1;
      }
      @media screen and (max-width: 768px) {
        grid-column: span 2;
      }
    }
    :nth-of-type(n + 4):nth-of-type(-n + 6) {
      @media screen and (max-width: 900px) {
        grid-column: span 2;
        .imageBox {
          height: 350px;
        }
      }
      @media screen and (max-width: 520px) {
        .imageBox {
          height: 250px;
        }
      }
      @media screen and (max-width: 441px) {
        .imageBox {
          height: 200px;
        }
      }
    }
    @media screen and (max-width: 900px) {
      :first-of-type {
        display: none;
      }
    }
    @media screen and (max-width: 768px) {
      :first-of-type {
        display: none;
      }
    }
    transition: all 0.25s;
    cursor: pointer;

    a {
      color: #202125;
      display: unset;
    }
    .text {
      color: #738a94;
      margin-top: 0px;
      margin-bottom: 12px;
      font-size: 18px;
      line-height: 25px;
      letter-spacing: 0px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }

    .date {
      margin: 0px;
      color: #90a2aa;
      font-style: normal;
      font-weight: normal;
      font-size: 13px;
      line-height: 22px;
      letter-spacing: 0.2px;
      text-transform: uppercase;
      font-feature-settings: 'tnum' on, 'lnum' on;
    }
    .header {
      -webkit-line-clamp: 2;
      font-size: 24px;
      line-height: 32px;
      margin-top: 18px;
      overflow: hidden;
      margin-bottom: 8px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      letter-spacing: -1px;
      @media screen and (max-width: 900px) {
        font-size: 22px;
        line-height: 32px;
      }
      @media screen and (max-width: 768px) {
        font-size: 24px;
        line-height: 32px;
      }
    }
  }

  .cardWrapper1 {
    background: #fff;
    margin-top: 55px;
    margin-left: 20px;
    width: calc(33.33333333333333% - 24px);
    flex: 0 1 calc(33.33333333333333% - 24px);
    transition: all 0.25s;
    cursor: pointer;
    a {
      color: #202125;
      display: unset;
    }
    .text {
      padding-left: 10px;
      padding-right: 10px;
      color: #8f95a3;
      margin-bottom: 15px;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 0.14px;
      line-height: 24px;
    }
    .header {
      padding-left: 10px;
      margin-top: 15px;
      padding-bottom: 0px;
      font-size: 18px;
    }

    @media screen and (max-width: 1059px) and (min-width: 900px) {
      width: calc(50% - 12px);
      flex: 0 0 calc(50% - 12px);
      margin-left: 24px !important;
    }

    @media screen and (max-width: 767px) {
      flex: 1 1 100%;
      margin-left: 8px;
      width: calc(100% - 16px);
      margin-top: 25px;
      .header,
      .text,
      .icon {
        padding: 0 10px;
      }
    }
  }
`;

export default FeatureSectionWrapper;
