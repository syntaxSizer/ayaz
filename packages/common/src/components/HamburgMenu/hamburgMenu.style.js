import styled from 'styled-components';
import {
  width,
  height,
  color,
  space,
  border,
  boxShadow,
  borderRadius,
} from 'styled-system';

const HamburgMenuWrapper = styled.button`
  border: 0;
  background: transparent;
  width: 38px;
  height: 30px;
  cursor: pointer;
  padding: 0;
  ${width}
  ${height}
  ${color}
  ${space}
  ${border}
  ${boxShadow}
  ${borderRadius}
  @media screen and (max-width: 350px) {
    width: 30px;
    height: 20px;
  }

  > span {
    display: block;
    width: 100%;
    height: 2px;
    margin: 4px 0;
    float: right;
    background-color: ${props => (props.barColor ? props.barColor : '#10ac84')};
    transition: all 0.3s ease;
    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      width: calc(100% - 10px);
      margin-bottom: 0;
    }
  }
  &:focus,
  &:hover {
    outline: none;
    > span {
      &:last-child {
        width: 100%;
      }
    }
  }

  &:focus {
    > span {
      &:first-child {
        transform: rotate(45deg);
        transform-origin: 8px 50%;
      }
      &:nth-child(2) {
        display: none;
      }
      &:last-child {
        width: 100%;
        transform: rotate(-45deg);
        transform-origin: 9px 50%;
      }
    }
  }
`;

HamburgMenuWrapper.displayName = 'HamburgMenuWrapper';

export default HamburgMenuWrapper;
