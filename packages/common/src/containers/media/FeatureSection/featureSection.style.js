import styled from 'styled-components';

const FeatureSectionWrapper = styled.section`
  max-width: 1300px;
  margin: auto;
  @media screen and (max-width: 1350px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 800px) {
    padding: 0 15px;
  }
  .row {
    display: flex;
    justify-content: space-between;
    margin: 16px 0 24px;
    padding-top: 60px;
    padding-bottom: 60px;
    color: #8f95a3;
    font-size: 18px;
    line-height: 1.4;
    .btn {
      padding: 16px 100px;
      border-radius: 30px;
      font-size: 14px;
    }
    .rowInnerBlock {
      width: 420px;
      margin-right: 5px;
      margin-left: 5px;
    }
    .title {
      margin: 0;
      color: #202125;
      line-height: 1.4;
      font-size: 30px;
      padding-bottom: 30px;
    }
    .download-title {
      padding-bottom: 20px;
      padding-top: 60px;
      font-size: 60px;
      font-weight: 300;
      color: #202125;
    }
    @media screen and (max-width: 913px) {
      flex-direction: column;
      padding: 0;
      .rowInnerBlock {
        width: 100%;
        margin-top: 20px;
      }
      img {
        margin: auto;
      }
    }
    @media screen and (max-width: 768px) {
      text-align: center;

      .download-title {
        font-size: 40px;
      }
    }
  }
`;

export default FeatureSectionWrapper;
