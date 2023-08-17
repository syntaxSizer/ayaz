import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  background: #002524;
`;

export const ContainerWrapper = styled.div`
  padding: 0;
  height: 615px;
  max-width: 1300px;
  margin: auto;
  @media screen and (max-width: 1350px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 800px) {
    padding: 0 15px;
  }
  @media screen and (max-width: 800px) {
    height: auto;
    .flexBoxWrapper {
      display: none;
    }
  }

  .appDownload {
    width: 60%;
  }

  .textWrapper {
    flex-basis: 50%;
    width: 50%;
    margin-top: 30px;
    float: left;
    @media screen and (max-width: 950px) {
      flex-basis: 100%;
    }
  }

  .mobileFlexBoxWrapper {
    display: none;
    padding: 0 30px 0 30px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 800px) {
      display: flex;
    }
    img {
      padding: 15px 0 15px 0;
    }
  }
  .gDownloadLinkWrapper {
    width: 50%;
  }
  .text {
    margin: 16px 0 24px;
    color: #fff;
    font-size: 18px;
    line-height: 1.4;
  }
  .headerButton {
    background: #9313a6;
    text-decoration: none;
    color: #ffffff;
    padding: 15px 52px;
    border-radius: 30px;
    font-size: 14px;
  }
  .title {
    font-weight: 600;
    color: #fff;
    font-size: 64px;
    padding-top: 32px;
    margin-top: 30px;
    @media screen and (max-width: 768px) {
      font-size: 40px;
      text-align: center;
    }
  }
  @media screen and (max-width: 768px) {
    .text {
      font-size: 18px !important;
      text-align: center;
    }
  }
`;
