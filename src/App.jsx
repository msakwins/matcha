import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import HomePage from './HomePage/HomePage';
import SignUp from './SignUp/SignUp';
import styled from './styledApp';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    const {
      className,
    } = this.props;

    let logged = false;
    return (
      <Router>
        <div className={className}>
          <Header logged={logged} />
          <Route exact path="/" component={HomePage} />
          <Route path="/register" component={SignUp} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default styled(App);
