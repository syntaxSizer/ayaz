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
  }
  @media screen and (max-width: 768px) {
    margin: 50px auto 0 auto;
  }
  .tagHeader {
    font-size: 96px;
    font-style: normal;
    font-weight: 500;
    line-height: 60px;
    margin: auto;
    color: #000000;
    @media screen and (max-width: 768px) {
      font-size: 72px;
    }
    @media screen and (max-width: 768px) {
      font-style: normal;
      font-size: 60px;
    }
  }
`;

export default wrapper;
