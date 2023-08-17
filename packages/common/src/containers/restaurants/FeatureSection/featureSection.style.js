import styled from 'styled-components';
const BackgroundWrapper = styled.div`
  background: ${props => props.bg || 'initial'};
`;

const FeatureSectionWrapper = styled.section`
  max-width: 1300px;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  z-index: 98;
  @media screen and (max-width: 1350px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 800px) {
    padding: 0 15px;
  }

  .breadCrums {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .menuWrapper {
    display: flex;
    flex-direction: column;
    .sectionId {
      margin-top: 0px;
      margin-bottom: 0px;
      padding-bottom: 16px;
      font-size: 21px;
      letter-spacing: -0.88px;
      font-weight: 600;
      line-height: normal;
      border-bottom: 1px solid rgba(217, 219, 224, 0.5);
      padding-top: 32px;
      @media screen and (max-width: 1000px) {
        margin-top: 0px;
        margin-bottom: 0px;
        font-size: 18px;
        letter-spacing: -0.64px;
        font-weight: 600;
        line-height: normal;
        padding-top: 16px;
        padding-bottom: 16px;
        border: none;
      }
    }

    .menu {
      padding-top: 16px;
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      -webkit-box-pack: justify;
      justify-content: space-between;
      .menuCard {
        cursor: pointer;
        display: flex;
        box-sizing: content-box;
        flex-direction: row;
        width: calc(50% - 17.5px);
        margin: 16px 0px;
        padding: 0px;
        border: 1px solid rgba(217, 219, 224, 0.5);
        height: 128px;
        :hover {
          background-color: rgb(247, 247, 248);
        }

        .textContent {
          display: flex;
          flex-direction: column;
          flex: 1 1 0%;
          min-width: 0px;
          -webkit-box-pack: justify;
          justify-content: space-between;
          padding: 20px 20px 15px;
          @media screen and (max-width: 1000px) {
            padding: 9px 0;
          }
        }
        @media screen and (max-width: 1000px) {
          width: 100%;
          border: none;
          border-top: 1px solid rgba(217, 219, 224, 0.5);
          position: relative;
          padding: 16px 0px;
          flex-direction: row;
          margin: auto;
          :hover {
            background-color: #fff;
          }
        }

        .header {
          font-size: 16px;
          letter-spacing: -0.28px;
          font-weight: 500;
          line-height: normal;
          display: block;
          overflow: hidden;
          color: rgb(45, 49, 56);
          margin: 0px 0px 5px;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .description {
          display: -webkit-box;
          overflow: hidden;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          font-size: 14px;
          letter-spacing: 0.14px;
          font-weight: 400;
          line-height: 1.43;
          color: rgba(143, 149, 163, 0.9);
          margin-bottom: 5px;
        }

        .price {
          letter-spacing: -0.16px;
          font-weight: 500;
          line-height: normal;
          color: #002524;
          font-size: 13px;
          text-decoration: none;
        }
      }
    }
  }
`;

export { BackgroundWrapper, FeatureSectionWrapper };
