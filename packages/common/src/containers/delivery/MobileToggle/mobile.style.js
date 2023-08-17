import styled from 'styled-components';

const Container = styled.button`
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  transform: scale(1);
  transition: transform 0.1s ease-in-out;
  background-color: #000;
  border-radius: 50%;
  color: #fff;
  height: 56px;
  width: 56px;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 17%);
  cursor: pointer;
  position: fixed;
  right: 16px;
  bottom: 40px;
  z-index: 800;
  display: none;
  border: none;
  @media screen and (max-width: 800px) {
    display: flex;
  }
`;

export { Container };
