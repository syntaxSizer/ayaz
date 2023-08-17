import styled from 'styled-components';

const Container = styled.section`
    .sectionHeader {
      height: 177px;
      opacity: 1;
      border-bottom: 1px solid rgba(217, 219, 224, 0.5);
      @media screen and (max-width: 667px) {
        height: 158px;
      }
    }
    .innerSection {
      max-width: 1300px;
      height: 100%;
      width: 100%;
      position: relative;
      margin: 0px auto;
      @media screen and (max-width: 1350px) {
        padding: 0 40px;
      }  
      @media screen and (max-width: 800px) {
        padding: 0 15px;
      }
    }
    .header {
      position: absolute;
      bottom: 24px;
      opacity: 1;
      transform: translateY(0%);
      transition: opacity 300ms ease-in-out 0s, transform 300ms linear 0s;
    }
    .title {
      font-size: 42px;
      letter-spacing: -2.4px;
      font-weight: 600;
      line-height: normal;
      color: rgb(45, 49, 56);
      margin: 0px;
      @media screen and (max-width: 768px) {
        font-size: 32px;
        letter-spacing: -2px;
      }
      @media screen and (max-width: 667px) {
        font-size: 28px;
        letter-spacing: -1.44px;
      }
    }
    .msnWrapper {
      margin: auto;
      max-width: 1300px;
      margin-top: 48px;
      @media screen and (max-width: 1350px) {
        padding: 0 40px;
      }  
      @media screen and (max-width: 800px) {
        padding: 0 15px;
      }
    }
    .listContainer {
      width: 100%;
      background: #f4f4f4;
      padding-top: 4px;
    }
    .listWrapper {
      margin: auto;
      max-width: 1300px;
      margin-top: 48px;
      @media screen and (max-width: 1350px) {
        padding: 0 40px;
      }  
      @media screen and (max-width: 800px) {
        padding: 0 15px;
      }
    }
    .emptyWrapper {
      margin: auto;
      max-width: 1300px;
      .noHeader {
        font-size: 18px;
        letter-spacing: -0.64px;
        font-weight: 600;
        line-height: normal;
        margin-bottom: 8px;
      }
      .noDescription {
        font-size: 18px;
        letter-spacing: initial;
        font-weight: 400;
        line-height: normal;
        margin-top: 0px;
      }
    }
    .flex-column {
        flex-direction: column;
        display: flex;
        flex-basis: 100%;
        max-height: 350px;
        overflow-y: auto;
        @media screen and (max-width: 800px) {
          width: 100%;
        }
    }
    .orderDetails {
        .backArrow {
          margin: 20px 0;
          cursor: pointer;
          transition: all .2s;
          &:hover {
            color: #002524;
          }
        }
    }
    .userDetailsWrapper {
        display: flex;
        @media screen and (max-width: 800px) {
          flex-direction: column;
        }
        .menuHeader {
          display: flex;
          justify-content: space-between;
          margin: 12px 38px;
          border-bottom: solid 1px #F3F3F3;
          @media screen and (max-width: 800px) {
            margin: 0;
          }
        }
        .menuWrapper {
          display: flex;
          flex-direction: column;
          padding: 12px 38px;
          @media screen and (max-width: 800px) {
            padding: 0;
          }
          .spaced-row {
            display: flex;
            justify-content: space-between;
          }
        }
      }
    .menuDetails {
        background: #f2f2f2;
        padding: 12px;
        border-radius: 12px;
        margin-bottom: 50px;
      }

      .odas-container {
        width: 100%;
      }
      
      .oda {
        background-color: #fff;
        border-radius: 10px;
        display: flex;
        max-width: 100%;
        margin: 20px 0;
        overflow: hidden;
        @media screen and (max-width: 667px) {
          flex-direction: column;
        }
      }
      
      .oda h6 {
        opacity: 0.6;
        margin: 0;
        letter-spacing: 1px;
        text-transform: uppercase;
      }
      
      .oda h2 {
        letter-spacing: 1px;
        margin: 10px 0;
        @media screen and (max-width: 667px) {
          font-size: 17px;
        }
      }
      
      .oda-previewPending {
        background-color: #2A265F;
        color: #fff;
        padding: 30px;
        max-width: 250px;
        @media screen and (max-width: 667px) {
          max-width: 100%;
        }
      }
      
      .oda-previewProcessing {
        background: #002524;
        color: #fff;
        padding: 30px;
        max-width: 250px;
        @media screen and (max-width: 667px) {
          max-width: 100%;
        }
      }
      
      .oda-previewCancelled {
        background-color: red;
        color: #fff;
        padding: 30px;
        max-width: 250px;
        @media screen and (max-width: 667px) {
          max-width: 100%;
        }
      }
      
      .status {
        color: #fff;
        display: inline-block;
        font-size: 12px;
        opacity: 0.6;
        text-transform: uppercase;
        margin-top: 30px;
        text-decoration: none;
      }
      
      .oda-info {
        padding: 30px;
        position: relative;
        width: 100%;
      }
      
      .progress-container {
        position: absolute;
        top: 30px;
        right: 30px;
        text-align: right;
        width: 150px;
      }
      
      .progress-text {
        font-size: 10px;
        opacity: 0.6;
        letter-spacing: 1px;
      }
      
      .btnX {
        background-color: #2A265F;
        border: 0;
        border-radius: 50px;
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
        color: #fff;
        font-size: 16px;
        padding: 12px 25px;
        position: absolute;
        bottom: 30px;
        right: 30px;
        letter-spacing: 1px;
        cursor: pointer;
        @media screen and (max-width: 667px) {
          display: none;
        }
      }
    
    .orderHistoryCard {
        flex-basis: 100%!important;
        .card {
            cursor: pointer;
            padding:12px;
            margin: 12px 0;
            display: flex;
            justify-content: space-between;
            background: #f2f2f2;
        }
        .userDetails {
            display: flex;
            flex-direction: column;
            font-size: 14px;
            padding: 6px;
            @media screen and (max-width: 800px) {
                width: 100%;
            }
            .row {
                display: flex;
                * {
                    padding 0 4px 0 0px;
                }
            }
        }
    }
    .statusWrapperPending {
      color: #fff;
      border-radius: 50px;
      background: #002524;
      padding: 2px 6px;
      font-weight: 600;
    }
    .statusWrapperProcessing {
      color: #fff;
      border-radius: 50px;
      background: #002524;
      padding: 2px 6px;
      font-weight: 600;
    }
    .statusWrapperCancelled {
      color: #fff;
      border-radius: 50px;
      background: red;
      padding: 2px 6px;
      font-weight: 600;
    }
      
    .progressPending {
      background: #002524;
      border-radius: 50px;
      height: 8px;
      width: 100%;
      @media screen and (max-width: 667px) {
        height: 5px;
      }
    }
      
    .progressProcessing {
      background: #002524;
      border-radius: 50px;
      height: 8px;
      width: 100%;
      @media screen and (max-width: 667px) {
        height: 5px;
      }
    }
      
    .progressCancelled {
      background: red;
      border-radius: 50px;
      height: 8px;
      width: 100%;
      @media screen and (max-width: 667px) {
        height: 5px;
      }
    }
    
    .progress::after {
      border-radius: 50px;
      background-color: #2A265F;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 5px;
      width: 66%;
    }
`;
export default Container;
