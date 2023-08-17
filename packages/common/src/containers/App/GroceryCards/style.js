import styled from 'styled-components';

const GroceryCardsWrapper = styled.section`
  max-width: 1300px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding-top: 60px;
  padding-bottom: 60px;
  @media screen and (max-width: 1350px) {
    padding: 50px 40px;
  }
  @media screen and (max-width: 800px) {
    padding: 50px 15px;
  }
  @media screen and (max-width: 768px) {
    align-items: center;
  }
  .title {
    font-size: 35px;
    font-weight: 500;
    padding-bottom: 48px;
    text-align: left;
    margin: 0;
    color: #000;
    padding: 32px;
    padding-left: 0;
    line-height: 50px;
    @media screen and (max-width: 768px) {
      letter-spacing: -2.2px;
      font-size: 30px;
      line-height: 40px;
      text-align: center;
    }
  }
  .cardsHolder {
    overflow-x: auto;
    display: flex;
    flex-direction: row;
    width: 100%;
    -ms-overflow-style: none;
    scrollbar-width: none;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  .card {
    min-width: inherit;
    margin-right: 24px;
    background-color: rgb(246, 247, 248);
    border-radius: 12px;
    padding: 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    min-width: 300px;
    > :last-child {
      margin-right: 0;
    }
    @media screen and (max-width: 661px) {
      margin-right: 10px;
      min-width: 300px;
    }
  }
  .top {
    padding: 32px;
    min-height: 160px;
    display: flex;
    color: #343538;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    padding-top: 5px;
  }
  .subHeader {
    color: #000;
    font-weight: 500;
    font-family: BigHearted;
    font-size: 28px;
    line-height: 1;
    text-align: center;
    margin-bottom: 12px;
  }
  .info {
    max-width: 280px;
    margin: 0 auto;
    font-size: 17px;
    letter-spacing: 0.14px;
    line-height: 1.44;
    text-align: center;
  }
  .img {
    width: 100%;
    vertical-align: bottom;
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
    transition: background-color 0.2s ease-in-out 0s, color 0.2s ease-in-out 0s;
    background-color: #002524;
    color: rgb(255, 255, 255);
    cursor: pointer;
    border-radius: 50px;
    margin-top: 48px;
    width: 80%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 56px;
    max-width: 335px;
  }
`;

export { GroceryCardsWrapper };
