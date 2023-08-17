import styled from 'styled-components';

const wrapper = styled.div`
  background-size: cover;
  min-height: 350px;
  background-color: blue;
  padding-bottom: 20px;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
  left: 0;
  width: auto;
  margin: 0;
  padding: 0;
  display: flex;

  .gradient {
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.3) 100%
    );
    filter: progid:dximagetransform.microsoft.gradient(startColorstr='#00000000', endColorstr='#a6000000', GradientType=0);
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 70%;
  }
  .content-container {
    position: relative;
    padding-top: 30px;
    padding-bottom: 15px;
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    @media screen and (max-width: 1350px) {
      padding-left: 30px;
      padding-right: 30px;
    }
    @media screen and (max-width: 800px) {
      padding-left: 15px;
      padding-right: 15px;
    }
    @media (max-width: 767px) {
      padding-top: 15px;
    }
  }
  .inner {
    position: relative;
    padding-top: 25px;
    padding-bottom: 25px;
  }
  .breadcrumb {
    padding: 8px 0;
    margin-bottom: 20px;
    list-style: none;
    background-color: rgba(0, 0, 0, 0);
    border-radius: 4px;
    margin-bottom: 0;
    li {
      font-size: 14px;
      display: inline-block;
      a {
        color: #fff;
      }
    }
  }
  .stitle {
    color: #fff;
    font-size: 56px;
    margin: 25px 0;
    font-weight: 400;
    letter-spacing: -0.04em;
    margin-top: 0;
    @media (max-width: 767px) {
      font-size: 42px;
    }
  }
  .form-group {
    margin-bottom: 15px;
  }
  .recipe {
    box-sizing: border-box;
    height: 63px;
    padding: 10px 10px 10px 25px;
    font-size: 16px;
    -webkit-box-shadow: 0 15px 100px rgb(0 0 0 / 40%);
    -moz-box-shadow: 0 15px 100px rgba(0, 0, 0, 0.4);
    box-shadow: 0 15px 100px rgb(0 0 0 / 40%);
    display: block;
    width: 100%;
    appearance: none;
    line-height: 1.42857;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ddd;
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    border-radius: 3px;
    text-indent: 10px;
    @media (max-width: 767px) {
      padding: 10px;
    }
  }
  .btn-search {
    position: absolute;
    right: 20px;
    height: 55px;
    margin-top: -72px;
    margin-left: -4px;
    padding: 0 15px;
    border: 0;
    background: #fff;
  }
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
  .glyphicon {
    position: relative;
    top: 1px;
    display: inline-block;
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
  }
  .nav {
    margin-top: 30px;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    li {
      position: relative;
      display: block;
    }
    :before,
    :after {
      display: table;
      content: ' ';
    }
  }
  .nav > li > a {
    position: relative;
    display: block;
    padding: 10px 15px;
  }
  .nav-pills li a {
    margin-bottom: 5px;
    border: 0;
    background-color: rgba(255, 255, 255, 0.8);
    transition: background 0.2s ease-in-out;
    cursor: pointer;
    @media (max-width: 767px) {
      padding: 5px 10px;
    }
    :hover {
      background-color: #fff;
    }
  }
  .nav-pills > li {
    float: left;
  }
  .nav-pills > li > a {
    margin-right: 3px;
    color: #413746;
    font-size: 14px;
    border-radius: 50px;
  }
  .nav-pills > li + li {
    margin-left: 2px;
  }
`;

export default wrapper;
