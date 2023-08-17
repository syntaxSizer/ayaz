import styled from 'styled-components';

const FeatureSectionWrapper = styled.section`
  max-width: 1300px;
  display: flex;
  background: rgb(246, 246, 248);
  margin: auto;
  flex-direction: column;
  .headerWrapper {
    display: flex;
    padding-bottom: 50px;
    justify-content: space-between;
    .text {
      cursor: pointer;
      font-size: 14px;
      line-height: 24px;
      font-family: BigHearted;
      letter-spacing: 0px;
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
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 63px;
    @media screen and (max-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 32px;
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
    hr {
      margin: 0 0 8px 0;
      border: 0;
      border-top: 1px solid #ffffff;
    }

    a {
      color: #202125;
      display: unset;
    }
    .info {
      overflow: hidden;
      padding: 10px 0 0;
      width: auto;
    }
    .rest-badges {
      display: flex;
      flex-wrap: wrap;
    }
    .restaurant-info__badge {
      max-width: calc(100% - 16px);
      height: 20px;
      margin-top: 8px;
      padding: 2px 4px;
      border-radius: 0px;
      background-color: rgb(242, 242, 245);
      color: rgb(94, 94, 97);
      font-weight: normal;
      font-size: 13px;
      line-height: 1.275;
      white-space: nowrap;
      display: inline-flex;
      align-items: center;
      margin: 8px 8px 0 0;
      margin-right: 0;
      span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .rest-badge__icon {
      width: 14px;
      height: 16px;
      margin-right: 4px;
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
      color: #002524;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 22px;
      display: flex;
      align-items: center;
      letter-spacing: -0.08px;
      font-feature-settings: 'tnum' on, 'lnum' on;
    }
    .header {
      height: 70px;
      margin: 0;
      color: #413746;
      font-size: 18px;
      font-weight: 400;
      padding-top: 12px;
      letter-spacing: -0.03em;
      line-height: 24px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
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
