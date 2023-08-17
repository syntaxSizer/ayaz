import styled from 'styled-components';

const BackgroundWrapper = styled.div`
  background: ${props => props.bg || 'initial'};
  padding-top: 60px;
  padding-bottom: 60px;
  @media screen and (max-width: 800px) {
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;
const FeatureSectionWrapper = styled.section`
  .joinAyazonaBlock {
    max-width: 1300px;
    margin: auto;
    display: flex;
    @media screen and (max-width: 1350px) {
      padding: 0 40px;
    }
    @media screen and (max-width: 800px) {
      padding: 0 15px;
    }
    @media screen and (max-width: 750px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .card {
      position: relative;
      display: flex;
      flex-basis: calc(50% - 26px);
      color: #000;
      margin: 13px;
      border-radius: 12px;
      @media screen and (max-width: 800px) {
        width: 100%;
        margin: 12px;
      }

      .innerSection {
        flex-basis: 100%;
        padding: 44px 50px 44px;
        @media screen and (max-width: 667px) {
          padding: 28px;
        }
      }

      .text {
        margin-bottom: 17px;
        color: #000;
        font-size: 20px;
        letter-spacing: 0.14px;
        line-height: 1.44;
        @media screen and (max-width: 667px) {
          font-size: 15px;
        }
      }

      .header {
        margin-bottom: 12px;
        color: #000;
        font-size: 30px;
        line-height: 1;
        @media screen and (max-width: 667px) {
          font-size: 25px;
        }
        @media screen and (max-width: 350px) {
          font-size: 20px;
        }
      }
      .promoted {
        display: inline-block;
        color: rgb(255, 255, 255);
        font-size: 16px;
        letter-spacing: -0.45px;
        padding: 8px 15px;
        border-radius: 50px;
        background-color: #002524;
        float: right;
        margin-bottom: 0px;
      }
      .learn {
        position: absolute;
        right: 41px;
        bottom: 37px;
        color: #000;
        font-size: 16px;
        letter-spacing: -0.35px;
        opacity: 0.5;
        text-decoration: underline;
      }
    }
  }
`;

export { BackgroundWrapper, FeatureSectionWrapper };
