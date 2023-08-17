import styled from 'styled-components';

const Container = styled.div`
  .menuContainer {
    margin-left: auto;
    margin-right: auto;
    padding-left: 25px;
    padding-right: 25px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    max-width: 1300px;
  }
  background: #f7e4ea;
  padding-bottom: 30px;
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
