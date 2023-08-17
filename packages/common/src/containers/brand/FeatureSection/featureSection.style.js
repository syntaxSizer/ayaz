import styled from 'styled-components';
const BackgroundWrapper = styled.div`
  background: ${props => props.bg || 'initial'};
`;

const FeatureSectionWrapper = styled.section`
  padding: 0;
  .centeredContainer {
    padding: 30px 0 10px;
    margin-top: 30px;
    margin: auto;
    max-width: 1300px;
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
      margin-top: 100px;
      font-size: 30px;
      font-weight: 600;
      letter-spacing: -1.16px;
      line-height: normal;
      @media screen and (max-width: 768px) {
        font-size: 20px;
      }
    }

    .brandsWrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      a {
        color: #202125;
      }
      .brandWrapper {
        display: block;
        float: left;
        width: calc(100% / 3);
        @media screen and (max-width: 800px) {
          width: calc(50%);
        }
        @media screen and (max-width: 660px) {
          width: calc(100%);
        }
      }
      .singleBrandWrapper {
        width: 100%;
        display: flex;
        align-items: center;
        margin-bottom: 28px;
        .text {
          margin-left: 12px
          font-size: 16px;
          letter-spacing: -0.48px;
          font-weight: 600;
          line-height: normal;
          margin-left: 20px;
          color: #2D3138;
        }
        img {
          width: 48px;
          height: 48px;
          border-radius: 50%;
        }
      }
    }
  }
  .secondRow {
    display: flex;
    margin: auto;
    margin-top: 20px;
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
        color: #8F95A3;
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

export { BackgroundWrapper, FeatureSectionWrapper };
