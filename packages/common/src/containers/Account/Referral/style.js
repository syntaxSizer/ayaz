import styled from 'styled-components';

const Container = styled.section`
  width: 100%;
  margin: auto;
  .sectionHeader {
    height: 177px;
    opacity: 1;
    border-bottom: 1px solid rgba(217, 219, 224, 0.5);
  }
  .innerSection {
    max-width: 1300px;
    height: 100%;
    width: 100%;
    position: relative;
    margin: 0px auto;
    @media screen and (max-width: 1350px) {
      padding: 0 40px;
    }
    @media screen and (max-width: 800px) {
      padding: 0 15px;
    }
  }
  .how {
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: center;
    padding: 12px 0;
  }
  .butt {
    display: inline-block;
    width: auto;
    padding: 0;
    color: #009de0;
    font-size: inherit;
    font-weight: inherit;
    background: none;
    border: none;
    border-radius: 0;
    text-align: inherit;
    cursor: pointer;
    position: relative;
  }
  .mainHeader {
    position: absolute;
    bottom: 24px;
    opacity: 1;
    transform: translateY(0%);
    transition: opacity 300ms ease-in-out 0s, transform 300ms linear 0s;
    @media screen and (max-width: 667px) {
      bottom: 0;
      width: 95%;
    }
  }
  .title {
    font-size: 32px;
    letter-spacing: -2.4px;
    font-weight: 500;
    line-height: normal;
    color: rgb(45, 49, 56);
    margin: 0px;
  }
  .tabWrapper {
    margin: auto;
    max-width: 500px;
    margin-top: 0px;
    @media screen and (max-width: 1350px) {
      padding: 0 40px;
    }
    @media screen and (max-width: 800px) {
      padding: 0 15px;
    }
  }
  .emptyWrapper {
    margin: auto;
    max-width: 500px;
  }
  .noHeader {
    font-size: 25px;
    letter-spacing: -0.64px;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 1rem;
  }
  .description {
    color: rgb(143, 149, 163);
    font-size: 16px;
  }
  .noDescription {
    font-size: 15px;
    letter-spacing: initial;
    font-weight: 400;
    line-height: normal;
    margin-top: 0px;
  }
  .referral {
    width: 100%;
    padding: 12px 18px;
    background: #fafafa;
    border: 1px solid rgba(32, 33, 37, 0.12);
    border-radius: 12px;
    cursor: pointer;
    margin-top: 1rem;
  }
  .content {
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;
    text-align: left;
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
    background-color: #ebf7fd;
    color: #009de0;
    font-size: 1.2rem;
    font-weight: bold;
  }
  .text {
    color: rgb(45, 49, 56);
    font-size: 15px;
  }
  .innermod {
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .code {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .codeName {
    font-size: 12px;
    color: rgba(32, 33, 37, 0.64);
    padding-bottom: 0.25rem;
  }
  .actualCode {
    font-size: 20px;
    padding-top: 0.25rem;
  }
  .precopy {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .copied {
    padding-right: 0.5rem;
    padding-inline-end: 0.5rem;
    padding-inline-start: 0;
    color: rgba(32, 33, 37, 0.64);
  }
  .copy {
    border: 1px solid rgb(32 33 37 / 12%);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .flex-column {
    flex-direction: column;
    display: flex;
    flex-basis: 100%;
    max-height: 350px;
    overflow-y: auto;
    @media screen and (max-width: 800px) {
      width: 100%;
    }
  }
`;

export default Container;
