import React, { useState } from 'react';
import M33t from './M33t/M33t';
import Loading from './components/Loading/Loading';

import Header from './components/Header/Header';


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
  const [loading, setLoading] = useState(false);
  const [like, setLike] = useState(0);
  const [modal, setModal] = useState(false);
  const [popularityNice, setPopularityNice] = useState(0);
  const [popularitySmart, setPopularitySmart] = useState(0);

  function handleLogging() {
    setIsLogged(!isLogged);
  }

  function handleTheme(themeNumber) {
    setChangeTheme(themeNumber);
  }

  function handleModal() {
    setModal(false);
    setLike(2);
  }

  function handlePopularity(type, rate) {
    const mapStateToFunc = {
      [type]: () => {},
      nice: setPopularityNice,
      smart: setPopularitySmart,
    };
    mapStateToFunc[type](rate);
  }

  function handleLike() {
    if (like === 0)
      return setLike(1);
    else if (like === 1)
      return setModal(true);
  }
  console.log(popularityNice)
  return (
    <Router>
      <ThemeProvider theme={theme[changeTheme]}>
        <AppWrapper id="AppWrapper">
          <M33t
            handleLogging={handleLogging}
            isLogged={isLogged}
            handleModal={handleModal}
            handleLike={handleLike}
            like={like}
            modal={modal}
            handlePopularity={handlePopularity}
            popularityNice={popularityNice}
            popularitySmart={popularitySmart}
          />
          <Header />
          {loading &&
            <Loading />
          }
        </AppWrapper>
      </ThemeProvider>
    </Router>
  );
}

export default App;