import styled from 'styled-components';

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1300px !important;
  align-items: center;
  @media (min-width: 768px) {
    max-width: 86rem;
  }
  @media (min-width: 992px) {
    max-width: 86rem;
  }
  @media (min-width: 1200px) {
    max-width: 86rem;
  }
  .getAppLink {
    color: #202125;
    font-size: 14px;
    font-weight: 600;
  }
`;

export { Container };
