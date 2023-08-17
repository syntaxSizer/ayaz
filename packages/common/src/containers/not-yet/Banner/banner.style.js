import styled from 'styled-components';

const Wrapper = styled.section`
  background: #f7e4ea;
  .wrapper {
    padding: 0 25px 30px 25px;
    display: flex;
    max-width: 1300px;
    margin: auto;
    .header {
      font-weight: 600;
      color: #202125;
      font-size: 62px;
      padding-top: 40px;
      margin-bottom: 20px;
      @media screen and (max-width: 1350px) {
        width: 100%;
      }
      @media screen and (max-width: 400px) {
        font-size: 34px;
      }
    }

    .text {
      margin-top: 18px;
      font-size: 16px;
      color: #868789;
      line-height: 1.38;
      whitespace: pre-wrap;
      margin-bottom: 30px;
    }

    @media screen and (max-width: 800px) {
      .cyclist {
        display: none;
      }
      .header {
        font-size: 45px;
      }
    }
    @media screen and (max-width: 768px) {
      text-align: center;
    }

    @media screen and (max-width: 350px) {
      font-size: 14px;
    }
  }
`;

export default Wrapper;
