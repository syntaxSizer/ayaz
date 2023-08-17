import styled from 'styled-components';

const MobileNav = styled.div `
  max-width: 1300px;
  position: sticky;
  top: 70px;
  z-index: 300;
  display: none;
  margin: auto;
  @media screen and (max-width: 800px) {
    display: block;
    padding: 0 15px;
  }
  .areaMobile {
    margin: 0px;
    appearance: none;
    border: none;
    outline: none;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out 0s, color 0.2s ease-in-out 0s;
    border-radius: 0px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    line-height: normal;
    letter-spacing: 0.8px;
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    color: #002524;
    width: 100%;
    padding: 20px 0px;
    height: initial;
    text-align: left;
  }
  .buttonInfo {
    font-size: 100%;
    font-weight: inherit;
    margin: 0px;
  }
  .destination {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-family: Ayazona, "Helvetica Neue", Helvetica;
    font-size: 24px;
    font-weight: 600;
    line-height: normal;
    color: rgb(0, 0, 0);
    letter-spacing: -1.2px;
    text-transform: none;
    margin-top: 11px;
  }
  .css-3xtkqa {
    margin-top: 4px;
    margin-left: 7px;
  }
  .blocking {
    margin-left: -16px;
    margin-right: -16px;
    margin-bottom: 39px;
    width: calc(100% + 32px);
    height: 16px;
    background-color: rgb(247, 247, 248);
  }
`;

export { MobileNav };
