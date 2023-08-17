import styled from 'styled-components';

const SectionWrapper = styled.section`
  max-width: 1300px;
  margin: auto;
  margin-bottom: 60px;
  @media screen and (max-width: 1350px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 800px) {
    padding: 0 15px;
  }
  .header {
    margin-left: 0px;
    font-size: 28px;
    letter-spacing: -1.44px;
    font-weight: 600;
    line-height: normal;
    padding-bottom: 20px;
    border-bottom: 1px solid #f0f0f0;
    padding-top: 0;
    margin-top: 100px;
    @media (max-width: 800px) {
      font-size: 24px;
      letter-spacing: -1.16px;
      opacity: 0.9;
    }
  }
  .link {
    width: calc(100% / 5);
    @media (max-width: 800px) {
      width: calc(100% / 3);
    }
    @media (max-width: 768px) {
      width: calc(50% - 16px);
    }
    @media screen and (max-width: 350px) {
      width: calc(100%);
    }
  }
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    .text {
      color: #202125;
      font-family: Ayazona, 'Helvetica Neue', Helvetica;
      line-height: normal;
      margin-top: 25px;
      font-size: 16px;
      letter-spacing: -0.48px;
      font-weight: 600;
    }
  }
`;

export default SectionWrapper;
