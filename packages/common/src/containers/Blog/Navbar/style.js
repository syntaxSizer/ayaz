import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  max-width: 1300px;
  justify-content: space-between;
  align-items: center;
  margin: 0px auto;
  height: 80px;
  @media screen and (max-width: 1350px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 800px) {
    padding: 0 15px;
  }
  .itemText {
    cursor: pointer;
    text-decoration: none;
    color: #000000;
    padding-left: 32px;
    font-size: 16px;
    font-family: BigHearted;
  }

  .mobileNav {
    min-width: 308px;
    max-width: 308px;
  }

  .reusecore-drawer__handler {
    @media (min-width: 1000px) {
      display: none !important;
    }
  }

  .webNav {
    @media screen and (max-width: 1000px) {
      display: none !important;
    }
  }
  .divider {
    align-self: center;
    margin-right: 28px;
    border-left: 1px solid #e4e6eb;
    height: 40px;
  }
  .searchWrapper {
    display: flex;
    flex-grow: 1;
    .mgIcon {
      margin: 0 15px;
      height: 20px;
    }
    .search {
      border: none;
    }
  }
`;

const Lever = styled.div`
  margin-bottom: 64px;
  border-bottom: 1px solid #d8d8d8;
`;

export { Wrapper, Lever };
