import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from 'styled-theming';
import { bt, another } from 'themes';

const linkColor = theme('brand', {
  bt: bt.primaryLinkColor,
  another: another.primaryLinkColor,
});

const StyledNavItem = styled.li`
  display: inline-block;
  color: ${linkColor};
  padding-right: 10px;
`;

const NavItem = ({ route, text }) => (
  <StyledNavItem>
    <Link to={route}>{text}</Link>
  </StyledNavItem>
);

export { NavItem };
