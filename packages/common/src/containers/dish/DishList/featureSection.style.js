import styled from 'styled-components';

const SectionWrapper = styled.section`
  max-width: 1300px;
  margin: auto;
  margin-top: ${({ mt }) => mt + 'px'};
  margin-bottom: 60px;
  @media screen and (max-width: 1350px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 800px) {
    padding: 0 15px;
  }
  .header {
    padding-bottom: 20px;
    border-bottom: 1px solid #f0f0f0;
    padding-top: 0;
    font-size: 30px;
    font-weight: 600;
    letter-spacing: -1.16px;
    line-height: normal;
    margin-top: 100px;
  }
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    .item {
      width: calc(100% / 4);
      @media screen and (max-width: 800px) {
        width: calc(50%);
      }
      @media screen and (max-width: 350px) {
        width: calc(100%);
      }
    }
    .textList {
      font-size: 16px;
      color: #202125;
      width: 200px;
      font-family: Ayazona, 'Helvetica Neue', Helvetica;
      font-weight: 600;
      letter-spacing: -0.48px;
      line-height: normal;
      margin-top: 15px;
    }
  }
  .description {
    color: #202125;
    .header {
      border-bottom: 1px solid #f0f0f0;
      padding: 30px 0;
      margin-top: 100px;
    }
    .text {
      letter-spacing: 0.14px !important;
      color: #8f95a3;
    }
  }
`;

export default SectionWrapper;
