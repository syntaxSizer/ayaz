import styled from 'styled-components';

const FeatureSectionWrapper = styled.section`
  width: 100%;
  max-width: 1300px;
  margin: auto;
  @media screen and (max-width: 1350px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 800px) {
    padding: 0 15px;
  }
  .images {
    background-color: rgb(247, 247, 248);
    object-fit: cover;
    border-radius: 12px;
    transition: opacity 0.4s linear 0s;
  }
  .sectionHeader {
    position: relative;
    padding-bottom: 20px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(217, 219, 224, 0.5);
    align-items: flex-end;
    padding-bottom: 16px;
  }
  .divider {
    position: absolute;
    top: 2px;
    left: calc(0% - 0px);
    transition: left 300ms cubic-bezier(0.86, 0, 0.07, 1);
    width: 32px;
    height: 100%;
    border-bottom: 2px solid rgba(0, 0, 0, 0.9);
    z-index: 200;
  }
  .sectionTitle {
    font-size: 24px;
    letter-spacing: -1.16px;
    font-weight: 600;
    line-height: normal;
    margin-top: 0;
    margin-bottom: 0;
    @media screen and (max-width: 768px) {
      font-size: 21px;
      letter-spacing: -0.88px;
      opacity: 0.9;
    }
  }
  .titleSection {
    position: relative;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    border-bottom: 1px solid rgba(217, 219, 224, 0.5);
    align-items: flex-start;
    flex-wrap: wrap;
  }
  .sep {
    position: absolute;
    top: 2px;
    left: calc(0% - 0px);
    transition: left 300ms cubic-bezier(0.86, 0, 0.07, 1) 0s;
    width: 32px;
    height: 100%;
    border-bottom: 2px solid rgba(0, 0, 0, 0.9);
    z-index: 200;
  }
  .title {
    font-size: 24px;
    letter-spacing: -1.16px;
    font-weight: 600;
    line-height: normal;
  }
  .description {
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    color: rgb(143, 149, 163);
    letter-spacing: -0.1px;
    flex-basis: 100%;
    order: 2;
  }
  .mainSection {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
    display: flex;
    flex-wrap: wrap;
    background: #fff;
    justify-content: space-between;
    .conditionalHeader {
      padding-bottom: 20px;
      border-bottom: 1px solid #f0f0f0;
      width: 100%;
      margin: 12px 18px 20px;
      margin-bottom: 0;
    }
    @media screen and (max-width: 990px) {
      padding-top: 0;
    }
    .cardWrapper {
      background: #fff;
      margin-top: 15px;
      border-radius: 12px;
      box-shadow: 0px 2px 8px rgb(0 0 0 / 16%);
      min-height: 82px;
      height: 82px;
      width: calc(25% - 20px);
      flex: 0 1 calc(25% - 20px);
      transition: all 0.25s;
      cursor: pointer;
      a {
        color: #202125;
        display: unset;
      }
      .info {
        overflow: hidden;
        padding: 15px 0 0;
        width: auto;
      }
      .text {
        letter-spacing: 0.14px;
        letter-spacing: 0.14px;
        font-weight: 400;
        line-height: 24px;
        color: rgb(143, 149, 163);
        font-size: 15px;
        line-height: 1.335;
        margin: 0;
      }
      .header {
        width: 100%;
        font-weight: 600;
        font-size: 17px;
        line-height: 1.295;
        margin-bottom: 5px;
        text-align: center;
        @media screen and (max-width: 667px) {
          font-size: 13px;
        }
      }

      @media screen and (max-width: 767px) {
        width: calc(33.33333333333333% - 8px);
        flex: 0 1 calc(33.33333333333333% - 8px);
      }
    }
  }
`;

export default FeatureSectionWrapper;
