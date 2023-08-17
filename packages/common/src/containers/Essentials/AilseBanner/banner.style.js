import styled from 'styled-components';

const SectionHeader = styled.section`
  width: 100%;
  background-color: #fff;
  background-position: bottom right;
  border-bottom: 1px solid rgba(217, 219, 224, 0.5);
  height: 80px;
`;

const ContainerWrapper = styled.div`
  height: 80px;
  max-width: 1300px;
  margin: auto;
  @media screen and (max-width: 1350px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 800px) {
    padding: 0 15px;
  }
  @media screen and (max-width: 768px) {
    height: 50px;
  }
  .text {
    color: #333;
    padding-bottom: 28px;
    font-size: 16px;
    line-height: 15px;
  }
  .header {
    margin: 0;
    margin-top: 30px;
    color: #202125;
    padding: 0;
    font-size: 32px;
    font-family: BigHearted;
    line-height: 64px;
    text-align: left;
    transition: all 0.2s;
    position: relative;
    @media screen and (max-width: 768px) {
      line-height: normal;
      font-size: 28px;
      letter-spacing: -1.44px;
    }
  }
  .pickupLink {
    text-decoration: underline;
    color: #002524;
    font-weight: 600;
  }
`;

export { ContainerWrapper, SectionHeader };
