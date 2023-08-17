import styled from 'styled-components';

const Wrapper = styled.section`
  max-width: 1300px;
  margin: auto;
  .searchBarWrapper {
    max-width: ${({ onlySearchBar }) => (onlySearchBar ? 'initial' : '65%')};
    @media screen and (max-width: 800px) {
      max-width: 100%;
    }
    .searchBar {
      max-width: 415px;
      padding-top: 25px;
      justify-content: center;
      align-items: center;
      margin: auto;
      width: 100%;
    }
    .header {
      letter-spacing: -3px;
      padding: 0;
      line-height: 64px;
      transition: all 0.2s;
      position: relative;
      text-align: center;
      margin: 0 auto;
      max-width: 700px;
      font-weight: 600;
      color: #fff;
      font-size: 52px;
      padding-top: 32px;
      margin-bottom: 20px;
      @media screen and (max-width: 768px) {
        font-size: 35px;
        letter-spacing: -1.44px;
        text-align: center;
        line-height: 1.4;
      }
    }
    .text {
      color: #fff;
      max-width: 700px;
      text-align: center;
      margin: 0 auto;
    }
  }
`;

export default Wrapper;
