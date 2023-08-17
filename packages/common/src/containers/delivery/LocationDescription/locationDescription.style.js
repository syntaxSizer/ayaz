import styled from 'styled-components';

const SectionWrapper = styled.section`
  max-width: 1300px;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 60px;
  @media screen and (max-width: 1350px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 800px) {
    padding: 0 15px;
  }
  .header {
    margin-left: 0px;
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -1.44px;
    line-height: normal;
    padding-bottom: 20px;
    border-bottom: 2px solid #f0f0f0;
    padding-top: 0;
    margin-top: 100px;
    @media screen and (max-width: 768px) {
      line-height: normal;
      font-size: 21px;
      letter-spacing: -1.16px;
    }
  }
  .text {
    font-size: 16px;
    color: #8f95a3;
    letter-spacing: 0.14px;
    line-height: 1.62;
    font-weight: 400;
  }
  .wrapper {
    display: flex;
    flex-wrap: wrap;
  }
`;

const Text = styled.p`
  color: #202125;
  font-weight: 300;
  margin: 0 0 24px;
  letter-spacing: 0.14px;
  font-size: 16px;
  -webkit-letter-spacing: 0.14px;
`;

export { SectionWrapper, Text };
