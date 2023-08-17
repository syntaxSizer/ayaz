import styled from 'styled-components';

const FeatureSectionWrapper = styled.section`
  max-width: 1300px;
  margin: auto;
  padding: 0 0 100px;
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 800px) {
    padding: 30px 0px 100px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  p {
    color: #778899;
    a {
      border-bottom: 4px solid rgb(255, 253, 60);
      color: inherit;
      text-decoration: none;
    }
  }
  .title {
    font-family: Ayazona, 'Helvetica Neue', Helvetica;
    font-size: 96px;
    letter-spacing: -5.2px;
    font-weight: 500;
    line-height: 0.94;
    padding-top: 3px;
    margin-bottom: 20px;
    margin-top: 40px;
    margin: 0.67em 0px;
    @media screen and (max-width: 1059px) {
      margin-top: 0px;
    }
    @media screen and (max-width: 767px) {
      font-size: 60px;
      letter-spacing: -3.3px;
      font-weight: 500;
      line-height: 1;
      margin-bottom: 32px;
    }
  }
  .address {
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 767px) {
      flex-direction: column;
    }
  }
  .header {
    font-weight: 600;
    color: rgb(45, 49, 56);
  }
  .subheader {
    font-weight: 400;
  }
  .content {
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;
    text-align: left;
    margin-right: 38px;
  }
  .count {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    -webkit-margin-end: 1rem;
    margin-inline-end: 1rem;
    width: 2rem;
    height: 2rem;
    border-radius: 1rem;
    background-color: rgb(255, 253, 60);
    color: #000;
    font-size: 1.2rem;
    font-weight: bold;
  }
  .text {
    color: #778899;
    font-size: 16px;
    a {
      border-bottom: 4px solid rgb(255, 253, 60);
      color: inherit;
      text-decoration: none;
    }
  }
`;

export default FeatureSectionWrapper;
