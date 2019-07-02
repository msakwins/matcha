import React, { useState } from 'react';
import M33t from './M33t/M33t';
import Loading from './Loading/Loading';

import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import AppWrapper from './AppWrapper';
import { withMutation } from 'react-apollo';

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
    setLike(3);
    setTimeout(handleStateLike(4), 6000)
  }

  function handlePopularity(type, rate) {
    const mapStateToFunc = {
      [type]: () => {},
      nice: setPopularityNice,
      smart: setPopularitySmart,
    };
    mapStateToFunc[type](rate);
  }

  function handleStateLike() {
    console.log("like:", like)
    if (like === 1) {
      setLike(2);
      console.log("like2:", like)
    }

    if (like === 3) {
      setLike(4)
    }
  }

  function handleLike() {
    if (like === 0) {
      setLike(1);
      setTimeout(() => handleStateLike(), 10000);
    }
    else if (like === 2) {
      return setModal(true);
    }
  }
  return (
    <Router>
      <ThemeProvider theme={theme[changeTheme]}>
        <AppWrapper id="AppWrapper">
          {console.log(like)}
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
          {/*

<Header />
{loading &&
  <Loading />
}
*/}
        </AppWrapper>
      </ThemeProvider>
    </Router>
  );
}

export default App;
