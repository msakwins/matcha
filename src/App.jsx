import React, { useState } from 'react';
import Header from './Header/Header';
// import Footer from './Footer/Footer';
import ContactList from './ContactList/ContactList';
import HomePage from './HomePage/HomePage';
// import SignUp from './SignUp/SignUp';
import Menu from './Menu/Menu';
import MessageList from './MessageList/MessageList';
import Profile from './Profile/Profile';
import SignIn from './SignIn/SignIn';
import styled from './styledApp';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App(props) {
  const [isLogged, setIsLogged] = useState(null);

  function handleClick() {
    return setIsLogged(true);
  }

  return (
    <Router>
      <div className={props.className}>
        <Header />
        { isLogged ?
          <>
            <Route path="/messages" component={ContactList} />
            <Route exact path="/" component={HomePage} />
            <Route path="/profile" component={Profile} />
            <Route path="/messageid" component={MessageList} />
          <Menu />
          </>
          :
          <SignIn isLogged={isLogged} action={handleClick}/>
        }
        { /* <Footer /> */ }
      </div>
    </Router>
  );
}

export default styled(App);
