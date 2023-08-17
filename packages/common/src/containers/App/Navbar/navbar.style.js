import styled from 'styled-components';

const Container = styled.div`
  .logoAndSearchWrapper {
    display: flex;
    align-items: center;
  }
  .mobileMenuItesWrapper {
    display: flex;
    flex-direction: column;
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

  .closeBtn {
    background: #ededee;
    border-radius: 50px;
    padding: 8px;
    cursor: pointer;
  }

  .mobileNav {
    min-width: 308px;
    max-width: 308px;
  }
  .logost {
    @media screen and (max-width: 441px) {
      width: 90px;
    }
  }
  .actionButton {
    border: 0;
    border-radius: 16px;
    color: #fff;
    cursor: pointer;
    margin-inline-start: 16px;
    padding: 2px;
    position: relative;
    background-color: rgb(0 0 0 / 30%);
    display: flex;
    justify-content: center;
    height: 32px;
    padding-left: 16px;
    padding-right: 16px;
  }
  .dIsYZz {
    margin: auto;
    margin-inline-end: 6px;
    margin-inline-start: 8px;
    pointer-events: auto;
    white-space: nowrap;
  }
  .figure {
    width: 28px;
    height: 28px;
    display: inline-block;
    overflow: hidden;
    position: relative;
  }
  .image {
    border-radius: 50%;
    height: 100%;
    user-select: none;
    object-position: center center;
    object-fit: cover;
    width: 100%;
  }
  .name {
    line-height: 28px;
    margin-inline-start: 8px;
    max-width: 110px;
    overflow: hidden;
    pointer-events: none;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: normal;
    text-transform: none;
  }

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
  .additionalItems {
    margin: 0 4px;
    display: flex;
    font-size: 14px;
    .item {
      font-size: 12px;
      color: #202125;
      margin-right: 24px;
      border-bottom: transparent;
      padding-bottom: 6px;
      margin-bottom: -6px;
      padding-right: 0px;
      padding-left: 0px;
      border-radius: 0px;
      .itemText {
        color: #fff;
        margin-bottom: 4px;
        font-weight: 300;
        font-family: BigHearted;
      }
      &:hover {
        border-bottom: 1px solid rgba(45, 49, 56, 0.4);
      }
    }
    .bordered {
      border-bottom: 1px solid rgba(45, 49, 56, 0.4);
    }
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
