import React, { useState } from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import SignUpWrapper from'./SignUpWrapper';
import SignUpButtons from '../SignUpButtons/SignUpButtons';
import SignUpStep1 from '../SignUpSteps/SignUpStep1';
import SignUpStep2 from '../SignUpSteps/SignUpStep2';
import SignUpStep3 from '../SignUpSteps/SignUpStep3';

const SignUp = (props) => {
  const [skip, setSkip] = useState(0);
  const [skipMessage, setSkipMessage] = useState(false);
  const [prevPage, setPrevPage] = useState(0);

  function handleSkip() {
    if (skip === 0) {
      setSkip(1);
      setSkipMessage(true);
    }
    else
      setSkip(2);
  }

  function handlePage(page) {
    setPrevPage(page)
  }


  return (
  <SignUpWrapper id="SignUp" prevPage={prevPage}>
    {console.log(prevPage)}
    <TransitionGroup component={null}>
      <CSSTransition
        timeout={300}
        classNames="page"
        key={props.location.key}
      >
        <Switch location={props.location}>
          <Route path="/register/step1" component={SignUpStep1}/>
          <Route path="/register/step2" component={SignUpStep2}/>
          <Route path="/register/step3" render={() =>
            <SignUpStep3 />
          } />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
    <SignUpButtons
      skip={skip}
      handleSkip={handleSkip}
      path={props.location.pathname}
      handlePage={handlePage}
    />
  </SignUpWrapper>
  )
}

export default withRouter(SignUp);
