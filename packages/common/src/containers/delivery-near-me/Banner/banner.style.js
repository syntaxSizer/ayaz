import styled from 'styled-components';

const Wrapper = styled.section`
  max-width: 1300px;
  margin: 0 auto;
  padding-top: 45px;
  width: 100% @media screen and (max-width: 1350px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 800px) {
    padding: 0 15px;
  }
  @media screen and (max-width: 768px) {
    padding-top: 90px;
  }
  .searcBarWrapper {
    display: flex;
    margin: 50px auto 0;
    max-width: 700px;
    flex-direction: column;
    .searchBar {
      max-width: 415px;
      padding-top: 25px;
      justify-content: center;
      align-items: center;
      margin: auto;
      width: 100%;
    }
    .text {
      letter-spacing: -0.1px;
      padding-left: 0px;
      padding-right: 0px;
      text-align: center;
      margin: 0 auto;
    }
    .header {
      font-size: 54px;
      font-weight: bold;
      line-height: 1.44;
      letter-spacing: -3px;
      transition: all 0.2s;
      position: relative;
      color: #fff;
      margin-bottom: 20px;
      text-align: center;
      margin: 0 auto;
    }
    @media screen and (max-width: 800px) {
      margin: 0px auto 0;
    }
    @media screen and (max-width: 768px) {
      .header {
        font-size: 42px;
        letter-spacing: -2.4px;
        text-align: center;
        line-height: normal;
        margin: 5px auto;
      }
      .text {
        margin-bottom: 12px;
      }
    }
    @media screen and (max-width: 411px) {
      .header {
        max-width: 350px;
      }
    }
    @media screen and (max-width: 350px) {
      .header {
        font-size: 30px;
        max-width: 280px;
      }
      .text {
        font-size: 14px;
      }
    }
  }
`;

export default Wrapper;
