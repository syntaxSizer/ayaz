import styled from 'styled-components';

const FeatureSectionWrapper = styled.section`
  position: relative;
  -webkit-box-flex: 1;
  flex-grow: 1;
  background: #002524;
  height: 100vh;
  min-height: 100vh;
  position: fixed;
  overflow: hidden;
  width: 100vw;
  min-width: 100vw;
  .innerBox {
    max-width: 1300px;
    margin: 0px auto;
    box-sizing: content-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: flex-start;
    flex-direction: column;
    flex: 1 1 0%;
    min-height: calc(100vh - 72px);
    height: 100%;
    letter-spacing: -10.5px;
    color: #fff;
  }
  .titleSection {
    position: relative;
    align-items: flex-start;
    margin-top: 30px;
  }
  .title {
    margin-top: 0px;
    margin-bottom: 0px;
    line-height: normal;
    position: relative;
    z-index: 100;
    font-size: 320px;
    width: 612px;
    height: 377px;
    color: #fff934;
    @media screen and (max-width: 767px) {
      font-size: 170px;
      box-shadow: none;
      width: 315px;
      height: 180px;
    }
  }
  .secondTitle {
    margin-top: 19.1px;
    margin-bottom: 0px;
    line-height: normal;
    font-size: 26px;
    text-align: center;
    color: #fff;
  }
  .text {
    font-family: Ayazona, 'Helvetica Neue', Helvetica;
    font-size: 18px;
    letter-spacing: initial;
    font-weight: 400;
    line-height: normal;
    margin-top: 10px;
    width: 536px;
    text-align: center;
    max-width: 100%;
    margin-bottom: 30px;
    color: #fff;
  }
  .link {
    color: #fff;
    text-decoration: none;
  }
  .button {
    padding: 0px;
    margin: 0px 0px 16px;
    appearance: none;
    outline: none;
    font-family: BigHearted;
    font-size: 12px;
    text-transform: uppercase;
    line-height: normal;
    cursor: pointer;
    text-align: center;
    height: 56px;
    transition: background-color 0.2s ease-in-out 0s, color 0.2s ease-in-out 0s;
    background-color: #fff934;
    color: #000;
    border-radius: 28px;
    width: 156px;
    min-height: 56px;
    border: none;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const TextStyle = styled.p`
  margin: 0 0 24px;
  letter-spacing: 0.14px;
  color: #8f95a3;
  font-size: 16px;
  line-height: 1.5;
`;
export { TextStyle, FeatureSectionWrapper };
