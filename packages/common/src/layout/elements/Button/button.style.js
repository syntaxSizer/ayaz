import styled from 'styled-components';
import { variant, alignItems, boxShadow, themeGet } from 'styled-system';
import { buttonStyle, colorStyle, sizeStyle } from '../../theme/customVariant';
import { base } from '../base';

const ButtonStyle = styled.button`
  /* button default style */
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${themeGet('colors.white', '#ffffff')};
  background-color: #000;
  border-radius: 0px;
  width: max-content;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  text-transform: capitalize;
  padding: 10px;
  border: 0;
  transition: all 0.3s ease;
  span.btn-icon {
    display: flex;
    > div {
      display: flex !important;
    }
  }

  &:focus {
    outline: none;
    backgroud: #000;
  }

  /* Material style goes here */
  &.is-material {
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  }

  /* When button on loading stage */
  &.is-loading {
    .btn-text {
      padding-left: ${themeGet('space.2', '8')}px;
      padding-right: ${themeGet('space.2', '8')}px;
    }
  }

  /* Style system support */
  ${alignItems}
  ${boxShadow}
  ${buttonStyle}
  ${colorStyle}
  ${sizeStyle}
  ${base}
`;

// prop types can also be added from the style functions
ButtonStyle.propTypes = {
  ...alignItems.propTypes,
  ...boxShadow.propTypes,
  ...variant.propTypes
};

ButtonStyle.displayName = 'ButtonStyle';

export default ButtonStyle;
