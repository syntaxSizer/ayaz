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

  .main {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin: auto;
    ul {
      margin-bottom: -12px;
      margin: 0px;
      padding: 0px;
      padding-bottom: 32px;
      list-style: none;
      display: flex;
      width: 100%;
      flex-direction: row;
      flex-wrap: wrap;
      overflow-x: auto;
      -ms-overflow-style: none;
      scrollbar-width: none;
      ::-webkit-scrollbar {
        display: none;
      }
      @media screen and (max-width: 767px) {
        flex-wrap: nowrap;
      }
      li {
        margin: 0;
        margin-bottom: 12px;
        a {
          display: flex;
          flex-direction: row;
          -webkit-box-align: center;
          align-items: center;
          margin-right: 12px;
          border-radius: 12px;
          background: 0px center;
          border: 2px solid rgb(246, 247, 248);
          background-color: rgb(246, 247, 248);
          height: 56px;
          padding: 8px;
          cursor: pointer;
          position: relative;
          text-decoration: none;
          outline: none !important;
          font-size: inherit;
          font-weight: inherit;
          font-family: inherit;
          text-align: left;
        }
      }
    }
  }
  .image {
    height: 40px;
    width: 40px;
    margin-right: 12px;
    border-radius: 8px;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    background-color: rgb(255, 255, 255);
    flex-wrap: wrap;
  }
  .img {
    width: 36px;
    height: 36px;
    display: inline-block;
    max-width: 100%;
    transform: translate3d(0px, 0px, 0px);
    object-fit: contain;
    object-position: center center;
    flex-shrink: 0;
  }
  .info {
    padding-right: 12px;
    font-size: 15px;
    line-height: 22px;
    font-weight: 600;
    color: rgb(114, 118, 126);
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
      border-radius: 8px;
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
