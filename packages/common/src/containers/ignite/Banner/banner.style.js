import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  @media screen and (max-width: 800px) {
    display: none;
  }
  .innerNav {
    max-width: 1300px;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;
    display: flex;
    margin: 28px auto;
    width: 100%;
    @media screen and (max-width: 1350px) {
      padding: 0 40px;
    }
    @media screen and (max-width: 800px) {
      padding: 0 15px;
    }
    @media screen and (max-width: 1300px;) {
      padding-left: 12px;
      padding-right: 12px;
    }
  }
  .navActive {
    letter-spacing: -0.1px;
    color: rgb(0, 0, 0);
    border-bottom: 4px solid #c61354;
    font-size: 16px;
    line-height: 1.5;
    display: block;
  }
  .navRightItems {
    list-style: none;
    padding: 0px;
    margin: 0px;
    > li {
      display: inline-block;
      margin-left: 30px;
    }
    > li a {
      letter-spacing: -0.1px;
      text-align: center;
      color: rgb(143, 149, 163);
      font-size: 16px;
      line-height: 1.5;
    }
  }
`;

export default ContainerWrapper;
