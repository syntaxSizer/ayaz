import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  .header-wrapper {
    display: flex;
    flex-direction: column;
    padding: 25px 0;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 0;
    @media screen and (max-width: 1350px) {
      padding: 25px 40px;
      padding-top: 0;
    }
    @media screen and (max-width: 800px) {
      padding: 25px 15px;
      padding-top: 0;
    }
    @media screen and (max-width: 768px) {
      padding: 25px 0;
      padding-top: 0;
    }
    .title {
      font-weight: 600;
      color: #000;
      font-size: 45px;
      margin-bottom: 0px;
      font-family: BigHearted;
      line-height: 0.97;
      @media screen and (max-width: 800px) {
        margin-top: 60px;
      }
      @media screen and (max-width: 768px) {
        line-height: 1.04;
        letter-spacing: -3.1px;
        margin-top: 60px;
      }
      @media screen and (max-width: 768px) {
        letter-spacing: -2.2px;
        font-weight: 600;
        font-size: 32px;
        line-height: 1.13;
        margin-top: 20px;
      }
      @media screen and (max-width: 350px) {
        letter-spacing: -2.2px;
        font-weight: 600;
        line-height: 1.13;
      }
    }
  }
  @media screen and (max-width: 768px) {
    margin: 0;
    padding: 10px 12px 20px 12px;
  }
`;

export default ContainerWrapper;
