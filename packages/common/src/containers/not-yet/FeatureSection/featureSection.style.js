import styled from 'styled-components';
const BackgroundWrapper = styled.div`
  background: ${props => props.bg || 'initial'};
`;

const FeatureSectionWrapper = styled.section`
  max-width: 1300px;
  margin: 30px auto;
  text-align: center;
  @media screen and (max-width: 1350px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 800px) {
    padding: 0 15px;
  }
  .text {
    margin: 0 0 24px;
    letter-spacing: 0.14px;
    color: #8f95a3;
    font-size: 16px;
  }
`;

export { BackgroundWrapper, FeatureSectionWrapper };
