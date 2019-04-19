import React , { useState } from 'react';
import Header from './Header/Header';
// import Footer from './Footer/Footer';
import ContactList from './ContactList/ContactList';
import HomePage from './HomePage/HomePage';
// import SignUp from './SignUp/SignUp';
import Menu from './Menu/Menu';
import SearchBar from './SearchBar/SearchBar';
import MessageList from './MessageList/MessageList';
import Profile from './Profile/Profile';
// import SignIn from './SignIn/SignIn';
import MyProfile from './MyProfile/MyProfile';
import FavList from './FavList/FavList';
import Settings from './Settings/Settings';
import { BrowserRouter as Router, Route } from "react-router-dom";
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

function App(props) {
  const [openSearch, setOpenSearch] = useState(null);
  const [changeTheme, setChangeTheme] = useState(1);
  /*
  const [isLogged, setIsLogged] = useState(null);
  function handleClick() {
    return setIsLogged(true);
  }
*/

  function handleSearch() {
    return setOpenSearch(!openSearch);
  }

  function handleTheme(themeNumber) {
    return setChangeTheme(themeNumber);
  }


  return (
    <Router>
      <ThemeProvider theme={theme[changeTheme]}>
        <AppWrapper>
            <Route path="/messages" component={ContactList} />
            <Route exact path="/" component={HomePage} />
            <Route path="/profile" component={Profile} />
            <Route path="/messageid" component={MessageList} />
            <Route path="/my-profile" component={MyProfile} />
            <Route path="/favs" component={FavList} />
            <Route path="/settings" render={(props) => <Settings {...props} action={handleTheme}/>} />
            <SearchBar openSearch={openSearch} />
            <Header />
            <Menu
              openSearch={openSearch} 
              action={handleSearch}
              />
            { /* <SignIn isLogged={isLogged} action={handleClick}/> */ }
            { /* <Footer /> */ }
        </AppWrapper>
      </ThemeProvider>
    </Router>
  );
}

export default App;
