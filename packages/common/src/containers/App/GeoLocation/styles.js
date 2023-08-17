import styled from 'styled-components';

const SearchLevel = styled.section`
  @media screen and (max-width: 767px) {
    width: 100% !important;
  }
`;

const MapWrapper = styled.div`
  .customMarker {
    position: absolute;
    cursor: pointer;
    margin-left: -30px;
    margin-top: -50px;
    border-radius: 50%;
    padding: 0px;
    background: transparent;
    display: flex;
    :hover {
      z-index: 999999;
    }
    a:hover .tooltiptext {
      visibility: visible;
      z-index: 9999;
    }
    img {
      width: 32px;
      height: 32px;
      margin: 5px;
      border-radius: 50%;
      box-shadow: rgb(0 0 0 / 25%) 0px 4px 8px 0px;
      background: rgb(255, 255, 255);
      transform: scale(1);
      transition: transform 150ms ease-in-out 0s;
      :hover {
        transform: scale(1.42);
      }
    }
    .tooltiptext {
      visibility: hidden;
      width: 120px;
      background-color: black;
      color: #fff;
      text-align: center;
      border-radius: 6px;
      padding: 5px 0;
      /* Position the tooltip */
      position: absolute;
      z-index: 1;
      bottom: 100%;
      left: 50%;
      margin-left: -60px;
    }
  }

  :after {
    position: absolute;
    bottom: -10px;
    left: 40px;
    border-color: transparent;
    display: block;
    width: 0;
  }
`;
const Container = styled.div`
  .modalWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    width: 400px;
    height: auto;
    box-shadow: 0px 0 8px rgba(0, 0, 0, 0.15);
    .header {
      text-align: center;
      font-size: 16px;
      font-weight: 500;
    }
    .button {
      padding: 0px;
      margin: auto;
      appearance: none;
      border: none;
      outline: none;
      font-size: 12px;
      font-family: BigHearted;
      letter-spacing: 0px;
      text-transform: uppercase;
      line-height: normal;
      cursor: pointer;
      text-align: center;
      height: 56px;
      transition: background-color 0.2s ease-in-out 0s,
        color 0.2s ease-in-out 0s;
      background-color: #002524;
      color: rgb(255, 255, 255);
      margin-bottom: 10px;
      width: 80%;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 28px;
    }
  }

  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  .icon {
    margin-right: -5px;
  }
  .search-input {
    width: 100%;
    margin-top: 0px;
    max-width: 428px;
    line-height: 34px;
    border-radius: 0px;
    color: #202125;
    font-size: 15px;
    @media screen and (max-width: 800px) {
      font-size: 15px;
    }
  }
  .forcedWidth {
    max-width: 100% !important;
  }
  .mobileTitle {
    display: none;
  }
  .webTitle {
    display: initial;
    font-weight: 600;
    letter-spacing: -1.6px;
    position: relative;
    height: 68px;
    color: #fff;
    font-size: 54px;
    text-transform: none;
    margin: 122px 0 0;
    transition: all 0.2s;
    position: relative;
  }
  .description {
    letter-spacing: -0.1px;
    padding-left: 0px;
    padding-right: 0px;
    font-family: Ayazona, 'Helvetica Neue', Helvetica;
    text-align: left;
    padding-bottom: 26px;
    margin-bottom: 0;
    font-size: 17px;
    color: #fff;
    margin-top: 0;
    margin-bottom: 0;
    font-weight: 400;
    line-height: normal;
    margin: 0;
  }
  @media (min-width: 992px) {
    max-width: 86rem;
  }
  @media screen and (max-width: 800px) {
    align-items: center;
    .mobileTitle {
      display: initial;
      text-align: center;
      font-size: 32px;
      letter-spacing: -1.6px;
      color: #fff;
      margin: 50px 0 auto;
    }
    .webTitle {
      display: none;
    }
    .description {
      margin-bottom: 8px;
      margin-top: 10px;
      text-align: center;
    }
  }
  @media screen and (max-width: 375px) {
    .mobileTitle {
      font-size: 30px;
    }
  }
  @media screen and (max-width: 320px) {
    .mobileTitle {
      font-size: 28px;
    }
  }
`;

export { Container, SearchLevel, MapWrapper };
