import styled from 'styled-components';

const ImageContainer = styled.div`
  background-color: rgb(247, 247, 248);
  transition: opacity 0.4s linear 0s;
  position: relative;
  width: 100%;
  height: 130px;
  @media screen and (max-width: 800px) {
    width: 150px;
    height: 100px;
  }
`;

const Wrapper = styled.section`
  display: flex;
  margin: auto;
  @media screen and (max-width: 800px) {
    flex-direction: column-reverse;
    height: 100vh;
  }
  .images {
    background-color: rgba(217, 219, 224, 0.5);
    object-fit: cover;
    border-radius: 12px;
  }
  .searchButton {
    position: absolute;
    top: 10px;
    left: 48px;
    transform: none;
    @media screen and (max-width: 800px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .buttonAction {
    letter-spacing: -0.16px;
    font-weight: 500;
    line-height: normal;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    font-size: 13px;
    height: 40px;
    padding-left: 24px;
    padding-right: 24px;
    border-radius: 20px;
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    cursor: pointer;
    transition: max-width 150ms ease-in-out 0s;
  }

  .cardItems {
    width: 260px;
    height: calc(100vh - 150px);
    box-shadow: rgb(0 0 0 / 6%) 1px 2px 10px 0px;
    overflow-y: auto;
    padding: 0 12px;
    background: #ffffff;
    flex: 0 0 auto;
    .errorMsg {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      margin: 100px 0 0 0;
      @media screen and (max-width: 800px) {
        margin: 20px 0 0 0;
      }
      .imageIcon {
        height: 48px;
        width: 48px;
        color: #d9dbe0;
      }
      .title {
        font-size: 18px;
        letter-spacing: -0.64px;
        font-weight: 600;
        line-height: normal;
        color: #2d3138;
        margin-top: 16px;
        margin-bottom: 8px;
        @media screen and (max-width: 800px) {
          margin-top: 0px;
          padding-top: 8px;
        }
      }
      .info {
        font-size: 16px;
        letter-spacing: 0.14px;
        font-weight: 300;
        line-height: 1.38;
        color: rgb(45, 49, 56);
      }
    }
    @media screen and (max-width: 800px) {
      display: flex;
      flex-direction: row;
      height: auto;
      width: 100%;
    }
    .cardWrapper {
      background: #fff;
      margin-top: 30px;
      margin-left: 12px;
      margin-right: 12px;
      border-radius: 0;
      transition: all 0.25s;

      transition: all 0.25s;
      cursor: pointer;

      a {
        color: #202125;
        display: unset;
      }
      .info {
        overflow: hidden;

        padding: 10px 0 0;
        width: auto;
        @media screen and (max-width: 800px) {
          height: auto;
        }
      }
      .rest-badges {
        display: flex;
        flex-wrap: wrap;
      }
      .restaurant-info__badge {
        max-width: calc(100% - 16px);
        height: 20px;
        margin-top: 8px;
        padding: 2px 4px;
        border-radius: 0px;
        background-color: rgb(242, 242, 245);
        color: rgb(94, 94, 97);
        font-weight: normal;
        font-size: 13px;
        line-height: 1.275;
        white-space: nowrap;
        display: inline-flex;
        align-items: center;
        margin: 8px 8px 0 0;
        margin-right: 0;
        span {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      .rest-badge__icon {
        width: 14px;
        height: 16px;
        margin-right: 4px;
      }
      .text {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        letter-spacing: 0.14px;
        letter-spacing: 0.14px;
        font-weight: 400;
        line-height: 24px;
        color: rgb(143, 149, 163);
        font-size: 15px;
        line-height: 1.335;
        margin: 0;
        width: 200px;
      }
      .header {
        font-weight: 600;
        font-size: 17px;
        line-height: 1.295;
        margin-bottom: 5px;
        text-align: center;
        @media screen and (max-width: 767px) {
          font-size: 13px;
        }
      }
      @media screen and (max-width: 767px) {
        flex: 1 1 100%;
        margin-left: 8px;
        width: calc(100% - 16px);
        margin-top: 25px;
        margin-left: 0 !important;
        :nth-of-type(2n + 1) {
          margin-left: 0 !important;
        }
      }
    }
  }

  .mapView {
    width: 100%;
    background-color: rgb(247, 247, 248);
    position: relative;
    overflow: hidden;
    @media screen and (max-width: 800px) {
      height: 100%;
    }
  }
`;

export { Wrapper, ImageContainer };
