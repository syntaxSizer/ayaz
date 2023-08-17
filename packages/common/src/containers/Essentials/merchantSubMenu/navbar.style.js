import styled from 'styled-components';

const HeaderWrapper = styled.div`
  position: sticky;
  top: 0px;
  width: 100%;
  height: 70px;
  background-color: #fff;
  border-bottom: 1px solid rgba(217, 219, 224, 0.5);
  z-index: 300;
  .section {
    max-width: 1300px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 100%;
    margin: 0 auto;
    @media screen and (max-width: 1350px) {
      padding: 0 40px;
    }
    @media screen and (max-width: 800px) {
      padding: 0 15px;
    }
  }
  .leftInfo {
    position: relative;
    height: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: flex-start;
    flex: 1;
  }
  .locationInfo {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: flex-start;
    opacity: 1;
    transition: all 150ms ease-in-out;
  }
  .options {
    padding-right: 17px;
    @media screen and (max-width: 1000px) {
      display: none;
    }
  }
  .optionsValues {
    position: relative;
  }
  .values {
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
    width: max-content;
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
  .delivery {
    font-size: 14px;
    letter-spacing: -0.16px;
    font-weight: 500;
    line-height: normal;
    cursor: pointer;
    color: #2d3138;
    margin: 0;
    padding: 0;
  }
  .or {
    font-size: 16px;
    letter-spacing: 0.14px;
    font-weight: 400;
    line-height: normal;
    color: #8f95a3;
    padding-left: 8px;
    padding-right: 8px;
  }
  .pickup {
    font-size: 14px;
    -webkit-letter-spacing: -0.16px;
    -moz-letter-spacing: -0.16px;
    -ms-letter-spacing: -0.16px;
    letter-spacing: -0.16px;
    font-weight: 500;
    line-height: normal;
    cursor: default;
    color: #8f95a3;
    margin: 0;
    padding: 0;
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
    margin-right: 17px;
    background: rgba(217, 219, 224, 0.5);
    @media screen and (max-width: 1000px) {
      display: none;
    }
  }
  .icon {
    padding-right: 17px;
    @media screen and (max-width: 1000px) {
      display: none;
    }
  }
  .iconSection {
    position: relative;
  }
  .button {
    padding: 0;
    width: initial;
    margin: 0;
    appearance: none;
    outline: none;
    cursor: pointer;
    text-align: center;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    border-radius: 0;
    font-family: BigHearted;
    letter-spacing: 0px;
    font-size: 16px;
    line-height: normal;
    background-color: #fff;
    display: flex;
    align-items: center;
    color: #2d3138;
    height: 56px;
    text-transform: none;
    border: 0;
    width: max-content;
  }
  .dropdown {
    position: relative;
  }
  .innerDrop {
    min-width: 175px;
    max-width: 250px;
    margin-right: 18px;
    @media screen and (max-width: 350px) {
      min-width: 150px;
      max-width: 150px;
    }
  }
  .dropInfo {
    line-height: normal;
    letter-spacing: -0.5px;
    align-items: center;
    background-color: #fff;
    display: flex;
    font-weight: 500;
    width: 100%;
    cursor: pointer;
    font-size: 14px;
  }
  .dropText {
    margin-right: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .dropIcon {
    margin-left: auto;
    display: flex;
    align-items: center;
  }
  .search {
    position: relative;
    align-items: center;
    display: flex;
    flex: auto;
    flex-basis: 350px;
    margin-right: 16px;
    @media screen and (max-width: 1000px) {
      display: none;
    }
  }
  .searchIcon {
    cursor: pointer;
    > svg {
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      align-items: center;
      height: 16px;
      width: 16px;
      color: #2d3138;
    }
  }
  .searchInput {
    border-radius: 0;
    appearance: none;
    box-shadow: none !important;
    width: 100%;
    caret-color: #000;
    color: #2d3138;
    -webkit-box-flex: 1;
    flex-grow: 1;
    padding: 16px;
    opacity: 1;
    transition: opacity 50ms ease-in-out;
    max-width: 380px;
    font-family: Ayazona, Helvetica Neue, Helvetica;
    font-size: 14px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.4px;
    border: 0px;
    overflow: visible;
    margin: 0;
  }
  .basket {
    height: 100%;
    display: flex;
    align-items: center;
    -webkit-box-pack: end;
    justify-content: flex-end;
  }
  .innerBasket {
    position: relative;
  }
  .basketAction {
    position: relative;
    height: 45px;
  }
  .basketry {
    position: static;
    bottom: 0px;
    left: 0px;
    width: 100%;
    z-index: 300;
    opacity: 1;
    visibility: visible;
  }
  .basketButton {
    transition-duration: 0.5s;
    transition-property: padding-left, padding-right, background-color, color;
    color: rgb(45, 49, 56);
    background-color: rgb(255, 255, 255);
    border: 1px solid rgba(217, 219, 224, 0.5);
    font-family: Ayazona, 'Helvetica Neue', Helvetica;
    font-size: 14px;
    letter-spacing: initial;
    font-weight: 600;
    text-transform: uppercase;
    line-height: normal;
    display: flex;
    height: 45px;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 0px 20px;
    margin: 0px;
  }
  .beforeIcon {
    flex: initial;
    font-size: 13px;
    letter-spacing: 0.8px;
    font-weight: 600;
    text-transform: uppercase;
    color: rgb(143, 149, 163);
    text-align: left;
  }
  .basketIcon {
    flex: initial;
    border-right: 1px solid rgb(217, 219, 224);
    padding-right: 12px;
    margin-right: 9px;
    position: relative;
    text-align: center;
  }
  .basketCount {
    font-size: 13px;
    letter-spacing: 0.8px;
    font-weight: 600;
    text-transform: uppercase;
    color: rgb(143, 149, 163);
    text-align: left;
    flex: initial;
  }
  .cartButton {
    background-color: ${({ altBtnStyle }) =>
      altBtnStyle ? 'rgb(9, 155, 9)' : 'rgb(255, 255, 255)'};
    border: 1px solid rgba(217, 219, 224, 0.5);
    cursor: pointer;
    padding: 12px 20px;
    margin: 8px 0;
    width: 130px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 50px;
    transition-duration: 0.5s;
    transition-property: padding-left, padding-right, background-color, color;
    .image {
      border-right: solid 1px
        ${({ altBtnStyle }) => (altBtnStyle ? '#fff' : '#CFD1D7')};
      padding: 0 10px 0 0;
    }
    .numberField {
      color: ${({ altBtnStyle }) => (altBtnStyle ? '#fff' : '#000')}!important;
    }
    .text,
    .numberField {
      font-weight: 600;
      color: ${({ altBtnStyle }) =>
        altBtnStyle ? '#fff' : '#CFD1D7'}!important;
      margin: 0;
    }
  }
  .dpdwn {
    color: rgb(45, 49, 56);
  }
`;

export { HeaderWrapper };
