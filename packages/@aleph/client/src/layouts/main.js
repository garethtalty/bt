import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { activeTheme } from 'themes';

const Main = ({ Router, Footer }) => {
  const [theme, setTheme] = useState(activeTheme.brand);

  return (
    <ThemeProvider theme={{ brand: theme }}>
      <React.Fragment>
        <Router />
        <Footer setTheme={setTheme} />
      </React.Fragment>
    </ThemeProvider>
  );
};

export { Main };
