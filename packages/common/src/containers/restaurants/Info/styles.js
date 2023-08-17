import styled from 'styled-components';

const Wrapper = styled.section`
  max-width: 1300px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  padding-top: 54px;
  @media screen and (max-width: 1350px) {
    padding: 0 40px;
    padding-top: 40px;
  }
  @media screen and (max-width: 800px) {
    padding: 0 15px;
    padding-top: 40px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  .timeData {
    width: 35%;
    padding-top: 8px;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
    .header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .left {
        font-size: 16px;
        letter-spacing: -0.48px;
        font-weight: 600;
        line-height: normal;
      }
      .right {
        font-size: 14px;
        letter-spacing: 0.14px;
        font-weight: 400;
        line-height: normal;
      }
    }
    .divide {
      height: 2px;
      background-color: rgb(247, 247, 248);
      margin-bottom: 20px;
      padding: 0 15px;
      @media screen and (max-width: 800px) {
        padding: 0;
      }
    }
    .timeWrapper {
      color: rgb(143, 149, 163);
      height: 36px;
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      letter-spacing: 0.14px;
      font-weight: 400;
      line-height: normal;
    }
  }
  .mapView {
    width: 60%;
    @media screen and (max-width: 768px) {
      width: 100%;
      height: 300px;
      margin-top: 20px;
    }
    background-color: rgb(247, 247, 248);
    position: relative;
    overflow: hidden;
  }
  .info {
    padding-top: 54px;
  }
`;
const Section = styled.div`
  .divide {
    height: 1px;
    background-color: rgba(217, 219, 224, 0.5);
    max-width: 1300px;
    margin: auto;
    @media screen and (max-width: 1350px) {
      padding: 0 40px;
    }
    @media screen and (max-width: 800px) {
      padding: 0 15px;
    }
  }
`;
export { Wrapper, Section };
