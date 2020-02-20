import React from 'react';
import { bt, another } from 'themes';
import styled from 'styled-components';
import theme from 'styled-theming';

const cardColor = theme('brand', {
  bt: bt.secondaryBrandColor,
  another: another.secondaryBrandColor,
});

const StyledCardHeader = styled.div`
  background-color: ${cardColor};
  color: #fff;
  padding: 5px;
`;
const StyledCard = styled.div`
  color: #333;
`;
const StyledCardChildren = styled.div`
  padding: 10px;
`;

export const Card = ({ title, children }) => (
  <StyledCard>
    <StyledCardHeader>{title}</StyledCardHeader>
    <StyledCardChildren>{children}</StyledCardChildren>
  </StyledCard>
);
