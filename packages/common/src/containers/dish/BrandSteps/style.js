import styled from 'styled-components';

const ContainerWrapper = styled.section`
  max-width: 1300px;
  margin: auto;
  @media screen and (max-width: 1350px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 800px) {
    padding: 0 15px;
  }
  padding-bottom: 20px;
  padding-top: 10px;
  .sectionHeader {
    padding-bottom: 20px;
    border-bottom: 2px solid #f0f0f0;
    padding-top: 0;
    margin: 12px;
    font-size: 30px;
    font-weight: 600;
    letter-spacing: -1.16px;
    line-height: normal;
    @media screen and (max-width: 768px) {
      font-size: 20px;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 700px) {
    flex-wrap: wrap;
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .imageWrapper {
      width: 100px;
      height: 100px;
    }
    .textWrapper {
      margin-top: 10px;
      .header {
        margin-left: 0px;
        margin-bottom: 8px;
        font-size: 18px;
        font-weight: 600;
        letter-spacing: -1.16px;
        line-height: normal;
      }
      .description {
        font-size: 15px;
        margin-bottom: 8px;
        line-height: 1.44;
        letter-spacing: -0.7px;
        font-size: 14px;
        color: #636363;
        max-width: 160px;
        @media screen and (max-width: 800px) {
          max-width: 100%;
        }
      }
    }
  }
`;

export { ContainerWrapper, Wrapper };
