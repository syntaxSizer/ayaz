import styled from 'styled-components';

const FeatureSectionWrapper = styled.section`
  max-width: 1300px;
  display: flex;
  background: #fff;
  flex-direction: column;
  padding-bottom: 60px;
  margin: auto;
  @media screen and (max-width: 1350px) {
    padding: 0 40px;
    padding-bottom: 60px;
  }  
  @media screen and (max-width: 800px) {
    padding: 0 15px;
    padding-bottom: 60px;
  }
  .topHeader {
    margin-top: 100px;
    margin-bottom: 20px;
    padding-bottom: 0;
    border-bottom: 1px solid #f0f0f0;
    padding-top: 0;
    height: 50px;
    font-size: 30px;
    letter-spacing: -1.16px;
    @media screen and (max-width: 768px) {
      font-size: 20px;
    }
  }
  @media screen and (max-width: 990px) {
    padding-top: 0;
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
  }
  .cardWrapper {
    background: #fff;
    margin-top: 55px;
    border-radius: 0;
    margin-left: 36px;
    width: calc(33.33333333333333% - 24px);
    flex: 0 1 calc(33.33333333333333% - 24px);
    transition: all .25s;
    cursor: pointer;

    :nth-of-type(3n + 1) {
      margin-left: 0;
    }
    :hover {
      box-shadow: 0 0 0 8px #f2f2f5;
      border-radius: 0px;
      background-color: #f2f2f5;
    }
    a {
      color: #202125;
      display: unset;
    }
    .info {
      overflow: hidden;
      padding: 10px 0 0;
      width: auto;
    }
    .rest-badges {
      display: flex;
      flex-wrap: wrap;
    }
    .restaurant-info__badge {
      max-width: calc(100% - 16px);
      height: 20px;
      margin-top: 8px;
      padding: 2px 4px;
      border-radius: 0px;
      background-color: rgb(242, 242, 245);
      color: rgb(94, 94, 97);
      font-weight: normal;
      font-size: 13px;
      line-height: 1.275;
      white-space: nowrap;
      display: inline-flex;
      align-items: center;
      margin: 8px 8px 0 0;
      margin-right: 0;
      span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .rest-badge__icon {
      width: 14px;
      height: 16px;
      margin-right: 4px;
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
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      width: 100%;
      font-weight: 600;
      font-size: 17px;
      line-height: 1.295;
      margin-bottom: 5px;
    }

    @media screen and (max-width: 1059px) and (min-width: 768px) {
      width: calc(50% - 12px);
      flex: 0 0 calc(50% - 12px);
      margin-left: 24px !important;
      :nth-of-type(2n + 1) {
        margin-left: 0 !important;
      }
    }
    
    @media screen and (max-width: 767px) {
      flex: 1 1 100%;
      margin-left: 8px;
      width: calc(100% - 16px);
      margin-top: 25px;
      margin-left: 0 !important;
      :nth-of-type(2n + 1) {
        margin-left: 0 !important;
      }
    }
  }
  }
`;

export default FeatureSectionWrapper;
