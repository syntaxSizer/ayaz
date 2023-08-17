import styled from 'styled-components';

const FeatureSectionWrapper = styled.section`
  max-width: 1300px;
  background: #fff;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  row-gap: 72px;
  margin: 50px auto 96px auto;
  column-gap: 32px;
  display: grid;
  @media screen and (max-width: 1350px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 800px) {
    padding: 0 15px;
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 32px;
    margin: 38px auto 88px auto;
  }
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 64px;
    margin: 36px auto 72px auto;
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
  }
  .cardWrapper {
    hr {
      margin: 0 0 8px 0;
      border: 0;
      border-top: 1px solid #f2f2f5;
    }
    grid-column: span 2;
    @media screen and (max-width: 1000px) {
      grid-column: unset;
    }
    transition: all 0.25s;
    cursor: pointer;

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

    .date {
      font-size: 14px;
      margin: 0;
      color: #002524;
      font-style: normal;
      font-weight: normal;
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

export default FeatureSectionWrapper;
