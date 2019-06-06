import React from 'react';
import M33tWrapper from './M33tWrapper';
import NotConnected from '../NotConnected/NotConnected';
import Connected from '../Connected/Connected';
import Menu from '../components/Menu/Menu';
import { withRouter } from 'react-router-dom';

function M33t(props) {

  const {
    isLogged,
    handleLogging,
    like,
    handleLike,
    modal,
    handleModal,
    popularityNice,
    popularitySmart,
    handlePopularity,
  } = props;

  if (!isLogged) {
    return (
    <M33tWrapper id="M33t">
      <NotConnected isLogged={isLogged} handleLogging={handleLogging} />
    </M33tWrapper>
    );
  }

  else return (
    <M33tWrapper id="M33t">
      <Connected
        isLogged={isLogged}
        handleLogging={handleLogging}
        handleLike={handleLike}
        handleModal={handleModal}
        like={like}
        modal={modal}
        handlePopularity={handlePopularity}
        popularityNice={popularityNice}
        popularitySmart={popularitySmart}
      />
      <Menu url={props.location.pathname} />
    </M33tWrapper>
  );
};

export default withRouter(M33t);