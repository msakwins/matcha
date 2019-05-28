import React from 'react';
import SignUpButtonsWrapper from './SignUpButtonsWrapper';
import { Button } from '../Styled';

const SignUpButtons = ({ page, handlePreviousPage, handleNextPage }) => {
  if (page === 0)
    return (
      <SignUpButtonsWrapper id="SignUpButtons">
        <Button blueBorder onClick={handleNextPage} className="sign-up-buttons__next">Next</Button>
      </SignUpButtonsWrapper>
    )

  else if (page === 1)
    return (
      <SignUpButtonsWrapper id="SignUpButtons">
        <Button blueBorder img="/left-arrow.svg" small className="sign-up-buttons__prev" onClick={handlePreviousPage} />
        <Button blueBorder onClick={handleNextPage} className="sign-up-buttons__next">Next</Button>
        <Button blueBorder small img="/right-arrow.svg" className="sign-up-buttons__skip" />
      </SignUpButtonsWrapper>

  )

  else if (page === 2)
    return (
      <SignUpButtonsWrapper id="SignUpButtons">
        <Button blueBorder img="/left-arrow.svg" small className="sign-up-buttons__prev" onClick={handlePreviousPage} />
        <Button blueBorder className="sign-up-buttons__next">Create</Button>
      </SignUpButtonsWrapper>
  )
}

export default SignUpButtons;