import styled from 'styled-components';

const Container = styled.div`
  position: sticky;
  top: 70px;
  width: 100%;
  height: 70px;
  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid rgba(217, 219, 224, 0.5);
  z-index: 300;
  @media screen and (max-width: 800px) {
    display: none;
  }
  .innerWrapper {
    max-width: 1300px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 100%;
    margin: 0px auto;
    @media screen and (max-width: 1350px) {
      padding: 0 40px;
    }
    @media screen and (max-width: 800px) {
      padding: 0 15px;
    }
  }
  .infoSection {
    position: relative;
    height: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: flex-start;
    flex: 1 1 0%;
  }
  .info {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: flex-start;
    opacity: 1;
    transition: all 150ms ease-in-out 0s;
  }
  .titleSection {
    padding-right: 17px;
  }
  .seperate {
    height: 30px;
    width: 1px;
    margin-right: 17px;
    background: rgba(217, 219, 224, 0.5);
  }
  .titleInfo {
    position: relative;
    background: #eeeeee;
    height: 48px;
    border-radius: 500px;
    padding: 4px;
    display: flex;
  }
  .activated {
    padding: 0px 16px;
    border-radius: 500px;
    background: #fff;
    height: 100%;
    display: flex;
    text-align: center;
  }
  .otherside {
    padding: 0px 16px;
    border-radius: 500px;
    height: 100%;
    display: flex;
    text-align: center;
  }
  .innerInfo {
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
  }
  .title {
    font-size: 14px;
    letter-spacing: -0.16px;
    font-weight: 500;
    line-height: normal;
    cursor: pointer;
    color: #000000;
    padding: 0px;
  }
  .options {
    font-size: 16px;
    letter-spacing: 0.14px;
    font-weight: 400;
    line-height: normal;
    color: rgb(143, 149, 163);
    padding-left: 8px;
    padding-right: 8px;
  }
  .active {
    position: absolute;
    bottom: -8px;
    left: 0px;
    width: 100%;
    height: 2px;
    max-width: 51px;
    background-color: #002524;
    transform: translateX(0px);
    transition: max-width 150ms cubic-bezier(0.86, 0, 0.07, 1) 0s,
      transform 150ms linear 0s;
  }
  .seperator {
    height: 30px;
    width: 1px;
    background: rgba(217, 219, 224, 0.5);
  }
  .location {
    padding-right: 0px;
  }
  .innerLocation {
    position: relative;
  }
  .button {
    padding: 0px;
    width: initial;
    margin: 0px;
    appearance: none;
    outline: none;
    cursor: pointer;
    text-align: center;
    transition: background-color 0.2s ease-in-out 0s, color 0.2s ease-in-out 0s;
    border-radius: 0px;
    font-family: BigHearted;
    letter-spacing: 0px;
    font-size: 16px;
    line-height: normal;
    background-color: #eeeeee;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(45, 49, 56);
    height: 48px;
    text-transform: none;
    padding: 0px 16px;
    border: 0px;
    border-radius: 30px;
  }
  .css-rwcr5d {
    margin-right: 8px;
  }
  .afterIcon {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    opacity: 1;
    transition: max-width 150ms linear 0s, opacity 150ms linear 0s;
    will-change: max-width;
  }
  .area {
    margin: 0px;
    letter-spacing: -0.28px;
    font-weight: 500;
    line-height: normal;
    font-size: 15px;
  }
  .unknown {
    height: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: end;
    justify-content: flex-end;
  }
`;

export { Container };
