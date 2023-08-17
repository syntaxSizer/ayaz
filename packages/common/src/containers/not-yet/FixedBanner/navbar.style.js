import styled from 'styled-components';

const Container = styled.div`
  padding: 10px;
  padding-left: 0;
  background: #fff;
  border-bottom: 1px solid rgba(217, 219, 224, 0.5);
  z-index: 2;
  .wrapper {
    padding: 0 10px;
    align-items: center;
    display: flex;
    max-width: 1300px;
    margin: auto;
  .text {
    padding: 15px 0 15px 0;
    margin: 0 4px 0 4px;
    letter-spacing: -0.16px;
    color: #2D3138;
    font-weight: 600;
  }
  .icon {
    transform: rotate(90deg)
  }
}
`;

export { Container };
