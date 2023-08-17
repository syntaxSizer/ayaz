import styled from 'styled-components';
import Mail from '../../../assets/image/app/mail.svg';

export const DiscountWrapper = styled.div`
  text-align: left;
  @media screen and (max-width: 768px) {
    padding-top: 2px;
  }
`;
export const ButtonWrapper = styled.div`
  position: relative;
  @media screen and (max-width: 991px) and (min-width: 767px) {
    display: block;
    .reusecore__button {
      padding-left: 0;
      padding-right: 0;
      &.withoutBg {
        margin-left: 25px;
        &:hover {
          box-shadow: none !important;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 40px;
  }


  @media screen and (max-width: 480px) {
    display: block;
    flex-direction: column;
    .reusecore__button {
      display: inline-block;
      &.withoutBg {
        border: 0;
      }
    }
  }
`;

export const EmailInputWrapper = styled.div`
  position: relative;
  width: 85%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }

  &::before {
    content: url(${Mail});
    display: block;
    position: relative;
    width: 22px;
    left: 22px;
    top: 46px;
    z-index: 9;
  }
  input {
    border-radius: 5px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 7px 25px 0px rgba(22, 53, 76, 0.08) !important;
    border: 0 !important;
    margin-bottom: 30px;
    height: 60px;
    padding-left: 60px !important;
    color: #343d48;
    opacity: 1;
    font-weight: 500;
    @media screen and (max-width: 768px) {
    }
    &:focus {
      border: 0;
      box-shadow: 0px 7px 25px 0px rgba(22, 53, 76, 0.08);
    }

    &:placeholder {
      font-size: 16px;
      color: #343d48;
      opacity: 1;
    }
  }
  .input-icon {
    left: 10px !important;
    right: auto;
    top: 7px !important;
    height: 46px !important;
    svg {
      color: #ececec;
      width: 24px;
      height: 30px;
    }
  }
`;

export const DiscountLabel = styled.div`
  font-family: Ayazona,'Helvetica Neue', Helvetica;
  display: inline-block;
  border-radius: 4em;
  padding: 10px 24px 0 6px;
  box-shadow: 0px 7px 25px 0px rgba(22, 53, 76, 0.05);
  margin-bottom: 30px;
  background-color: #fff;
  height: 45px;
  @media screen and (max-width: 990px) {
    margin-top: 50px;
  }
  @media screen and (max-width: 420px) {
    padding: 10px;
  }
  span {
    @media screen and (max-width: 420px) {
      font-size: 12px;
    }
  }
  .discountAmount {
    padding: 9px 21px;
    border-radius: 28px;
    text-transform: uppercase;
    @media screen and (max-width: 420px) {
      padding: 8px 16px;
      font-size: 10px;
    }
  }
`;
