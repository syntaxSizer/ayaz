import styled from 'styled-components';

const DownloadAppBanner = styled.div`
  display: none;
  .header {
    font-size: 18px;
    margin-bottom: 17px;
    margin-top: 25px;
    color: #525356;
    text-align: center;
  }
  .apple {
    border: 1px solid rgba(217, 219, 224, 0.5);
    cursor: pointer;
    height: 48px;
    width: 48px;
    border-radius: 30px;
    background: #fff;
  }

  .android {
    border: 1px solid rgba(217, 219, 224, 0.5);
    cursor: pointer;
    height: 48px;
    width: 48px;
    border-radius: 30px;
    background: #fff;
  }
  .linksWrapper {
    display: flex;
    justify-content: center;
    border-bottom: 20px solid rgba(217, 219, 224, 0.5);
    padding: 0 0 30px 0;
  }
  .linksWrapper > * {
    padding: 5px;
  }

  @media screen and (max-width: 768px) {
    display: initial;
  }
`;

const SearchPanelWrapper = styled.div`
  max-width: 1300px;
  width: 100%;
  background: #fff;
  padding-bottom: 50px;
  padding-top: 50px;
  display: flex;
  margin: auto;
  justify-content: space-between;
  @media screen and (max-width: 1350px) {
    padding: 50px 40px;
  }
  @media screen and (max-width: 800px) {
    padding: 50px 15px;
  }

  .mobileDescription {
    display: none;
    margin: 16px 0 24px;
    color: #8f95a3;
    font-size: 16px;
    line-height: 1.4;
  }

  .mobileDownload {
    display: none;
  }

  .appImgHeader {
    display: none;
    margin: 0;
    color: #202125;
    line-height: 1.4;
    font-size: 32px;
    font-weight: 600;
    letter-spacing: -1.7px;
    padding-bottom: 20px;
  }
  .getAppBanner {
    max-width: calc(50% - 16px);
    padding: 90px 0 0 0;
  }
  .appImgBanner {
    max-width: calc(50% - 16px);
    margin-top: 30px;
  }
  @media screen and (max-width: 900px) {
    .getAppBanner {
      padding: 30px 0 0 0;
    }
  }
  @media screen and (max-width: 768px) {
    .getAppBanner {
      max-width: 100%;
    }
    .appImgBanner {
      max-width: 100%;
    }
    flex-direction: column;
    text-align: center;
    align-items: center;
    padding-top: 30px;
    width: auto;
    .imgEl {
      padding: 30px 0 30px 0;
    }
    .appImgHeader {
      display: initial;
    }

    .mobileDescription {
      display: block;
    }

    .mobileDownload {
      display: inline;
      width: 265px;
      margin: 0 auto;
      border-radius: 30px;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: auto;
    .getAppBanner,
    .appImgBanner {
      width: 100%;
    }
    .getAppBanner {
      display: none;
    }
  }
  .directLink {
    color: #636363;
    text-decoration: underline;
    margin: 0 0px 0 12px;
  }

  .reusecore__input {
    .field-wrapper {
      input {
        color: #8f95a3;
        border: 1px solid rgba(217, 219, 224, 0.5);
        height: 70px;
        font-size: 16px;
        font-weight: 400;
        padding-left: 20px;
        &:placholder {
          color: #8f95a3;
          border: 1px solid rgba(217, 219, 224, 0.5);
        }
      }
      .input-icon {
        width: 80px;
        height: 100%;
        > div {
          svg {
            width: 28px;
            height: 28px;
            path {
              fill: #20201d;
            }
          }
        }
      }
    }
  }
`;

export { SearchPanelWrapper, DownloadAppBanner };
