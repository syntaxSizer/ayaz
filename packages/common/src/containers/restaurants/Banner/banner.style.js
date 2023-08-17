import styled from 'styled-components';

const CardWrapper = styled.section`
  max-width: 1300px;
  display: flex;
  flex-direction: column;
  margin: auto;
  @media screen and (max-width: 1350px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 800px) {
    padding: 0 15px;
  }
  .textCardWrapper {
    color: #fff;
    margin: auto;
    background: 0 0;
    z-index: 9;
    margin-bottom: 5px;
    width: 100%;
    padding-top: 42px;
    @media screen and (max-width: 1000px) {
      padding-top: 27px;
    }
    .header {
      color: rgb(45, 49, 56);
      font-size: 42px;
      margin-bottom: 0px;
      margin-top: 5px;
      line-height: normal;
      font-weight: 600;
      word-break: break-word;
      max-height: 3.6em;
      letter-spacing: -2.4px;
      overflow: hidden;
      @media screen and (max-width: 800px) {
        font-size: 32px;
      }
    }
    .inlineItems {
      margin-bottom: 20px;
      margin-top: 20px;
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
    }
    .slogan {
      font-size: 11px;
      letter-spacing: initial;
      font-weight: 500;
      line-height: normal;
      position: relative;
      display: inline-flex;
      margin-right: 8px;
      align-items: center;
      height: 32px;
      color: #202125;
      border-radius: 16px;
      border: 1px solid rgba(217, 219, 224, 0.5);
      background-color: rgb(255, 255, 255);
      padding: 0px 14px;
      margin-bottom: 8px;
      text-transform: uppercase;
      transition: background-color 100ms ease-in-out 0s;
      :hover {
        cursor: pointer;
        background-color: rgba(217, 219, 224, 0.5);
      }
      .imageIcon {
        margin-right: 8px;
      }
      .name {
        display: block;
        @media screen and (max-width: 1000px) {
          display: none;
        }
      }
      .backArrow {
        width: 7px;
        margin: 0 6px;
        transform: rotate(${({ rotate }) => (rotate ? '270deg' : '180deg')});
        @media screen and (max-width: 1000px) {
          display: none;
        }
      }
      .mobileInfo {
        display: none;
        @media screen and (max-width: 1000px) {
          margin: 0;
          display: block;
        }
      }
    }
    .bonusSection {
      display: flex;
      -webkit-box-pack: justify;
      justify-content: space-between;
      -webkit-box-align: center;
      align-items: center;
      margin-bottom: 8px;
    }
    .fee {
      font-size: 11px;
      font-weight: 600;
      line-height: normal;
      text-transform: uppercase;
      color: #002524;
      letter-spacing: 0.6px;
    }
    .status {
      background-color: rgba(151, 156, 166, 0.1);
      color: rgb(151, 156, 166);
      font-size: 11px;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.6px;
      padding: 7px 14px;
      display: inline-flex;
      -webkit-box-align: center;
      align-items: center;
      float: none;
    }
    .closed {
      background-color: #000;
      color: #fff;
      font-size: 11px;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.6px;
      padding: 7px 14px;
      display: inline-flex;
      -webkit-box-align: center;
      align-items: center;
      float: none;
      margin-right: 8px;
      @media screen and (max-width: 350px) {
        display: none;
      }
    }
    .cuisine {
      background-color: rgba(250, 94, 94, 0.1);
      color: rgb(250, 94, 94);
      font-size: 11px;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.6px;
      padding: 7px 14px;
      display: inline-flex;
      -webkit-box-align: center;
      align-items: center;
      float: none;
      :not(:first-child) {
        margin-left: 8px;
      }
    }
    .closed {
      background-color: #000;
      color: #fff;
      font-size: 11px;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.6px;
      padding: 7px 14px;
      display: inline-flex;
      -webkit-box-align: center;
      align-items: center;
      float: none;
      margin-right: 8px;
    }
    .about {
      font-size: 14px;
      letter-spacing: 0.14px;
      font-weight: 400;
      line-height: normal;
      color: rgb(143, 149, 163);
      padding: 0px;
      margin: 0px 8px 0px 0px;
      @media screen and (max-width: 800px) {
        display: none;
      }
    }
    @media screen and (max-width: 400px) {
      .header {
        font-size: 32px;
      }
    }
  }
`;

const InfoWrapper = styled.div`
  margin-top: 16px;
  padding-bottom: 24px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex-wrap: wrap;
`;

export { CardWrapper, InfoWrapper };
