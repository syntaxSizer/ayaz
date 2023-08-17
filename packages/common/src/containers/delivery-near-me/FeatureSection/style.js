import styled from 'styled-components';

const HeaderSection = styled.div`
  .headerWrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-top: 30px;
    border-bottom: 2px solid #f0f0f0;
    .linkWrapper {
      color: rgb(143, 149, 163);
      font-size: 16px;
    }
    @media screen and (max-width: 768px) {
      .none {
        display: none;
      }
    }
  }
`;

const Section = styled.div``;

const FeatureSectionWrapper = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: auto;
  @media screen and (max-width: 1350px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 800px) {
    padding: 0 15px;
  }
  .rowWrapper {
    .icon {
      padding: 4px;
    }
  }
`;

export { HeaderSection, Section, FeatureSectionWrapper };
