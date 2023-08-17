import styled from 'styled-components';

export default styled.section`
  max-width: 1300px;
  margin: 100px auto;
  @media screen and (max-width: 1350px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 800px) {
    padding: 0 15px;
  }
  :scroll-bar {
    display: none;
  }
  .sliderWrapper {
    margin-bottom: 30px;
    overflow-x: auto;
    display: flex;
    ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
      overflow: -moz-scrollbars-none;
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .headerWrapper {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0;
    border-bottom: 1px solid #f0f0f0;
    padding-top: 0;
    .heading {
      font-size: 24px;
      letter-spacing: -1.16px;
      font-weight: 600;
      line-height: normal;
      margin-bottom: 0px;
      padding-bottom: 20px;
      @media screen and (max-width: 800px) {
        letter-spacing: -1.16px;
        font-size: 21px;
      }
    }
    .btns {
      display: flex;
      .left,
      .right {
        border-radius: 2px 0 0 2px;
        margin-bottom: 8px;
        margin-left: -1px;
        border: 1px solid #e6e6e6;
        padding: 0.9rem 1.5rem;
        background: #fff;
        cursor: pointer;
      }
      .right img {
        transform: rotate(180deg);
      }
    }
  }

  .left {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    height: 40px;
    width: 40px;
    background-color: white;
    border-radius: 50%;
    border: 1px solid rgb(217, 219, 224);
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(calc(-50% + -32.5px));
    z-index: 200;
    left: -24px;
    box-shadow: none;
    @media screen and (max-width: 800px) {
      display: none;
    }
  }

  .right {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    height: 40px;
    width: 40px;
    background-color: white;
    border-radius: 50%;
    border: 1px solid rgb(217, 219, 224);
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(calc(-50% + -32.5px)) rotate(0deg);
    z-index: 200;
    right: -24px;
    box-shadow: none;
    @media screen and (max-width: 800px) {
      display: none;
    }
  }
  .cardWrapper {
    background: #fff;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 0;
    margin-left: 36px;
    width: calc(33.33333333333333% - 24px);
    flex: 0 0 calc((33.3333% - 0px) - 24px);
    transition: all 0.25s;
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
