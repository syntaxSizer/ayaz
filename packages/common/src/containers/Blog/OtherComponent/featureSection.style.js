import styled from 'styled-components';

const FeatureSectionWrapper = styled.section`
  max-width: 1300px;
  display: flex;
  background: rgb(246, 246, 248);
  flex-direction: column;
  margin: auto;
  .headerWrapper {
    display: flex;
    padding-bottom: 50px;
    justify-content: space-between;
    .text {
      cursor: pointer;
      font-size: 14px;
      font-family: BigHearted;
      letter-spacing: 0px;
      line-height: 24px;
      text-decoration: none;
      color: rgb(151, 156, 166);
    }
  }
  @media screen and (max-width: 1350px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 800px) {
    padding: 0 15px;
    padding-bottom: 60px;
  }
  .topHeader {
    margin-bottom: 20px;
    padding-bottom: 0;
    border-bottom: 1px solid #f0f0f0;
    padding-top: 0;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    span {
      text-transform: capitalize;
    }
  }
  @media screen and (max-width: 990px) {
    padding-top: 0;
  }
  .cards {
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 63px;
    @media screen and (max-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 32px;
      max-width: 624px;
    }
    @media screen and (max-width: 768px) {
      display: grid;
      grid-template-columns: 1fr;
    }
  }
  .cardWrapper {
    :nth-of-type(n + 1):nth-of-type(-n + 4) {
      display: block;
      grid-column: span 1 / auto;
      @media screen and (max-width: 768px) {
        display: none;
      }
    }
    @media screen and (max-width: 768px) {
      :nth-of-type(n + 1):nth-of-type(-n + 2) {
        display: block;
      }
      grid-column: span 1 / auto;
    }
    @media screen and (max-width: 768px) {
      :nth-of-type(n + 2):nth-of-type(-n + 3) {
        display: none;
      }
    }

    a {
      color: #202125;
      display: unset;
    }
    .text {
      color: #002524;
      margin-top: 0px;
      margin-bottom: 12px;
      font-size: 18px;
      line-height: 25px;
      letter-spacing: 0px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }
    .time {
      margin: 0;
      color: #90a2aa;
      font-style: normal;
      font-weight: normal;
      font-size: 13px;
      line-height: 22px;
      letter-spacing: 0.2px;
      text-transform: uppercase;
      font-feature-settings: 'tnum' on, 'lnum' on;
    }
    .header {
      margin-top: 20px;
      margin-bottom: 8px;
      font-size: 24px;
      line-height: 32px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      letter-spacing: -1px;
    }
  }
`;

export const BackgroundWrapper = styled.div`
  background: ${props => props.bg || 'initial'};
  padding: 64px 20px;
  @media screen and (max-width: 768px) {
    padding: 64px 8px;
  }
`;

export default FeatureSectionWrapper;
