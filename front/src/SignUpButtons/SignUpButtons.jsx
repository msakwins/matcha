import React from 'react';
import SignUpButtonsWrapper from './SignUpButtonsWrapper';
import { Button } from '../Styled';
import { Link } from 'react-router-dom';

const SignUpButtons = ({
  handleSkip,
  path,
  handlePage,
}) =>
  <SignUpButtonsWrapper id="SignUpButtons">
  { path === '/register/step1' &&
    <Button
      as={Link}
      color="lightBlue"
      to="/register/step2"
      className="sign-up-buttons__next"
      onClick={() => handlePage(1)}
      >
      Next
    </Button>
  }
  { path === '/register/step2' &&
  <>
    <Button
      as={Link}
      to="/register/step1"
      color="mediumGrey"
      img="/left-arrow.svg"
      small="small"
      className="sign-up-buttons__prev"
      onClick={() => handlePage(2)}
    />
    <Button
      color="lightBlue"
      className="sign-up-buttons__next"
      as={Link}
      to="/register/step3"
      onClick={() => handlePage(2)}
    >
      Next
    </Button>
    <Button
      as={Link}
      to="/register/step3"
      color="mediumGrey"
      onClick={() => { handleSkip(); handlePage(2) }}
      small="small"
      img="/right-arrow.svg"
      className="sign-up-buttons__skip"
    />
    </>
  }
  {
    path === '/register/step3' &&
    <>
      <Button
        as={Link}
        to="/register/step2"
        color="mediumGrey"
        img="/left-arrow.svg"
        small="small"
        className="sign-up-buttons__prev"
        onClick={() => handlePage(3)}
      />
      <Button
        color="darkPink"
        className="sign-up-buttons__next"
        onClick={() => handlePage(3)}
      >
        Create
      </Button>
    </>
  }
  </SignUpButtonsWrapper>

export default SignUpButtons;