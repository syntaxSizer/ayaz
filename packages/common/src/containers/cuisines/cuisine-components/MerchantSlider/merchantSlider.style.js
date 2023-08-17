import styled from 'styled-components';

const MerchantSliderWrapper = styled.section`
  width: 100%;
  max-width: 1300px;
  margin: auto;
  display: flex;
  flex-flow: nowrap;
  justify-content: flex-start;
  -webkit-box-pack: start;
  position: relative;
  overflow: auto;
  background: #fff;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
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
    margin-top: 55px;
    border-radius: 0;
    margin-left: 36px;
    width: calc(33.33333333333333% - 24px);
    flex: 0 0 calc((33.3333% - 0px) - 24px);
    transition: all .25s;
    cursor: pointer;
    :nth-child(1) {
        margin-left: 0 !important;
    }
    :nth-child(4) {
        margin-left: 26px;
    }
    :nth-of-type(3n + 1) {
        margin-left: 26px;
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
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
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
          margin-left: 26px;
      }
    }
    
    @media screen and (max-width: 767px) {
      flex: 1 1 100%;
      margin-left: 8px;
      flex: 0 0 calc((100% - 16px) - 16px);
      margin-top: 20px;
      margin-left: 15px !important;
      :nth-child(1) {
        margin-left: 0 !important;
      }
    }
  }
`;

export default MerchantSliderWrapper;
