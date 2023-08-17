import styled from 'styled-components';

export default styled.section`
    max-width: 1300px;
    margin: 20px auto 0;
    padding-left: 15px;
    padding-right: 15px;
    :scroll-bar {
        display: none
    }
    @media screen and (max-width: 800px) {
      display: none;
    }
    .sliderWrapper {
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
        position: relative;
        padding-bottom: 20px;
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        border-bottom: 1px solid rgba(217, 219, 224, 0.5);
        align-items: flex-start;
        flex-wrap: wrap;
        .heading {
          font-size: 24px;
          letter-spacing: -1.16px;
          font-weight: 600;
          line-height: normal;
          @media screen and (max-width: 800px) {
            font-size: 21px;
            letter-spacing: -0.88px;
            font-weight: 600;
            line-height: normal;
            opacity: 0.9;
          }
          @media screen and (max-width: 667px) {
              letter-spacing: -1.16px;
              font-size: 21px;
          }
        }
        .btns  {
            display: flex;
            .left, .right {
                border-radius: 2px 0 0 2px;
                margin-bottom: 8px;
                margin-left: -1px;
                border: 1px solid #e6e6e6;
                padding: .9rem 1.5rem;
                background: #fff;
                cursor: pointer;
            }
            .right img {
                transform: rotate(180deg);
            }
        }
    }
    .info {
      font-size: 14px;
      font-weight: 400;
      line-height: normal;
      color: rgb(143, 149, 163);
      letter-spacing: -0.1px;
      flex-basis: 100%;
      order: 2;
    }
    .track {
      position: absolute;
      top: 2px;
      left: calc(0% - 0px);
      transition: left 300ms cubic-bezier(0.86, 0, 0.07, 1) 0s;
      width: 32px;
      height: 100%;
      border-bottom: 2px solid rgba(0, 0, 0, 0.9);
      z-index: 200;
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
        top: 60%;
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
        top: 60%;
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
      margin-left: 8px;
      flex: 0 0 calc((100% - 16px) - 16px);
      transition: all .25s;
      cursor: pointer;
      :nth-child(1) {
          margin-left: 0 !important;
      }
      :nth-child(4) {
          margin-left: 8px;
      }
      :nth-of-type(3n + 1) {
          margin-left: 8px;
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
          color: #202125;
        }
    }
`;