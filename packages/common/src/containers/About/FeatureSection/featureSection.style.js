import styled from 'styled-components';

const FeatureSectionWrapper = styled.section`
  position: relative;
  -webkit-box-flex: 1;
  flex-grow: 1;
`;

const Navigation = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  @media screen and (max-width: 1350px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 800px) {
    padding: 0 15px;
  }
  .innerNav {
    display: flex;
    margin: 28px auto;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }
  .nav {
    display: block;
  }
  .active {
    letter-spacing: -0.1px;
    color: rgb(0, 0, 0);
    border-bottom: 4px solid rgb(255, 252, 17);
    font-size: 16px;
    line-height: 1.5;
    display: block;
  }
  .other {
    list-style: none;
    padding: 0px;
    margin: 0px;
    li {
      display: inline-block;
      margin-left: 30px;
      a {
        font-size: 16px;
        line-height: 1.5;
        letter-spacing: -0.1px;
        text-align: center;
        color: rgb(143, 149, 163);
      }
    }
  }
`;

const Main = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  @media screen and (max-width: 1350px) {
    padding: 0 40px;
  }  
  @media screen and (max-width: 800px) {
    padding: 0 15px;
  }
  .headerSection {
    padding-left: 130px;
    padding-right: 130px;
    margin-left: -130px;
    margin-right: -130px;
  }
  .title {
    font-size: 96px;
    line-height: 0.94;
    letter-spacing: -5.2px;
    color: rgb(0, 0, 0);
    font-weight: 500;
    margin-bottom: 0px;
    @media screen and (max-width: 800px) {
      font-size: 60px;
      line-height: 1;
      letter-spacing: -3.3px;
    }
  }
  .infoSection {
    padding-top: 120px;
    padding-bottom: 120px;
    @media screen and (max-width: 800px) {
      padding-bottom: 70px;
      padding-top: 70px;
    }
  }
  .infoTitle {
    line-height: 1.52;
    letter-spacing: -0.1px;
    font-weight: normal;
    margin-bottom: 32px;
    margin-top: 0px;
    color: rgb(0, 0, 0);
    font-size: 21px;
    @media screen and (max-width: 800px) {
      font-size: 16px;
      line-height: 1.52;
      letter-spacing: -0.1px;
    }
  }
  .info {
    flex-direction: row;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0px 40px;
    p {
      font-size: 18px;
      color: rgb(0, 0, 0);
      line-height: 1.56;
      letter-spacing: -0.1px;
    }
    .innerTitle {
      font-size: 42px;
      line-height: 48px;
      letter-spacing: -1.75px;
      font-weight: 500;
      color: rgb(0, 0, 0);
      padding-right: 70px;
      @media screen and (max-width: 768px) {
        padding-right: 0px;
      }
    }
    @media screen and (max-width: 800px) {
      flex-direction: column;
      display: display: block;;
      grid-template-columns: none;
      gap: none;
    }
  }
  .seperator {
    overflow: hidden;
    position: relative;
    margin: 0px calc((100vw - 100%) / -2);
    height: 16px;
  }
  .bloc {
    position: absolute;
    width: 47%;
    height: 100%;
    background-color: rgb(255, 252, 17);
    transition: all 0.9s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
    right: 0px;
  }
  .teamTitle {
    line-height: 1.52;
    letter-spacing: -0.1px;
    font-weight: normal;
    margin-bottom: 32px;
    margin-top: 0px;
    color: rgb(0, 0, 0);
    text-align: center;
    font-size: 21px;
    @media screen and (max-width: 800px) {
      font-size: 16px;
      line-height: 1.52;
      letter-spacing: -0.1px;
    }
  }
  .quote {
    font-size: 42px;
    line-height: 48px;
    letter-spacing: -1px;
    color: rgb(0, 0, 0);
    font-weight: 400;
    text-align: center;
    margin: 0px;
    a {
      border-bottom: 4px solid rgb(255,253,60);
      color: inherit;
      text-decoration: none;
    }
    @media screen and (max-width: 800px) {
      font-size: 32px;
      line-height: 1.25;
      letter-spacing: -1px;
    }
  }
  .moreSection {
    padding-top: 120px;
    text-align: center;
    padding-bottom: 300px;
  }
  .moreTitle {
    font-size: 72px;
    line-height: 77px;
    letter-spacing: -2.5px;
    color: rgb(0, 0, 0);
    font-weight: bold;
    text-align: center;
    margin: 0px 0px 6px;
    @media screen and (max-width: 768px) {
      font-size: 52px;
      line-height: 77px;
      letter-spacing: -1.81px;
    }
    @media screen and (max-width: 768px) {
      font-size: 48px;
      line-height: 66px;
      letter-spacing: -1.5px;
    }
  }
  .secondTitle {
    font-size: 42px;
    line-height: 48px;
    letter-spacing: -1px;
    color: rgb(0, 0, 0);
    font-weight: 400;
    text-align: center;
    margin: 0px 0px 30px;
    font-family: Ayazona, "Helvetica Neue", Helvetica !important;
    @media screen and (max-width: 768px) {
      font-size: 32px;
      line-height: 48px;
    }
    @media screen and (max-width: 768px) {
      margin: 0px 0px 30px;
      font-size: 18px;
      letter-spacing: 0px;
    }
  }
  .button {
    appearance: none;
    border: none;
    outline: none;
    font-family: BigHearted;
    letter-spacing: 0px;
    line-height: normal;
    cursor: pointer;
    text-align: center;
    height: 56px;
    transition: background-color 0.2s ease-in-out 0s, color 0.2s ease-in-out 0s;
    border-radius: 28px;
    background-color: rgb(255, 252, 17);
    color: rgb(0, 0, 0);
    font-size: 18px;
    padding: 0px 30px;
    margin: 0px auto;
    width: auto;
    text-transform: none;
    text-decoration: none;
  }
`;

export { FeatureSectionWrapper, Navigation, Main };
