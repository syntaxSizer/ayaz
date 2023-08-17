import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  .header-wrapper {
    display: flex;
    flex-direction: column;
    padding-bottom: 0px;
  }
  .title {
    font-weight: 600;
    color: #000;
    font-size: 60px;
    padding-top: 32px;
    margin-bottom: 0px;
  }
  @media screen and (max-width: 800px) {
    margin: 0;
    .title {
      font-size: 50px;
      text-align: center;
    }
  }
`;

export default ContainerWrapper;
