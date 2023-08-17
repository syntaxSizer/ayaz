import styled from 'styled-components';

const CardWrapper = styled.section`
  display: none;
  @media screen and (max-width: 1000px) {
    display: block;
  }
  .innerSection {
    max-width: 1300px;
    cursor: pointer;
    padding: 16px 12px;
    margin: auto;
  }
  .top {
    font-size: 12px;
    font-weight: 600;
    line-height: normal;
    color: rgb(143, 149, 163);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    margin-bottom: 8px;
  }
  .lower {
    font-size: 18px;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.9px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    text-transform: capitalize;
  }
  .css-5hz1ob {
    margin: 0px 4px;
  }
  .css-153ygoq {
    margin-left: 8px;
  }
  .divide {
    height: 8px;
    background-color: rgb(247, 247, 248);
  }
`;

export default CardWrapper 
