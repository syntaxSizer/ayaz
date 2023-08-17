import styled from 'styled-components';

const SectionHeader = styled.section`
  width: 100%;
  background-color: #fff;
  background-position: bottom right;
  position: fixed;
  top: 72px;
`;

const ContainerWrapper = styled.div`
  height: 178px;
  max-width: 1300px;
  margin: auto;
  transform: translateY(0%);
  transition: opacity 300ms ease-in-out 0s, transform 300ms linear 0s;
  @media screen and (max-width: 1350px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 800px) {
    padding: 0 15px;
  }
  @media screen and (max-width: 350px) {
    height: 180px;
  }
  .text {
    color: #2d3138;
    padding-bottom: 28px;
    font-size: 16px;
    line-height: 15px;
    letter-spacing: -0.3px;
    display: block;
    margin-top: 8px;
    @media screen and (max-width: 768px) {
      font-size: 14px;
    }
  }
  .breadCrums {
    margin: 50px 0;
    @media screen and (max-width: 767px) {
      display: none;
    }
  }
  .header {
    margin: 0;
    margin-top: 48px;
    color: #2d3138;
    padding: 0;
    font-size: 42px;
    letter-spacing: -2.4px;
    line-height: 64px;
    text-align: left;
    transition: all 0.2s;
    position: relative;
    @media screen and (max-width: 1060px) {
      font-size: 32px;
      letter-spacing: -2px;
      font-weight: 600;
      line-height: normal;
    }
    @media screen and (max-width: 768px) {
      line-height: normal;
      font-size: 28px;
      padding-bottom: 10px;
      letter-spacing: -1.44px;
    }
  }
  .pickupLink {
    text-decoration: none;
    color: #002524;
    font-weight: 600;
  }
`;

export { ContainerWrapper, SectionHeader };
