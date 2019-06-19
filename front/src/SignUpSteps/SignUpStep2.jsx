import React, { useState } from 'react';
import { SignUpStep2Wrapper } from './SignUpStepsWrapper';
import { Title, Input, Button } from '../Styled';
import user from '../User';

const genders = [
  {
    id: 0,
    genre: "female",
  },
  {
    id: 1,
    genre: "male",
  },
  {
    id: 2,
    genre: "transgender",
  },
];



function SignUpStep2() {

  const [isSelected, setIsSelected] = useState(null);

  function handleGenreSelection(index) {
    setIsSelected(index);
  };

  return (
    <SignUpStep2Wrapper className="step2" id="SignUpStep2">
      <Title>Fill your profile</Title>
      <div className="sign-up__fields">
        <div className="sign-up__user-photo">
          <img alt="" src="/user.png"></img>
          <Input placeholder="../users/marion"></Input>
          <Button small white img="/photo.svg" nude/>
        </div>
        <Input readOnly name="FirstName" value={user.firstName}></Input>
        <Input readOnly name="LastName" value={user.lastName}></Input>
        <Input readOnly name="LastName" value={user.email}></Input>
        <Input placeholder="Age" type="number"/>
        <Input placeholder="Activity" type="text"/>
        <div className="sign-up__genders">
          {genders.map((gender, index) =>
            <img
            onClick={() => handleGenreSelection(index)}
            key={gender.id}
            alt={gender.genre}
            src={ isSelected === gender.id ? `/genders/${gender.genre}1.svg` : `/genders/${gender.genre}.svg`}>
            </img>
            )}
        </div>
      </div>
    </SignUpStep2Wrapper>
  )
}

export default SignUpStep2;