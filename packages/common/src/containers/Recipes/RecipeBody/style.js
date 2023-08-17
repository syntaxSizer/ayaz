import styled from 'styled-components';
import time from '../../../assets/image/recipes/timer-42x50.png';
import difficult from '../../../assets/image/recipes/cheflett-52x50.png';

const FeatureSectionWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 20px auto 123px auto;
  max-width: 1300px;
  width: 100%;
  flex-direction: row;
  align-items: stretch;
  flex: 1;
  @media screen and (max-width: 1350px) {
    margin: 20px auto 112px auto;
    padding: 20px 40px;
  }
  @media screen and (max-width: 800px) {
    padding: 20px 15px;
  }
  .content {
    width: 60%;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
  .postImg {
    margin: 0px auto 56px auto;
    max-width: 784px;
    display: block;
    height: auto;
    width: 100%;
  }
  .date {
    margin: 0px;
    color: rgb(47, 49, 55);
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 20px;
  }
  .postTitle {
    font-size: 48px;
    line-height: 56px;
    margin-bottom: 40px;
    font-style: normal;
    font-weight: bold;
    margin-top: 0px;
    color: #000;
    @media screen and (max-width: 768px) {
      font-size: 36px;
      line-height: 40px;
    }
  }
  p {
    letter-spacing: -0.75px;
    color: #413746;
    font-size: 18px;
    font-weight: normal;
    line-height: 1.6;
    margin-bottom: 30px;
    @media screen and (max-width: 768px) {
      font-size: 18px;
      line-height: 28px;
    }
    a {
      color: rgb(47, 49, 55);
      text-decoration: underline;
    }
  }
  h2 {
    font-size: 35px;
    line-height: 32px;
    letter-spacing: -0.75px;
    color: #000;
    @media screen and (max-width: 768px) {
      margin-top: 0px;
      margin-bottom: 12px;
      font-size: 20px;
      line-height: 25px;
    }
  }
  h3 {
    font-size: 30px;
    line-height: 32px;
    letter-spacing: -0.75px;
    color: #000;
    @media screen and (max-width: 768px) {
      margin-top: 0px;
      margin-bottom: 12px;
      font-size: 18px;
      line-height: 25px;
    }
  }
  .kg-image-card {
    margin-top: 50px;
    margin-bottom: 70px;
    img {
      height: auto;
      width: 100%;
    }
  }
  .kg-card-hascaption {
    margin: 0 !important;
  }
  a.kg-bookmark-container {
    display: flex;
    overflow: hidden;
    min-height: 140px;
    padding-bottom: 0;
    transition: transform 0.2s ease-in-out;
    text-decoration: none;
    border: 0;
    border-radius: 12px;
    background-color: #f7f8f9;
    box-shadow: none;
    :hover {
      text-decoration: none;
    }
  }
  .kg-bookmark-content {
    display: flex;
    flex-direction: column;
    padding: 20px;
    flex-grow: 1;
    align-items: flex-start;
    justify-content: start;
  }
  .kg-bookmark-title {
    font-size: 17px;
    line-height: 1.3;
    font-weight: 600;
    transition: color 0.26s ease-in-out;
  }
  .kg-bookmark-description {
    font-size: 14px;
    line-height: 1.3;
    display: -webkit-box;
    overflow-y: hidden;
    max-height: 40px;
    margin-top: 12px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: #687385;
    font-weight: 300;
  }
  .kg-bookmark-metadata {
    display: none;
  }
  .kg-bookmark-thumbnail {
    position: relative;
    min-width: 33%;
    max-height: 100%;
  }
  .kg-bookmark-thumbnail img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  figure {
    margin: auto;
  }
  .kg-gallery-container {
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
  }
  .kg-gallery-row {
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    justify-content: center;
  }
  .kg-gallery-image {
    flex: 0.75 1 0%;
    :not(:first-of-type) {
      margin-left: 24px;
    }
  }
  .kg-gallery-image img {
    width: 100%;
    height: 100%;
  }
  hr {
    min-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    bottom: 4px;
    margin-bottom: 0;
    margin-top: 32px;
    border: none;
  }
  hr:before {
    content: '. . .';
  }
  a:active,
  a:focus,
  a:hover {
    color: #000;
    text-decoration: underline;
  }
  ul {
    line-height: 28px;
    margin-bottom: 30px;
    padding: revert;
    font-size: 16px;
    li {
      display: list-item;
      list-style-type: square;
      text-align: -webkit-match-parent;
      @media screen and (max-width: 667px) {
        font-size: 15px;
      }
    }
  }
  ol {
    line-height: 28px;
    margin-bottom: 30px;
    font-size: 16px;
    li {
      list-style-type: square;
      display: list-item;
      text-align: -webkit-match-parent;
      @media screen and (max-width: 667px) {
        font-size: 15px;
      }
    }
  }
  blockquote {
    position: relative;
    color: #2c4bff;
    font-size: 28px;
    font-weight: 600;
    line-height: 1.4;
    letter-spacing: 0.2px;
    text-align: center;
    @media screen and (max-width: 768px) {
      font-size: 20px;
    }
    ::before {
      font-size: 150px;
      line-height: 1;
      position: absolute;
      top: -15px;
      left: -65px;
      content: '"';
      @media screen and (max-width: 768px) {
        font-size: 98px;
        top: -5px;
        left: -45px;
      }
    }
  }
  em {
    font-style: normal;
  }
  figcaption {
    padding: 5px 5px 0;
    text-align: center;
    color: rgba(0, 0, 0, 0.5);
    font-size: 12px;
    line-height: 1.4;
  }
  .purchase {
    display: block;
    z-index: 20;
    margin-top: -215px;
    animation-name: fadeInUp;
    animation-duration: 1s;
    animation-fill-mode: both;
    width: 33.33333%;
    background: rgb(11, 5, 123, 0.2);
    @media screen and (max-width: 1350px) {
      margin-top: -235px;
    }
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  .top {
    min-height: 55px;
    border-bottom: 1px solid #e9e9e9;
    height: 95px;
    padding: 14px 20px;
    background: rgb(11, 5, 123, 0.7);
    flex-direction: row;
    align-items: stretch;
    flex: 1;
    display: flex;
  }
  .price {
    display: inline;
    color: #fff;
    font-size: 40px;
    font-weight: 700;
    line-height: 0.8;
    margin-right: 28px;
    @media screen and (max-width: 1350px) {
      margin-right: 15px;
    }
    @media screen and (max-width: 1000px) {
      margin-right: 5px;
    }
  }
  .currency {
    font-size: 30px;
    @media screen and (max-width: 900px) {
      font-size: 20px;
    }
  }
  .price-per-portion {
    font-size: 36px;
    @media screen and (max-width: 900px) {
      font-size: 36px;
    }
  }
  .price-info {
    position: relative;
    top: -12px;
    font-size: 14px;
    font-weight: 500;
  }
  .decimals {
    padding-left: 2px;
    font-size: 40%;
    vertical-align: top;
  }
  .actions {
    width: 55%;
  }
  .btn-brand {
    color: rgb(11, 5, 123);
    background-color: #fff;
    border-color: #fff;
    box-shadow: 0 1px 2px rgb(50 50 50 / 10%);
    transition: all 0.05s ease;
    border-radius: 3px;
    padding: 10px 16px;
    line-height: 1.33333;
    font-size: 10px;
    font-weight: 600;
    width: 100%;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    display: inline-block;
    margin-bottom: 0;
    user-select: none;
  }
`;

const Summary = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1300px;
  padding-top: 20px;
  border-bottom: 1px solid #e9e9e9;
  @media screen and (max-width: 1350px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 800px) {
    padding: 10px 15px;
  }
  .summary {
    padding-bottom: 20px;
    padding-top: 20px;
    @media screen and (max-width: 667px) {
      padding-bottom: 0;
      padding-top: 10px;
    }
    min-height: 55px;
    :after {
      display: table;
      content: ' ';
    }
  }
  .cooking-duration {
    padding-top: 12px;
    text-indent: 60px;
    background-position-y: 4px;
    height: 60px;
    min-height: 0;
    margin-right: 30px;
    float: left;
    font-size: 16px;
    font-weight: 500;
    background-image: url(${time});
    background-repeat: no-repeat;
    @media screen and (max-width: 667px) {
      background-size: 21px 25px;
      height: 30px;
      text-indent: 30px;
      margin-right: 15px;
      padding-top: 0;
    }
  }
  .sub-text {
    color: #999;
    font-size: 11px;
    font-weight: 100;
  }
  .difficulty {
    text-indent: 60px;
    height: 60px;
    min-height: 0;
    margin-right: 30px;
    padding-top: 20px;
    float: left;
    font-size: 16px;
    font-weight: 500;
    background-image: url(${difficult});
    background-repeat: no-repeat;
    @media screen and (max-width: 667px) {
      background-size: 26px 25px;
      height: 30px;
      text-indent: 30px;
      margin-right: 15px;
      padding-top: 7px;
      font-size: 13px;
    }
  }
  .likes {
    padding-left: 25px;
    border-left: 1px solid #e9e9e9;
    height: 60px;
    min-height: 0;
    margin-right: 30px;
    padding-top: 20px;
    float: left;
    font-size: 16px;
    font-weight: 500;
    @media screen and (max-width: 667px) {
      font-size: 13px;
      margin-right: 10px;
      height: 30px;
      padding-top: 10px;
    }
  }
  .glyphicon {
    position: relative;
    top: 1px;
    display: inline-block;
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .like-count {
    padding-right: 8px;
  }
`;

export { FeatureSectionWrapper, Summary };
