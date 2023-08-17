import styled from 'styled-components';

export const ContainerWrapper = styled.div`
margin: 0 auto;
  .mainSection {
    height: 100vh;
    top: 0;
    left: 0;
    margin: 0;
    position: absolute;
    width: 100vw;
    margin: 0 0 48px 0;
    min-height: 340px;
  }
  .headerSection {
    width: inherit;
  }
  .innerSection {
    width: 60%;
    height: 85vh;
    margin: 0;
    flex-direction: column;
    -webkit-box-pack: center;
    display: flex;
    position: relative;
    justify-content: center;
    @media screen and (max-width: 667px) {
      width: 100%;
    }
  }
  .section {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .titleSection {
    margin: auto 0;
  }
  .title {
    color: #000;
    text-align: left;
    margin: 0 0 20px;
    display: flex;
    max-width: 700px;
    flex-direction: column;
    font-weight: bold;
    letter-spacing: -5.5px;
    line-height: 104px;
    font-size: 96px;
    @media screen and (max-width: 800px) {
      font-size: 54px;
      line-height: normal;
      letter-spacing: -4px;
      font-weight: bold;
    }
    @media screen and (max-width: 667px) {
      max-width: 100%;
    }
    @media screen and (max-width: 350px) {
      font-size: 40px;
      letter-spacing: -2px;
    }
  }
  .text {
    color: #000;
    text-align: left;
    margin: 0 0 48px 0;
    font-size: 32px;
    max-width: 700px;
    @media screen and (max-width: 667px) {
      max-width: 100%;
      font-size: 22px;
    }
  }
  .actionButton {
    margin: 0;
    display: inline-flex;
    appearance: none;
    border: none;
    outline: none;
    cursor: pointer;
    position: relative;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    background-color: #CDA647;
    color: #FFFFFF;
    padding: 23px 52px 22px 52px;
    font-weight: 600;
    font-size: 18px;
    line-height: 19px;
    letter-spacing: -0.5px;
    border-radius: 100px;
    width: 227px;
  }
  .actionSpan {
    z-index: 5;
    display: block;
  }
  .actionIcon {
    fill: #FFFFFF;
    width: 16px;
    height: 16.8px;
    position: relative;
    top: 2px;
    left: 4px;
  }
`;

export default ContainerWrapper;
