import styled from 'styled-components';

const SectionWrapper = styled.section`
  margin: auto;
  width: 100%;
  max-width: 1300px;
  @media screen and (max-width: 1350px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 800px) {
    padding: 0 15px;
  }
  .header {
    padding-bottom: 20px;
    border-bottom: 2px solid #f0f0f0;
    padding-top: 0;
    font-size: 30px;
    font-weight: 600;
    letter-spacing: -1.16px;
    line-height: normal;
    @media screen and (max-width: 768px) {
      font-size: 20px;
    }
  }
  .locations {
    color: #000;
  }
`;
const FeatureSectionWrapper = styled.div`
  padding: 0;
  padding-bottom: 60px;
  .locationText {
    font-size: 20px;
    line-height: normal;
    letter-spacing: -0.64px;
    font-weight: 600;
    margin-bottom: 0;
    a {
      color: #00188e;
    }
    @media screen and (max-width: 768px) {
      line-height: normal;
      letter-spacing: -0.64px;
    }
  }

  .brandsWrapper {
    display: flex;
    flex-wrap: wrap;
    @media screen and (max-width: 1000px) {
      justify-content: center;
      .singleBrandWrapper {
        min-width: 140px;
      }
    }

    a {
      color: #202125;
    }
    .singleBrandWrapper {
      display: flex;
      align-items: center;
      min-width: 300px;
      margin: 12px;
      .text {
        font-weight: 600;
        margin-left: 12px;
      }
      img {
        width: 80px;
        border-radius: 50%;
        @media screen and (max-width: 700px) {
          width: 120px;
        }
      }
    }
  }
  .secondRow {
    display: flex;
    margin: auto;
    margin-top: 60px;
    justify-content: space-between;
    padding: 50px 30px;
    padding-top: 12px;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
    .textWrapper {
      padding: 72px 0;
      max-width: 500px;
      .text {
        margin: 16px 0 24px;
        color: #8f95a3;
        font-size: 16px;
        line-height: 1.4;
      }
    }
    .imageWrapper {
      padding: 72px 0;
      margin-bottom: -60px;
      width: 39%;
      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }
  }
`;

export { FeatureSectionWrapper, SectionWrapper };
