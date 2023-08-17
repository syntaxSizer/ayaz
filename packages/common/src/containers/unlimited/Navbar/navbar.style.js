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
  .menuIcons {
    .reusecore__button {
      .btn-icon {
        color: #202125;
        font-size: 18px;
        width: auto;
        margin: 0;
        @media screen and (max-width: 1100px) {
          color: #002524 !important;
        }
      }
    }
  }
  .hamburgMenu__bar {
    margin-left: 10px;
    span {
      background-color: #000;
      @media screen and (max-width: 1100px) {
        background-color: #002524 !important;
      }
    }
  }
`;

export { Container };
