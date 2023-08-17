import styled from 'styled-components';

const Wrapper = styled.section`
  height: 308px;
  position: fixed;
  width: 100%;
  background-color: #002524;
  top: 72px;
  @media screen and (max-width: 1350px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 800px) {
    padding: 0 15px;
  }
  .innerSection {
    max-width: 1300px;
    height: 100%;
    width: 100%;
    position: relative;
    margin: auto;
  }
  .infoSection {
    bottom: 87px;
    padding-left: 0px;
    padding-right: 0px;
    top: auto;
    position: absolute;
    width: 100%;
    left: 0px;
    margin: 0px;
  }
  .header {
    margin-bottom: 20px;
    margin: 0.67em 0px;
    margin-top: 6px;
  }
  .headerSpan {
    font-size: 64px;
    line-height: 0.97;
    letter-spacing: -3.5px;
    display: block;
    color: #fff;
    font-weight: 600;
    @media screen and (max-width: 800px) {
      font-size: 56px;
      line-height: 1.04;
      letter-spacing: -3.1px;
    }
    @media screen and (max-width: 768px) {
      letter-spacing: -2.2px;
      font-size: 40px;
      line-height: 1.13;
    }
    @media screen and (max-width: 350px) {
      font-size: 35px;
    }
  }

  .pickupLink {
    text-decoration: none;
    color: #002524;
    font-weight: 600;
  }

  .text {
    color: #fff;
  }

  .breadCrums {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

export default Wrapper;
