import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  padding: 50px 0 120px 0;
  transform: rotate(-10deg);
  line-height: 64px;
  transition: all .2s;
  position: relative;
  letter-spacing: -1.6px;
  .title {
    -webkit-text-stroke: 2px #002524;
    font-family: Ayazona,'Helvetica Neue', Helvetica;
    line-height: 64px;
    text-align: left;
    transition: all .2s;
    position: relative;
    letter-spacing: -1.6px;
  }
  .header-wrapper {
    display: flex;
    flex-direction: column;
    padding: 25px;
  }

  .title {
    font-weight: 600;
    color: #fff;
    font-size: 160px;
    transform: rotate(-10deg);
    margin-top: -50px;
  }

  @media screen and (max-width: 768px) {
    margin: 0 0 60px 0;
    .title {
      font-size: 80px !important;
      text-align: center;
      margin-top: 0px;
    }
  }
`;

export default ContainerWrapper;
