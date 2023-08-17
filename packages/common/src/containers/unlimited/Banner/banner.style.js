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
    color: #FFFFFF;
    text-align: left;
    letter-spacing: -4.5px;
    line-height: 80px;
    font-size: 72px;
    margin: 0 0 20px;
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    font-weight: bold;
    @media screen and (max-width: 800px) {
      font-size: 64px;
      line-height: 72px;
      letter-spacing: -4px;
      font-weight: bold;
    }
  }
  .text {
    color: #FFFFFF;
    text-align: left;
    margin: 0 0 48px 0;
    white-space: nowrap;
    font-size: 32px;
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
    font-weight: 500;
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
