import styled, { css } from 'styled-components';

const ContainerWrapper = styled.div`
  width: 100%;
  margin: auto;
  max-width: 1300px;
  flex-wrap: wrap;
  @media screen and (max-width: 1350px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 800px) {
    padding: 0 15px;
  }
`;

export default ContainerWrapper;
