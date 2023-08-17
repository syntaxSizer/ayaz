import styled from 'styled-components';

const PageWidth = styled.section`
  background: ${props => props.bg || 'initial'};
  width: 100%;
  margin: auto;
`;

const FeatureSectionWrapper = styled.div`
  max-width: 1300px;
  margin: auto;
  @media screen and (max-width: 1350px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 800px) {
    padding: 0 15px;
  }
  .joinAyazonaBlock {
    text-align: center;
    max-width: 450px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 100%;
    @media screen and (max-width: 768px) {
      padding-left: 0;
      padding-right: 0;
    }
  }

  .joinAyazonaBlock .header {
    line-height: 1.4;
    font-size: 60px;
    font-family: BigHearted;
    font-weight: 600;
    letter-spacing: -1.7px;
    margin-bottom: 0px;
    margin-top: 0px;
    color: #000;
    @media screen and (max-width: 768px) {
      font-size: 40px;
    }
  }
  .borderedBoxText {
    color: #000;
  }
`;

const BackgroundWrapper = styled.div`
  padding: 70px 0;
  padding-bottom: 25px;
  @media screen and (max-width: 667px) {
    padding: 50px 0;
    padding-bottom: 0;
  }
`;

export { BackgroundWrapper, FeatureSectionWrapper, PageWidth };
