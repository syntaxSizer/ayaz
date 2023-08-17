import styled from 'styled-components';

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  max-width: 1300px;
  @media screen and (max-width: 1350px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 800px) {
    padding: 0 15px;
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
