import styled from 'styled-components';

const FeatureSectionWrapper = styled.section`
  padding: 80px 0 100px;
  background: rgb(247, 248, 250);
  @media screen and (max-width: 1440px) {
    padding: 40px 0 50px;
  }
  @media screen and (max-width: 768px) {
    padding: 40px 0 0px;
  }
  @media screen and (max-width: 500px) {
    padding: 30px 0;
  }

  .feature__block {
    position: relative;
    height: 100%;
    background: rgb(247, 248, 250);
    margin-right: 8px;
    @media screen and (max-width: 768px) {
      border-bottom: 15px solid #fff;
    }
    transition: box-shadow 0.3s ease;
    .icon__wrapper {
      position: relative;
      background: transperent;
      .flaticon-flask {
        &:before {
          margin-left: 8px;
        }
      }

      &:before {
        transform: rotate(45deg);
        background-color: rgba(255, 255, 255, 0.15);
      }
      &:after {
        transform: rotate(-45deg);
        background-color: rgba(0, 0, 0, 0.05);
      }
    }
    &:hover {
      cursor: pointer;
    }
  }

  .row {
    > .col {
      &:nth-child(1) {
        .feature__block {
          .icon__wrapper {
            color: #febf02;
            font-weight: 900;
            transition: all 0.6s ease;
          }
        }
        &:hover {
          .feature__block {
            .icon__wrapper {
              background: #febf02;
              color: #fff;
              border: 0;
            }
          }
        }
      }
      &:nth-child(2) {
        .feature__block {
          .icon__wrapper {
            color: #9c00fe;
            font-weight: 900;
            transition: all 0.6s ease;
          }
        }
        &:hover {
          .feature__block {
            .icon__wrapper {
              background: #9c00fe;
              color: #fff;
              border: 0;
            }
          }
        }
      }
      &:nth-child(3) {
        .feature__block {
          .icon__wrapper {
            color: #fe5dbd;
            font-weight: 900;
            transition: all 0.6s ease;
          }
        }
      }
      &:hover {
        .feature__block {
          .icon__wrapper {
            background: #fe5dbd;
            color: #fff;
          }
        }
      }
    }
  }
`;

export default FeatureSectionWrapper;
