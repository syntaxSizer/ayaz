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

const Adverntages = styled.section`
  border-bottom: 1px solid rgb(229, 229, 234);
  .innerContent {
    width: 100%;
    max-width: 1300px;
    margin: 0px auto;
    padding: 63px 0px;
    @media screen and (max-width: 1350px) {
      padding: 63px 40px;
    }
    @media screen and (max-width: 800px) {
      padding: 63px 15px;
    }
  }
  .advantages-section__list {
    display: flex;
    justify-content: space-between;
    margin: -20px;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }
  .advantages-section__item {
    max-width: 242px;
    margin: 20px;
    @media screen and (max-width: 768px) {
      max-width: 100%;
    }
  }
  .advantages-section__title {
    margin-bottom: 16px;
    color: rgb(0, 0, 0);
    font-size: 20px;
    font-weight: 700;
    letter-spacing: -0.5px;
  }
  .advantages-section__text {
    letter-spacing: 0.14px;
    font-size: 16px;
    color: #8f95a3;
    line-height: 26px;
  }
`;
const EssentialsWrapper = styled.div`
max-width: 1300px;
width: 100%;
background: #fff;
margin: 0 auto;
padding-top 60px;
padding-bottom 60px;
@media screen and (max-width: 1350px) {
  padding 60px 40px;
}
@media screen and (max-width: 800px) {
  padding 60px 15px;
}
.groceries {
  padding-top: 0px;
  padding-bottom: 0px;
}
.groceriesInner {
  align-items: center;
  height: 326px;
  -webkit-box-pack: justify;
  -webkit-box-align: center;
  justify-content: space-between;
  flex-direction: row;
  position: relative;
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
}
.groceriesInfo {
  max-width: calc(50% - 16px);
  align-items: flex-start;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    padding-top: 28px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
.groceriesTitle {
  font-size: 48px;
  letter-spacing: -1.8px;
  font-weight: 600;
  line-height: 50px;
  text-align: left;
  color: #000;
  width: 100%;
  margin: 0;
  @media screen and (max-width: 768px) {
    letter-spacing: -2.2px;
    text-align: center;
    color: #000;
    width: 100%;
    font-size: 32px;
    line-height: 40px;
  }
}
.groceriesCta {
  padding: 0;
  margin: 0;
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
  transition: background-color 0.2s ease-in-out,color 0.2s ease-in-out;
  border-radius: 28px;
  background-color: #002524;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 165px;
  height: 48px;
  @media screen and (max-width: 768px) {
    width: 265px;
  }
}
.text {
  font-size: 16px;
  letter-spacing: 0.14px;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 23px;
  margin-top: 8px;
  line-height: 26px;
  color: #8F95A3;
  text-align: left;
  margin-top: 13px;
  @media screen and (max-width: 768px) {
    letter-spacing: 0.14px;
    font-weight: 400;
    margin-bottom: 23px;
    margin-top: 8px;
    line-height: 26px;
    color: #8F95A3;
    text-align: center;
  }
}
.sample {
  width: 50%;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  li {
    flex: 0 0 33.333333%;
    padding: 8px;
    width: 152px;
    cursor: pointer;
    @media screen and (max-width: 768px) {
      padding: 6px;
      width: 114px;
    }
    a {
      background-color: #f7f7f8;
      border-radius: 12px;
      display: block;
      padding: 8px;
      transition: all .3s cubic-bezier(0.25,0.1,0.25,1);
      :hover {
        transform: scale(1.05);
      }
    }
  }
}
.top {
  position: relative;
  overflow: hidden;
  background-color: transparent;
}
.extra {
  height: auto;
  padding-bottom: 100%;
}
.item {
  opacity: 1;
  position: absolute;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  transition: opacity 0.4s linear 0s;
}
`;

const SearchPanelWrapper = styled.div`
  max-width: 1300px;
  width: 100%;
  background: #fff;
  padding-bottom: 60px;
  padding-top: 70px;
  display: flex;
  margin: auto;
  justify-content: space-between;
  @media screen and (max-width: 1350px) {
    padding: 60px 40px;
  }
  @media screen and (max-width: 800px) {
    padding: 60px 15px;
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
    font-family: Ayazona, 'Helvetica Neue', Helvetica;
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

export {
  SearchPanelWrapper,
  DownloadAppBanner,
  Adverntages,
  EssentialsWrapper,
};
