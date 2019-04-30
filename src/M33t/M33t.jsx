import React from 'react';
import M33tWrapper from './M33tWrapper';
import NotConnected from '../NotConnected/NotConnected';
import Connected from '../Connected/Connected';
import Menu from '../Menu/Menu';
import { withRouter } from 'react-router-dom';

const M33t = (props) => {
  if (!props.isLogged) {
    return (
    <M33tWrapper id="M33tWrapper">
      <NotConnected isLogged={props.isLogged} handleLogging={props.handleLogging} />
    </M33tWrapper>
    );
  }

  else return (
    <M33tWrapper id="M33tWrapper">
      <Connected isLogged={props.isLogged} handleLogging={props.handleLogging} />
      <Menu url={props.location.pathname} />
    </M33tWrapper>
  );
};

export default withRouter(M33t);