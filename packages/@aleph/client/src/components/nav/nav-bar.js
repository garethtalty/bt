import React from 'react';
import { bt, another } from 'themes';
import styled from 'styled-components';
import theme from 'styled-theming';
import { appName } from 'constants';

const navColor = theme('brand', {
  bt: bt.primaryBrandColor,
  another: another.primaryBrandColor,
});

const StyledNavBar = styled.nav`
  top: 0;
  width: 100%;
  background: ${navColor};
  color: #fff;
  padding: 10px;
  a {
    color: #fff;
  }
`;

const StyledHeading = styled.h1`
  color: #fff;
  font-size: 48px;
`;

const StyledUl = styled.ul`
  display: inline-block;
`;

const NavBar = ({ children }) => (
  <StyledNavBar>
    <StyledHeading>{appName}</StyledHeading>
    <StyledUl>{children}</StyledUl>
  </StyledNavBar>
);

export { NavBar };
