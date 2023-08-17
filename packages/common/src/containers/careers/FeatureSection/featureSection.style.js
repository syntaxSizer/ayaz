import styled from 'styled-components';

const FeatureSectionWrapper = styled.section`
  width: 100%;
  max-width: 1300px;
  margin: auto;
  @media screen and (max-width: 1350px) {
    padding-right: 40px;
    padding-left: 40px;
  }
  @media screen and (max-width: 800px) {
    padding-right: 15px;
    padding-left: 15px;
  }
  .innerSection {
    grid-template-columns: repeat(12,1fr);
    grid-row-gap: 60px;
    width: 1025px;
    grid-column-gap: 24px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    display: grid;
    padding-bottom: 120px;
    @media screen and (max-width: 900px) {
      grid-template-columns: repeat(8,56px);
      grid-row-gap: 60px;;
      grid-column-gap: 24px;
      margin-left: auto;
      margin-right: auto;
      width: 616px;
    } 
    @media screen and (max-width: 767px) {
      position: relative;
      display: grid;
      grid-column-gap: 16px;
      grid-row-gap: 30px;
      width: 100%;
      grid-template-columns: repeat(2,1fr);
    }
  }
  .actionCard {
    width: 288px;
    height: 288px;
    padding: 56px 59px;
    grid-column: 1 / span 3;
    margin-bottom: 64px;
    margin-left: 0;
    overflow: hidden;
    grid-row: 1;
    background-color: #fff934;
    align-self: end;
    animation: animation-14w2yg2 0.8s cubic-bezier(0.165,0.84,0.44,1);
    animation-fill-mode: backwards;
    @media screen and (max-width: 900px) {
      width: 192px;
      height: 192px;
      padding: 37px 39px;
      grid-column: 1 / span 3;
      margin-bottom: 64px;
      margin-left: 0;
    }
    @media screen and (max-width: 767px) {
      overflow: hidden;
      grid-row: 1;
      grid-column: 1 / span 2;
      padding: 36px 42px;
      background-color: #fff934;
      width: 179px;
      height: 179px;
      align-self: end;
      margin-left: 36px;
      margin-bottom: -56px;
    }
  }
  .card {
    display: flex;
    flex-direction: column;
    animation: animation-os2n7p 0.6s cubic-bezier(0.165,0.84,0.44,1);
    animation-delay: 1.4s;
    animation-fill-mode: backwards;
  }
  .cardHeader {
    font-size: 42px;
    line-height: 1.14;
    letter-spacing: -1px;
    margin-bottom: 23px;
    @media screen and (max-width: 900px) {
      font-size: 32px;
      line-height: 1.13;
      letter-spacing: -0.7px;
    }
    @media screen and (max-width: 767px) {
      font-size: 26px;
      font-weight: 500;
      line-height: 1.15;
      letter-spacing: -0.6px;
      margin-bottom: 8px;
    }
  }
  .infoLink {
    font-size: 18px;
    line-height: 1.56;
    color: #000;
    text-decoration: none;
    @media screen and (max-width: 900px) {
      font-size: 14px;
      line-height: 1.43;
    }
    @media screen and (max-width: 767px) {
      font-size: 12px;
      color: #000;
      text-decoration: none;
      line-height: 1.54;
    }
  }
  .initialImage {
    grid-column: 3 / span 9;
    margin-right: -131px;
    grid-row: 1;
    z-index: -1;
    animation: animation-14z95xr 0.6s cubic-bezier(0.165,0.84,0.44,1);
    animation-delay: 0.6s;
    animation-fill-mode: backwards;
    @media screen and (max-width: 900px) {
      grid-column: 2 / span 7;
      margin-right: -76px;
    } 
    @media screen and (max-width: 767px) {
        margin-left: -20px;
        margin-right: -20px;
        grid-column: 1 / span 2;
    }
  }
  .image {
    width: 100%;
  }
  .ghost {
    display none;
  }
  .theWhy {
    grid-column: 1 / span 12;
    font-size: 48px;
    line-height: 1.08;
    letter-spacing: -1.1px;
    max-width: 776px;
    width: 100%;
    font-weight: 500;
    text-align: center;
    place-self: center;
    transition: opacity 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
    opacity: 1;
    sup {
      font-size: 20px;
    }
    @media screen and (max-width: 900px) {
      grid-column: 1 / span 8;
      font-size: 36px;
      line-height: 1.17;
      letter-spacing: -1.1px;
      sup {
        font-size: 15px;
      }
    } 
    @media screen and (max-width: 767px) {
      margin-top: 36px;
      font-size: 30px;
      line-height: 1.2;
      font-weight: 500;
      letter-spacing: -0.8px;
      text-align: center;
      place-self: center;
      grid-area: 2 / 1 / auto / span 2;
      transition: opacity 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
      opacity: 1;
      sup {
        font-size: 12px;
      }
    }
    @media screen and (max-width: 441px) {
      padding-right: 100px;
    }
    @media screen and (max-width: 375px) {
      padding-right: 136px;
    }
    @media screen and (max-width: 320px) {
      padding-right: 165px;
    }
  }
  .bar {
    position: relative;
    grid-area: 3 / 2 / auto / span 1;
    height: 16px;
    background-color: rgb(255, 252, 17);
    margin-right: calc((100vw - 1300px) / -2);
    margin-left: 0px;
    grid-column: 8 / span 5;
    transition: all 0.9s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
    @media screen and (max-width: 900px) {
      margin-right: calc((100vw - 616px) / -2);
      grid-column: 5 / span 4;
    } 
  }
  .trust {
    grid-column: 1 / span 6;
    grid-area: 4 / 1 / auto / span 4;
    margin-top: 0px;
    margin-bottom: 0px;
    opacity: 1;
    transition: opacity 0.6s cubic-bezier(0.165, 0.84, 0.44, 1) 0s, margin-top 0.6s cubic-bezier(0.165, 0.84, 0.44, 1) 0s, margin-bottom 0.6s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
  }
  .theWhat {
    grid-column: 8 / span 5;
    margin-left: 0px;
    grid-area: 4 / 1 / auto / span 2;
    opacity: 1;
    transition: opacity 0.6s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
  }
  .whatHeader {
    margin-top: 40px;
    font-size: 42px;
    line-height: 1.14;
    letter-spacing: -1.9px;
    font-weight: 500;
  }
  .whatInfo {
    margin-top: 40px;
    font-size: 18px;
    line-height: 1.56;
    max-width: 390px;
  }
  .box {
    padding: 200px 132px;
    grid-column: 1 / span 12;
    font-size: 48px;
    line-height: 1.08;
    letter-spacing: -2.1px;
    margin-left: 0;
    margin-right: 0;
    grid-row: 5;
    box-sizing: border-box;
    position: relative;
    text-align: center;
    font-weight: 500;
    grid-row: 5;
    @media screen and (max-width: 900px) {
      padding: 137px 52px 137px 60px;
      grid-row: 5;
      grid-column: 1 / span 8;
      font-size: 36px;
      line-height: 1.17;
      letter-spacing: -1.1px;
      margin-left: -32px;
      margin-right: -32px;
    } 
    @media screen and (max-width: 767px) {
      box-sizing: border-box;
      position: relative;
      grid-row: 6;
      grid-column: 1 / span 2;
      text-align: center;
      font-weight: 500;
      padding: 70px 68px;
      font-size: 30px;
      line-height: 1.2;
      letter-spacing: -0.8px;
      margin-left: -20px;
      margin-right: -20px;
    }
    @media screen and (max-width: 441px) {
      padding-right: 165px;
    }
    @media screen and (max-width: 375px) {
      padding-right: 180px;
    }
    @media screen and (max-width: 320px) {
      padding-right: 200px;
    }
  }
  .boxInfo {
    opacity: 1;
    transition: opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
    grid-column: 1 / span 12;
    font-size: 48px;
    line-height: 1.08;
    letter-spacing: -2.1px;
    text-align: center;
    font-weight: 500;
    @media screen and (max-width: 767px) {
      text-align: center;
      font-weight: 500;
      font-size: 30px;
      line-height: 1.2;
      letter-spacing: -0.8px;
    }
  }
  .topBar {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 16px;
    width: 100%;
    background-color: #054da7;
    transition: width 0.6s cubic-bezier(0.895, 0.03, 0.685, 0.22) 0s;
    font-size: 48px;
    line-height: 1.08;
    letter-spacing: -2.1px;
  }
  .rightBar {
    position: absolute;
    right: 0px;
    top: 0px;
    width: 16px;
    height: 100%;
    background-color: #054da7;
    transition: height 0.3s linear 0.6s;
    font-size: 48px;
    line-height: 1.08;
    letter-spacing: -2.1px;
    @media screen and (max-width: 441px) {
      padding-right: 110px;
    }
    @media screen and (max-width: 375px) {
      padding-right: 155px;
    }
    @media screen and (max-width: 320px) {
      padding-right: 185px;
    }
  }
  .bottomBar {
    position: absolute;
    bottom: 0px;
    right: 0px;
    height: 16px;
    width: 100%;
    background-color: #054da7;
    transition: width 0.3s linear 0.9s;
    font-size: 48px;
    line-height: 1.08;
    letter-spacing: -2.1px; 
  }
  .leftBar {
    position: absolute;
    left: 0px;
    bottom: 0px;
    width: 16px;
    height: 100%;
    background-color: #054da7;
    transition: height 0.6s cubic-bezier(0.165, 0.84, 0.44, 1) 1.2s;
    font-size: 48px;
    line-height: 1.08;
    letter-spacing: -2.1px;
  }
  .think {
    width: 977px;
    grid-column: 1 / span 10;
    margin-left: -131px;
    margin-top: -100px;
    grid-area: 6 / 1 / auto / span 7;
    z-index: -1;
    opacity: 1;
    transition: opacity 0.6s cubic-bezier(0.165, 0.84, 0.44, 1) 0s, margin-top 0.6s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
    @media screen and (max-width: 900px) {
      grid-area: 6 / 1 / auto / span 7;
      margin-left: -76px;
      margin-top: -88px;
    }
    @media screen and (max-width: 767px) {
        margin-left: -20px;
        margin-right: -20px;
        grid-area: 7 / 1 / auto / span 2;
        z-index: -1;
        margin-top: auto;
        width: 100%;
    }
  }
  .likeIt {
    font-size: 48px;
    line-height: 1.08;
    grid-column: 1 / span 10;
    letter-spacing: -1.1px;
    font-weight: 500;
    grid-area: 7 / 1 / auto / span 7;
    opacity: 1;
    transition: opacity 0.6s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
    @media screen and (max-width: 767px) {
        display: none;
    }
  }
  .benefits {
    grid-column: 1 / span 12;
    grid-template-columns: repeat(12, 58px);
    gap: 60px 24px;
    display: grid;
    grid-area: 9 / 1 / auto / span 2;
    opacity: 1;
    transition: opacity 0.6s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
    @media screen and (max-width: 900px) {
      grid-column: 1 / span 8;
      grid-template-columns: repeat(8, 56px);
      gap: 60px 24px;
      display: grid;
      grid-area: 9 / 1 / auto / span 2;
      opacity: 1;
      transition: opacity 0.6s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
    } 
    @media screen and (max-width: 767px) {
      display: grid;
      grid-area: 9 / 1 / auto / span 2;
      gap: 45px 16px;
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 441px) {
      padding-right: 100px;
    }
    @media screen and (max-width: 375px) {
      padding-right: 136px;
    }
    @media screen and (max-width: 320px) {
      padding-right: 165px;
    }
  }
  .benefitsHeader {
    font-size: 21px;
    grid-column: 1 / span 2;
    grid-row: 1;
    letter-spacing: -0.1px;
    @media screen and (max-width: 900px) {
      grid-column: 1 / span 2;
      font-size: 16px;
    } 
  }
  .benefitsCard {
    grid-column: 1 / span 3;
    max-width: none;
    grid-row: 2;
    @media screen and (max-width: 900px) {
      grid-column: 1 / span 4;
      max-width: 248px;
    } 
    @media screen and (max-width: 767px) {
      grid-row: 2;
      grid-column: 1;
    }
  }
  .benefitsCard2 {
    grid-column: 5 / span 3;
    max-width: none;
    grid-row: 2;
    @media screen and (max-width: 900px) {
      grid-column: 5 / span 4;
      max-width: 238px;
    } 
    @media screen and (max-width: 767px) {
      grid-row: 2;
      grid-column: 2;
    }
  }
  .benefitsCard3 {
    grid-row: 2;
    grid-column: 9 / span 3;
    max-width: none;
    @media screen and (max-width: 900px) {
      grid-column: 1 / span 4;
      max-width: 216px;
      grid-row: 3;
    } 
    @media screen and (max-width: 767px) {
      grid-row: 3;
      grid-column: 1;
    }
  }
  .benefitsCard4 {
    grid-column: 1 / span 3;
    max-width: none;
    grid-row: 3;
    @media screen and (max-width: 900px) {
      grid-column: 5 / span 4;
      max-width: 238px;
    } 
    @media screen and (max-width: 767px) {
      grid-row: 3;
      grid-column: 2;
    }
  }
  .benefitsCard5 {
    grid-row: 3;
    grid-column: 5 / span 3;
    max-width: none;
    @media screen and (max-width: 900px) {
      grid-column: 1 / span 4;
      max-width: 216px;
      grid-row: 4;
    } 
    @media screen and (max-width: 767px) {
      grid-row: 4;
      grid-column: 1;
    }
  }
  .benefitsCard6 {
    grid-row: 3;
    grid-column: 9 / span 4;
    max-width: 250px;
    @media screen and (max-width: 900px) {
      grid-column: 5 / span 4;
      max-width: 238px;
      grid-row: 4;
    } 
    @media screen and (max-width: 767px) {
      grid-row: 4;
      grid-column: 2;
    }
  }
  .bHeader {
    font-size: 30px;
    line-height: 1.27;
    letter-spacing: -0.4px;
    font-weight: 500;
    @media screen and (max-width: 900px) {
      font-size: 26px;
      line-height: 1.46;
    } 
    @media screen and (max-width: 767px) {
      font-weight: 500;
      font-size: 22px;
      letter-spacing: -0.3px;
      line-height: 1.45;
    }
  }
  .bInfo {
    font-size: 18px;
    line-height: 1.56;
    margin-top: 8px;
    @media screen and (max-width: 900px) {
      font-size: 14px;
      line-height: 1.43;
      margin-top: 4px;
    } 
    @media screen and (max-width: 767px) {
      font-size: 13px;
      line-height: 1.54;
      margin-top: 1px;
    }
  }
  .secondBar {
    margin-left: calc(((100vw - 1300px) - 10px) / -2);
    grid-column: 1 / span 5;
    margin-top: 100px;
    grid-area: 10 / 1 / auto / span 1;
    height: 16px;
    background-color: rgb(255, 252, 17);
    transition: all 0.9s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
  }
  .actionSection {
    transform: translateY(0);
    grid-column-gap: 64px;
    transition: opacity 0.4s ease 0s,transform 0.8s ease 0s;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(12,1fr);
    margin: 0 auto;
    width: 100%;
    padding-bottom: 300px;
    @media screen and (max-width: 800px) {
      grid-column-gap: 16px;
      max-width: 464px;
    }
  }
  .actionInner {
    grid-column: span 12;
  }
  .actionHeader {
    letter-spacing: -4.5px;
    line-height: 80px;
    font-size: 72px;
    text-align: center;
    margin: auto;
    margin-bottom: 8px;
    display: flex;
    font-weight: 600;
    color: #000;
    flex-direction: column;
    @media screen and (max-width: 800px) {
      letter-spacing: -3px;
      line-height: 56px;
      font-size: 48px;
      margin-bottom: 8px;
    }
  }
  .actionText {
    font-size: 22px;
    line-height: 32px;
    letter-spacing: -0.75px;
    color: #002524;
    text-align: center;
    margin: auto;
    width: 577px;
    max-width: 100%;
    margin-bottom: 32px;
    font-weight: 400;
    @media screen and (max-width: 800px) {
      font-size: 18px;
      line-height: 24px;
      letter-spacing: -0.5px;
      padding: 0 32px;
    }
  }
  .actionArea {
    text-align: center;
    margin: auto;
  }
  .actionButton {
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
    background-color: #002524;
    color: #fff;
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
    fill: #fff;
    width: 16px;
    height: 16.8px;
    position: relative;
    top: 2px;
    left: 4px;
  }
`;

export default FeatureSectionWrapper;
