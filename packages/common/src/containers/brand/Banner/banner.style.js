import styled from 'styled-components';

const Wrapper = styled.section`
  .searcBarWrapper {
    margin: 80px auto 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1300px;
    .searchBar {
      max-width: 415px;
      padding-top: 25px;
      justify-content: center;
      align-items: center;
      margin: auto;
      width: 100%;
    }
    .header {
      color: #fff;
      text-align: center;
      max-width: 580px;
      letter-spacing: -3px;
      line-height: normal;
      font-size: 50px;
      margin: 0;
    }
    .text {
      max-width: 580px;
      color: #fff;
      text-align: center;
    }
    @media screen and (max-width: 800x) {
      .header {
        max-width: 700px;
      }
      .text {
        max-width: 700px;
      }
    }
    @media screen and (max-width: 768px) {
      margin: 80px auto 0;
      .header {
        font-size: 40px;
        text-align: center;
        letter-spacing: -1.44px;
        line-height: normal;
      }
      .text {
        text-align: center;
      }
    }
  }
`;

export default Wrapper;
