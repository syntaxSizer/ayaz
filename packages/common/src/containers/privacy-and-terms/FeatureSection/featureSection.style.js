import styled from 'styled-components';

const FeatureSectionWrapper = styled.section`
  overflow: hidden;
  max-width: 1300px;
  margin: auto;
  padding: 0 0 100px;
  ul {
    margin: 20px 0;
    padding: 0 0 0 30px;
    li {
      padding: 6px;
      list-style-type: initial;
      a {
        border-bottom: 4px solid rgb(255, 253, 60);
        color: inherit;
        text-decoration: none;
      }
    }
  }
  .title {
    font-size: 96px;
    font-weight: 500;
    line-height: 0.94;
    padding-top: 3px;
    margin-bottom: 20px;
    margin-top: 40px;
    margin: 0.67em 0px;
    @media screen and (max-width: 1059px) {
      margin-top: 0px;
    }
    @media screen and (max-width: 767px) {
      font-size: 60px;
      letter-spacing: -3.3px;
      font-weight: 500;
      line-height: 1;
      margin-bottom: 32px;
    }
  }
  @media screen and (max-width: 1440px) {
    padding: 40px 0 50px;
  }
  @media screen and (max-width: 768px) {
    padding: 40px 0 0px;
  }
  @media screen and (max-width: 500px) {
    padding: 30px 0;
  }
`;

const Main = styled.section`
  max-width: 730px;
  display: block;
  margin: 0px;
`;

const TextStyle = styled.p`
  margin: 0 0 24px;
  letter-spacing: 0.14px;
  color: #000000;
  font-size: 16px;
  line-height: 1.5;
  a {
    border-bottom: 4px solid rgb(255, 253, 60);
    color: inherit;
    text-decoration: none;
  }
`;
export { TextStyle, FeatureSectionWrapper, Main };
