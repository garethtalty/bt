import React from 'react';
import styled from 'styled-components';

const backgroundColor = (status = 'g') => {
  switch (status) {
    case 'r':
      return 'red';
    case 'a':
      return 'orange';
    case 'g':
    default:
      return 'green';
  }
};

const StyledHealthIcon = styled.span`
  height: 20px;
  width: 20px;
  border-radius: 10px;
  display: inline-block;
  vertical-align: middle;
`;

export const HealthIcon = ({ status }) => (
  <StyledHealthIcon
    style={{ backgroundColor: backgroundColor(status) }}
  ></StyledHealthIcon>
);
