import styled from 'styled-components';

const wrapper = styled.div`
  position: relative;
  left: 0;
  width: auto;
  margin: 0;
  padding: 0;
  .blur {
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.5) 100%
    );
    filter: progid:dximagetransform.microsoft.gradient(startColorstr='#00000000', endColorstr='#a6000000', GradientType=0);
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50%;
  }
  .content-container {
    position: relative;
    transition: height 1s cubic-bezier(0.77, 0, 0.175, 1);
  }
  .di {
    max-width: 1300px;
    margin: auto;
    width: 100%;
    @media screen and (max-width: 1350px) {
      padding: 0 40px;
    }
    @media screen and (max-width: 800px) {
      padding: 0 15px;
    }
  }
  .title-container {
    position: absolute;
    bottom: 70px;
    width: 60%;
    @media screen and (max-width: 600px) {
      bottom: 10px;
      width: 100%;
    }
  }
  .breadcrumb {
    margin-bottom: 20px;
    list-style: none;
    border-radius: 12px;
    background-color: rgb(0 0 0 / 30%);
    padding: 1px 20px 2px;
    display: inline-block;
    @media screen and (max-width: 800px) {
      display: none;
    }
    li {
      font-size: 14px;
      display: inline-block;
      letter-spacing: -0.03em;
      a {
        color: #fff;
      }
    }
  }
  .breadcrumb > li + li::before {
    padding: 0 0 0 5px;
    color: #ccc;
    content: '/ ';
  }
  .title {
    margin: 0;
    color: #fff;
    font-size: 54px;
    line-height: 1;
    font-weight: 400;
    letter-spacing: -0.04em;
    @media screen and (max-width: 600px) {
      padding-bottom: 10px;
      font-size: 32px;
    }
  }
  .author-name {
    color: #fff;
    font-size: 24px;
    font-weight: 400;
    letter-spacing: -0.05em;
    line-height: 1.3;
    @media (max-width: 600px) {
      font-size: 13px;
    }
  }
`;

export default wrapper;
