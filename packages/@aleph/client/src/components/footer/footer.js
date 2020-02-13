import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { bt, another } from 'themes';
import { ThemeSwitcher } from 'components';

const footerColor = theme('brand', {
  bt: bt.primaryBrandColor,
  another: another.primaryBrandColor,
});

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  line-height: 50px;
  text-indent: 10px;
  width: 100%;
  color: ${footerColor};
  background-color: #fff;
  border-top: 1px solid #333;
  &:before {
    margin-top: 100px;
  }
`;

export const Footer = ({ setTheme }) => (
  <StyledFooter>
    © {new Date().getFullYear()}
    <ThemeSwitcher setTheme={setTheme} />
  </StyledFooter>
);
