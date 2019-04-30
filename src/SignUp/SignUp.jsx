import React, { useState } from 'react';
import SignUpWrapper from'./SignUpWrapper';
import { Input, Button, Title } from '../Styled';

const SignUp = () => {
  const [page, setPage] = useState(0);
  const [lastPage, setLastPage] = useState(0);

  function handleNextPage() {
    setPage(page + 1);
    setLastPage(page);
  }

  function handlePreviousPage() {
    if (page === 0) {
      setPage(page);
    }
    else {
      setLastPage(page);
      setPage(page - 1);
    }
  }

  return (
    <SignUpWrapper page={page} lastPage={lastPage}>
    <div className="sign-up__steps">
      <div className="sign-up__first-step">
        <Title>Create your account</Title>
        <div className="sign-up__fields">
          <Input placeholder="First Name" type="text"/>
          <Input placeholder="Last Name" type="text"/>
          <Input placeholder="E-mail" type="text"/>
          <Input placeholder="Password" type="text"/>
        </div>
      </div>

      <div className="sign-up__second-step">
        <Title>Fill your profile</Title>
        <div className="sign-up__fields">
          <div className="sign-up__photo">
            <img alt="" src="/user.png"></img>
            <Input placeholder="../users/marion"></Input>
            <Button small bg="/photo.svg" nude/>
          </div>
          <span className="sign-up__filled">Marion</span>
          <span className="sign-up__filled">Skw</span>
          <span className="sign-up__filled">marion.s@mail.com</span>
          <Input placeholder="Age" type="number"/>
          <Input placeholder="Activity" type="text"/>
          <Input placeholder="Interests" type="text"/>
          <Input placeholder="Interests" type="text"/>
          <Input placeholder="Interests" type="text"/>
          <Input placeholder="Interests" type="text"/>
        </div>
      </div>

      <div className="sign-up__third-step">
        <Title>What are you looking for ?</Title>
        <div className="sign-up__fields">
          <Input placeholder="Age" type="number"/>
          <Input placeholder="Interests" type="text"/>
        </div>
      </div>

    </div>

    {page === 0 &&
      <div className="sign-up__buttons">
        <Button light className="sign-up__button-next" onClick={handleNextPage}>Next</Button>
      </div>
    }
    {page === 1 &&
      <div className="sign-up__buttons">
      <Button light bg="/left-arrow.svg" small className="sign-up__button-back" onClick={handlePreviousPage} />
      <Button light className="sign-up__button-next" onClick={handleNextPage}>Next</Button>
      <Button light small bg="/right-arrow.svg" className="sign-up__button-skip" />
    </div>
    }
    {page === 2 &&
      <div className="sign-up__buttons">
      <Button light bg="/left-arrow.svg" small className="sign-up__button-back" onClick={handlePreviousPage} />
      <Button light className="sign-up__button-next">Create</Button>
      <Button light small bg="/right-arrow.svg" className="sign-up__button-skip" />
    </div>
    }

  </SignUpWrapper>
  )
}

export default SignUp;
