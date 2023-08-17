import styled from 'styled-components';

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1300px;
  align-items: center;
  backgrounf: #fff;
  @media screen and (max-width: 1350px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 800px) {
    padding: 0 15px;
  }
  @media (min-width: 768px) {
    max-width: 86rem;
  }
  @media (min-width: 992px) {
    max-width: 86rem;
  }
  @media (min-width: 1200px) {
    max-width: 86rem;
  }
  .cuisineNav {
    background-color: #fff !important;
    border-bottom: 1px solid rgba(217, 219, 224, 0.5);
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
