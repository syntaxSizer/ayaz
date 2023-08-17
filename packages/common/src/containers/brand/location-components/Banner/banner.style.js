import styled from 'styled-components';

const Wrapper = styled.section`
  z-index: 999;
  position: relative;
  padding: 0;
  .searcBarWrapper {
    margin: 250px auto auto;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    max-width: 1300px;
    @media screen and (max-width: 799px) {
      margin: 220px auto auto;
    }
    @media screen and (max-width: 768px) {
      margin: 130px auto auto;
    }

    .textAndImageWrapper {
      display: flex;
      justify-content: space-between;
    }

    .textWrapper {
      display: flex;
      flex-direction: column;
      .breadCrums {
        margin: 30px 0;
        @media screen and (max-width: 767px) {
          display: none;
        }
      }
    }

    .header {
      text-align: left;
      max-width: 700px;
      margin-bottom: 20px;
      margin-top: 30px;
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
      text-align: left;
      max-width: 700px;
      margin-bottom: 20px;
    }
    .brandImage {
      background-size: cover;
      height: 100px;
      width: 100px;
      border-radius: 50%;
      @media screen and (max-width: 800px) {
        box-shadow: rgba(0, 0, 0, 0.15) 0 4px 12px;
        margin: -50px 0 5px;
      }
    }
    @media screen and (max-width: 768px) {
      .header {
        font-size: 30px;
      }
    }
  }
`;

export default Wrapper;
