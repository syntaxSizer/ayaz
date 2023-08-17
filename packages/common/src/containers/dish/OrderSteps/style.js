import styled from 'styled-components';

const ContainerWrapper = styled.div`
  border-bottom: 20px solid rgba(217, 219, 224, 0.5);
  padding-bottom: 20px;
  padding-top: 10px;
`;

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  max-width: 1300px;
  margin: auto;
  @media screen and (max-width: 1350px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 800px) {
    padding: 0 15px;
  }
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
        margin-bottom: 8px;
        max-width: 200px;
        font-size: 15px;
        color: #8f95a3;
        letter-spacing: 0.14px;
        line-height: 1.44;
        @media screen and (max-width: 800px) {
          max-width: 100%;
        }
      }
    }
  }
`;

export { ContainerWrapper, Wrapper };
