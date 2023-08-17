import styled from 'styled-components';

const FeatureSectionWrapper = styled.section`
  display: block;
  justify-content: space-between;
  margin: 50px auto 123px auto;
  max-width: 784px;
  width: 100%;
  @media screen and (max-width: 800px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 785px) {
    margin: 0px auto 112px auto;
    max-width: 624px;
    padding: 0 15px;
  }
  @media screen and (max-width: 768px) {
    margin: 50px auto 96px auto;
  }
  .postImg {
    margin: 0px auto 56px auto;
    max-width: 784px;
    display: block;
    height: auto;
    width: 100%;
    @media screen and (max-width: 785px) {
      max-width: 624px;
    }
  }
  .date {
    margin: 0px;
    color: #90a2aa;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0.2px;
    text-transform: uppercase;
    margin-bottom: 30px;
  }
  .postTitle {
    font-size: 48px;
    line-height: 56px;
    margin-bottom: 10px;
    font-style: normal;
    letter-spacing: -0.025em;
    font-weight: bold;
    margin-top: 8px;
    color: #000;
    padding-bottom: 15px;
    border-bottom: 1px solid #e4eaed;
    @media screen and (max-width: 768px) {
      font-size: 36px;
      line-height: 40px;
    }
  }
  p {
    font-size: 22px;
    line-height: 32px;
    letter-spacing: -0.75px;
    color: #2f3137;
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
    position: relative;
    display: block;
    width: 100%;
    margin: 2em 0;
    padding: 0;
    height: 1px;
    border: 0;
    border-top: 1px solid #e4eaed;
  }
  a:active,
  a:focus,
  a:hover {
    color: #000;
    text-decoration: underline;
  }
  ul {
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 30px;
    padding: revert;
    li {
      display: list-item;
      list-style-type: disc;
      text-align: -webkit-match-parent;
    }
  }
  ol {
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 30px;
    li {
      list-style-type: decimal;
      display: list-item;
      text-align: -webkit-match-parent;
    }
  }
  blockquote {
    margin: 0 0 1.5em;
    padding: 0 1.5em;
    border-left: 3px solid #3eb0ef;
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
`;

export default FeatureSectionWrapper;
