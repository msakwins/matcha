import React, { useState } from 'react';
import M33t from './M33t/M33t';

import Header from './Header/Header';


import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import AppWrapper from './AppWrapper';

const theme = {
  1: {
    fontPrimary: '#24305E',
    fontSecondary: '#FFFFFF',
    fontTertiary: '#A8D0E6',
    bgPrimary: '#FFFFFF',
    bgSecondary: '#24305E',
  },
  2: {
    fontPrimary: '#24305E',
    fontSecondary: '#FFFFFF',
    fontTertiary: '#24305E',
    bgPrimary: '#A8D0E6',
    bgSecondary: '#A8D0E6',
  },
  3: {
    fontPrimary: '#FFFFFF',
    fontSecondary: '#A8D0E6',
    fontTertiary: '#24305E',
    bgPrimary: '#24305E',
    bgSecondary: '#FFFFFF',
  },
};

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [changeTheme, setChangeTheme] = useState(1);

  function handleLogging() {
    setIsLogged(!isLogged);
  }

  function handleTheme(themeNumber) {
    setChangeTheme(themeNumber);
  }


  return (
    <Router>
      <ThemeProvider theme={theme[changeTheme]}>
        <AppWrapper>
          <M33t handleLogging={handleLogging} isLogged={isLogged} />
          <Header />
        </AppWrapper>
      </ThemeProvider>
    </Router>
  );
}

export default App;
