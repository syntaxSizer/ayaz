import styled from 'styled-components';

export const DropdownMenuWrapper = styled.div`
  position: relative;
  cursor: pointer;
  transition: 0.2s ease-in-out;
`;

export const DropdownMenuItemsWrapper = styled.ul`
  padding: 0;
  list-style: none;
  left: ${props => (props.dropdownDirection === 'left' ? '0' : 'auto')};
  right: ${props => (props.dropdownDirection === 'right' ? '0' : 'auto')};

  background-color: rgb(255, 255, 255);
  position: absolute;
  z-index: 300;
  bottom: 0px;
  width: 350px;
  max-height: 380px;
  height: 300px;
  overflow-y: auto;
  transform: none;
  top: 5px;
  box-shadow: rgb(16 25 30 / 8%) 0px 1px 4px 0px;
  border: 1px solid rgb(242, 243, 243);
  opacity: 1;
  transition: opacity 100ms ease-in-out 0s;
  margin-top: 40px;
  .selected {
    color: rgb(143, 149, 163);
    font-size: 14px;
    font-weight: 600;
  }
`;

export const DropdownMenuItemWrapper = styled.li`
  border-left: 3px solid transparent;
  padding-right: 16px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.2px;
  padding-left: 16px;
  color: rgb(45, 49, 56);
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: 1px solid rgb(239, 239, 239);
  a {
    display: block;
  }
  &:hover {
    background-color: #fff;
  }
`;
