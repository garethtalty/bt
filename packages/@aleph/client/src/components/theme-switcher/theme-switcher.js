import React from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
  position: absolute;
  right: 12px;
  top: 12px;
`;
const ThemeSwitcher = ({ setTheme }) => {
  const setBrand = e => setTheme(e.target.value);

  return (
    <StyledSelect id="theme" onChange={setBrand}>
      <option value="bt">bt</option>
      <option value="another">another</option>
    </StyledSelect>
  );
};

export { ThemeSwitcher };
