import styled from 'styled-components';

const Wrapper = styled.section`
  max-width: 1300px;
  margin: 0 auto;
  padding-top: 70px;
  width: 100% @media screen and (max-width: 1350px) {
    padding: 0;
  }
  @media screen and (max-width: 768px) {
    padding-top: 0px;
  }
  @media screen and (max-width: 350px) {
    padding-top: 10px;
  }
  .searcBarWrapper {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    margin: 50px 0;
    max-width: 700px;
    .text {
      letter-spacing: -0.1px;
      padding-left: 0px;
      padding-right: 0px;
      text-align: left;
      padding-bottom: 26px;
      margin-bottom: 0;
      font-size: 17px;
      color: #fff;
      margin-top: 0;
      margin-bottom: 0;
      font-weight: 400;
      line-height: normal;
      margin: 0;
    }
    .header {
      font-size: 54px;
      font-weight: bold;
      line-height: 1.44;
      letter-spacing: -3px;
      transition: all 0.2s;
      margin-bottom: 0px;
      position: relative;
      color: #fff;
      text-align: left;
    }
    @media screen and (max-width: 768px) {
      margin: 50px auto;
      .header {
        font-size: 36px;
        letter-spacing: -2.4px;
        text-align: center;
        line-height: normal;
        margin: 5px auto;
      }
      .text {
        margin-bottom: 12px;
        text-align: center;
      }
    }
    @media screen and (max-width: 350px) {
      .header {
        font-size: 30px;
      }
    }
  }
`;

export default Wrapper;
