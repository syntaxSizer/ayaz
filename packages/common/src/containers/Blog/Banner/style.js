import styled from 'styled-components';

const wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1300px;
  margin: 125px auto 0px;
  margin-bottom: 0;
  color: #636363;
  @media screen and (max-width: 1350px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 800px) {
    padding: 0 15px;
  }
  @media screen and (max-width: 900px) {
    flex-direction: column-reverse;
    max-width: 624px;
  }
  @media screen and (max-width: 768px) {
    margin: 50px auto 0 auto;
  }
  .tagHeader {
    font-size: 96px;
    max-width: 1000px;
    font-style: normal;
    font-weight: 500;
    line-height: 60px;
    margin: auto;
    color: #000000;
    @media screen and (max-width: 768px) {
      font-size: 72px;
      max-width: 624px;
    }
    @media screen and (max-width: 768px) {
      font-style: normal;
      font-size: 60px;
      max-width: 374px;
    }
  }
  .textWrapper {
    display: flex;
    width: 30%;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 15px;
    @media screen and (max-width: 900px) {
      width: 100%;
    }
    .btn {
      cursor: pointer;
      bottom: 0;
      align-self: self-start;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 17px;
      text-align: center;
      width: 142px;
      height: 48px;
      border: 1px solid #d9dbdf;
      box-sizing: border-box;
      border-radius: 100px;
      background-color: #ffffff;
      @media screen and (max-width: 900px) {
        display: none;
      }
    }
  }
  .header {
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -2px;
    margin-top: 0px;
    margin-bottom: 8px;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: #000000;
    @media screen and (max-width: 1000px) {
      margin-top: 20px;
    }
    @media screen and (max-width: 800px) {
      margin-bottom: 8px;
      font-size: 24px;
      line-height: 32px;
      display: -webkit-box;
      letter-spacing: -1px;
    }
  }

  .textBody {
    padding-right: 24px;
    font-size: 22px;
    line-height: 32px;
    letter-spacing: -0.75px;
    color: #002524;
    margin-top: 0px;
    margin-bottom: 12px;
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

  .img {
    width: 70%;
    position: relative;
    height: 450px;
    @media screen and (max-width: 1290px) {
      height: 390px;
    }
    @media screen and (max-width: 1300px) {
      height: 405px;
    }
    @media screen and (max-width: 900px) {
      width: 100%;
      height: 320px;
    }
    @media screen and (max-width: 768px) {
      height: 300px;
    }
    @media screen and (max-width: 520px) {
      height: 250px;
    }
    @media screen and (max-width: 441px) {
      height: 200px;
    }
  }
  .image {
    object-fit: contain;
    border-radius: 12px;
  }
`;

export default wrapper;
