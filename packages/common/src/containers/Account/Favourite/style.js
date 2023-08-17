import styled from 'styled-components';

const Container = styled.section`
    width: 100%;
    margin: auto;
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
    .mainHeader {
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
    .tabWrapper {
      margin: auto;
      max-width: 1300px;
      margin-top: 29px;
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
    
    .orderHistoryCard {
        flex-basis: 100%!important;
        .card {
            cursor: pointer;
            padding:12px;
            margin: 12px 0;
            display: flex;
            justify-content: space-between;
            border: 1px solid rgba(217,219,224,0.5);
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
    
`;

export default Container;
