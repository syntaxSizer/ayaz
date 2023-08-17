import styled from 'styled-components';

const Container = styled.div`
  background: #fff;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid rgba(217, 219, 224, 0.5);
  z-index: 99;
  left: 0;
  top: 5px;
  right: 0;
  margin-bottom: 30px;
  animation: navbar-fade-in .5s;

  .menuWrapper {
    ::-webkit-scrollbar {
      width: 12px;
      height: 8px;
    }
    ::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    }
    ::-webkit-scrollbar-thumb {
      background-color: darkgrey;
      outline: 1px solid slategrey;
      border-radius: 12px;
    }
    overflow-x: auto;
    margin: auto;
    display: flex;
    justify-content: space-between;
    a {
      position: relative;
      display: inline-block;
      padding: 30px;
      color: #908e93;
      text-decoration: none;
      text-transform: capitalize;
      margin-bottom: 0;
      font-size: 15px;
      font-weight: 600;
      line-height: normal;
      font-family: Ayazona,'Helvetica Neue', Helvetica;
      letter-spacing: -.5px;
      padding-left: 0;
      padding-right: 60px;
    }
  }
}`;

export { Container };
