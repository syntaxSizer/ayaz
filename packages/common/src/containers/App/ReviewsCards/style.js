import styled from 'styled-components';

const ReviewsCardsWrapper = styled.section`
  max-width: 1300px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding-top: 60px;
  padding-bottom: 60px;
  @media screen and (max-width: 1350px) {
    padding: 20px 40px;
  }
  @media screen and (max-width: 800px) {
    padding: 20px 15px;
  }
  @media screen and (max-width: 768px) {
    align-items: center;
    padding: 50px 15px;
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
      padding: 25px;
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
    border-radius: 12px;
    padding: 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    min-width: 350px;
    > :last-child {
      margin-right: 0;
    }
    cite {
      font-size: 15px;
      font-style: normal;
      margin-top: 12px;
      font-family: BigHearted;
      letter-spacing: 0px;
    }
    @media screen and (max-width: 661px) {
      margin-right: 10px;
      min-width: 280px;
    }
  }
  .top {
    padding: 20px;
    min-height: 160px;
    display: flex;
    color: #343538;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
  }
  .info {
    margin: 0 auto;
    font-size: 18px;
    letter-spacing: 0.14px;
    line-height: 1.44;
  }
`;

export { ReviewsCardsWrapper };
