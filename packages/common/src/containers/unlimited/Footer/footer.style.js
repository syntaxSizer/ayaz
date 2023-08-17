import styled from 'styled-components';

const FooterWrapper = styled.section`
  padding: 86px 0 100px;
  background: #000000;
  .rowOne {
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 24px;
    padding-bottom: 48px;
    margin-bottom: 45px;
    display: grid;
    border-bottom: 1px solid rgba(151, 151, 151, 0.21);
    width: 100%;
    @media screen and (max-width: 1060px) {
      grid-template-columns: repeat(8, 1fr);
      margin-bottom: 45px;
    }
    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  .logo {
    grid-column: span 2 !important;
    @media screen and (max-width: 768px) {
      display: inline-flex;
      flex-direction: column;
      grid-column: span 2 !important;
      margin-bottom: 36px;
    }
  }
  .privacy {
    grid-column: span 12;
    text-align: right;
    padding-bottom: 0;
    @media screen and (max-width: 1060px) {
      grid-column: span 8;
      text-align: right;
      padding-bottom: 0;
    }
    @media screen and (max-width: 768px) {
      grid-column: span 2;
      text-align: left;
      padding-top: 20px;
    }
  }
  .lynk {
    font-weight: 400;
    font-size: 13px;
    color: #fff;
    line-height: 20px;
    letter-spacing: -0.08px;
  }
  .social {
    grid-column: span 1 !important;
    @media screen and (max-width: 1060px) {
      grid-column: span 2 !important;
      grid-column-start: 3 !important;
    }
    @media screen and (max-width: 768px) {
      grid-column: span 1 !important;
      grid-column-start: unset !important;
    }
  }
  .column {
    grid-column: span 3;
    display: inline-flex;
    flex-direction: column;
    @media screen and (max-width: 1060px) {
      grid-column: span 2;
    }
    @media screen and (max-width: 768px) {
      grid-column: span 1;
    }
  }

  @media screen and (max-width: 480px) {
    padding: 60px 0 30px;
  }
  .aboutHeader {
    font-size: 15px;
    margin-bottom: 0;
    line-height: 32px;
    font-family: BigHearted;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 500;
  }
  .aboutDescription {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.4);
    letter-spacing: 0;
    font-weight: 400;
    line-height: 22px;
    margin: 0 0 28px;
    width: 100%;
    font-family: Ayazona, 'Helvetica Neue', Helvetica;
  }
  .read-more-link {
    font-weight: 500;
    color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
    text-decoration: none;
    margin: 0 12px;
    cursor: pointer;
    font-family: Ayazona, 'Helvetica Neue', Helvetica;
  }
  .copyrightClass {
    font-family: Ayazona, 'Helvetica Neue', Helvetica;
    @media screen and (max-width: 1300px) {
      display: flex;
      flex-direction: column;
    }
    .copyrightMenu {
      @media screen and (max-width: 1300px) {
        margin-top: 10px;
        margin-bottom: 10px;
        justify-content: left;
        align-items: left;
        margin-left: 0;
      }
      @media screen and (max-width: 767px) {
        justify-content: left;
        align-items: left;
        margin-left: 0;
        margin-top: 10px;
        margin-bottom: 10px;
      }
    }
    .copyrightText {
      @media screen and (max-width: 1100px) {
        margin-left: 0;
      }
    }
  }
`;

const List = styled.ul`
  margin-bottom: 26px;
`;

const ListItem = styled.li`
  a {
    font-size: 14px;
    line-height: normal;
    padding: 17px 0 0 0;
    display: block;
    letter-spacing: 0.14px;
    transition: all 0.2s ease;
    font-family: Ayazona, 'Helvetica Neue', Helvetica;
    color: #8f95a3;
    text-decoration: none;
    &:hover,
    &:focus {
      outline: 0;
      text-decoration: none;
      color: #ccc;
    }
    @media screen and (max-width: 768px) {
      line-height: 24px;
      padding: 18px 0 0;
    }
    @media screen and (max-width: 350px) {
      font-size: 12px;
    }
    @media screen and (max-width: 280px) {
      font-size: 10px;
    }
  }
`;

const HeaderSection = styled.div`
  width: 100%;
  .subheader {
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    margin: 0 0 5px;
    margin-bottom: 0;
    font-size: 12px;
    font-weight: 600;
  }
`;

const TermsSection = styled.div`
  display: inline-flex;
  flex-wrap: nowrap;
  align-items: center;
  text-decoration: none;
  vertical-align: middle;
  height: 15px;
  margin-top: 2px;
  margin-right: 20px;
`;

export { List, ListItem, HeaderSection, TermsSection };

export default FooterWrapper;
