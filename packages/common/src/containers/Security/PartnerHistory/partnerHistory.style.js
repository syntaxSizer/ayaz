import styled from 'styled-components';

const PartnerHistoryWrapper = styled.section`
  padding: 20px 0 16px;
  position: relative;
  background: #fff;
  overflow: hidden;
  .downloader {
    text-align: center;
  }
  .dimg {
    display: inline-block;
  }
  @media screen and (max-width: 1440px) {
    padding: 20px 0 10px;
  }
  @media screen and (max-width: 1100px) and (min-width: 992px) {
    padding: 80px 0 60px;
  }
  @media screen and (max-width: 990px) {
    padding: 20px 0 120px;
  }
  @media screen and (max-width: 480px) {
    padding: 0px 0 60px;
  }
  .feature__block {
    padding-right: 90px;
    @media screen and (max-width: 990px) {
      padding-right: 0px;
    }
    .reusecore__button {
      transition: all 0.3s ease;
    }
  }
  .backgroungImg {
    position: absolute;
    top: 80px;
    right: 40px;
    z-index: -1;
    pointer-events: none;
    @media screen and (max-width: 1600px) {
      right: -220px;
      top: 80px;
    }
  }
`;

const CounterUpArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 20px;
  .one {
    background: #513389;
    color: #fff;
  }
  .two {
    background: #42de7c;
  }
  .three {
    background: #a90c77;
  }
  .four {
    background: #ffd700;
  }
  @media screen and (max-width: 990px) {
    margin-top: 50px;
    padding-left: 0;
    margin-left: -25px;
  }
  @media screen and (max-width: 400px) {
    margin-left: 0px;
  }
  .card {
    width: 50%;
    margin: 0;
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    transition: box-shadow 0.3s ease-in-out;
    z-index: 1;
    cursor: pointer;
    min-height: 20.8125rem;
    padding: 32px 32px;
    transition: all .8s ease;
    clip-path: polygon(0% 0%,100% 0,100% 50%,100% 100%,0% 100%);
    border-radius: 0px;
    box-shadow: none;
    @media screen and (max-width: 990px) {
      width: 100%;
    }
    @media screen and (max-width: 480px) {
      padding: 20px;
      min-height: 15rem;
    }
    @media screen and (max-width: 360px) {
      margin-left: 0;
    }

    &:hover {
      -webkit-transform:scale(1.15);
      -ms-transform:scale(1.15);
      transform:scale(1.15);
      -webkit-transition:all .3s ease;
      -o-transition:all .3s ease;
      transition:all .3s ease;
      z-index:2;
      cursor:pointer
    }

    img {
      height: 100px;
      @media screen and (max-width: 1440px) {
        height: 80px;
      }
      @media screen and (max-width: 990px) {
        height: 50px;
      }
    }

    p {
      color: #202125;
      font-size: 2.0625rem;
      line-height: 100%;
      position: relative;
      transition: transform .1s ease,-webkit-transform .1s ease;
      max-width: 11.875rem;
      font-weight: 800;
      transform-origin: top left;
      display: inline-block;
      &.text-title {
        color: #fff;
      }
      &::after {
        width: 100%;
        position: absolute;
        display: block;
        content: " ";
        bottom: -5px;
        left: 0;
        height: 4px;
        border-bottom: solid 4px #fff;
        transition: all .3s ease;
      }
      @media screen and (max-width: 767px) {
        display: block;
      }
      @media screen and (max-width: 460px) {
        font-size: 1.5rem;
        margin-top: 5px;
      }
    }

    &:nth-child(even) {
      position: relative;
      top: 22px;
      @media screen and (max-width: 400px) {
        top: 0px;
      }
    }
  }
`;

export { CounterUpArea };
export default PartnerHistoryWrapper;
