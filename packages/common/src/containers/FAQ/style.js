import styled from 'styled-components';

const Wrapper = styled.section`
  .innerSection {
    max-width: 1300px;
    padding-bottom: 60px;
    margin: 40px auto;
    min-height: 400px;
    @media screen and (max-width: 1350px) {
      padding: 0 40px;
    }
    @media screen and (max-width: 800px) {
      padding: 0 15px;
    }
  }
  .header {
    font-size: 24px;
    @media screen and (max-width: 800px) {
      font-size: 21px;
    }
  }
`;

export default Wrapper;
