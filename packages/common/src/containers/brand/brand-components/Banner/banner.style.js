import styled from 'styled-components';

const Wrapper = styled.section`
  z-index: 999;
  position: relative;
  max-width: 1300px;
  margin: auto;
  @media screen and (max-width: 1350px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 800px) {
    padding: 0 15px;
  }
  .searcBarWrapper {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 250px auto auto;
    .searchBar {
      max-width: 415px;
      padding-top: 25px;
      justify-content: center;
      align-items: center;
      margin: auto;
      width: 100%;
    }
    @media screen and (max-width: 768px) {
      padding-left: 0;
      padding-right: 0;
      width: 100%;
      margin: 180px auto auto;
    }
    .header {
      color: #222;
      text-align: center;
      max-width: 700px;
      margin: 0 auto;
      font-size: 56px;
      line-height: 66px;
      letter-spacing: -3px;
      @media screen and (max-width: 768px) {
        letter-spacing: -0.64px;
        font-size: 28px;
        line-height: 32px;
      }
    }
    .text {
      color: #222;
      text-align: center;
    }
    .brandImage {
      position: relative;
      background-position: center center;
      background-size: cover;
      height: 100px;
      width: 100px;
      box-shadow: rgba(0, 0, 0, 0.15) 0 4px 12px;
      margin: -100px auto 55px;
      border-radius: 50%;
      background-color: #fff;
    }
    .text {
      font-size: 16px;
      color: #8f95a3;
      max-width: 400px;
    }
    .menuLink {
      font-size: 16px;
      color: #202125;
      font-weight: 600;
      padding-bottom: 50px;
      a {
        text-decoration: underline;
      }
    }
    .link {
      text-decoration: underline;
      color: #000;
    }
    @media screen and (max-width: 768px) {
      .header {
        font-size: 28px;
        letter-spacing: -0.64px;
        line-height: 32px;
        margin: 0 0 10px;
      }
    }
  }
`;

export default Wrapper;
