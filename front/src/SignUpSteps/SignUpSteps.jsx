import React, { useState } from 'react';
import SignUpStepsWrapper from './SignUpStepsWrapper';
import { Title, Input, Button } from '../Styled';
import { Link } from 'react-router-dom';
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
  ];
  
  function SignUpSteps({ page }) {
    const [isSelected, setIsSelected] = useState(null);
    
    function handleGenreSelection(index) {
      setIsSelected(index);
    };

    return (
      <SignUpStepsWrapper page={page}>
        <div className="sign-up__first-step">
          <Title>Create your account</Title>
          <div className="sign-up__fields">
            <Input placeholder="First Name" required type="text"/>
            <Input placeholder="Last Name" required type="text"/>
            <Input placeholder="E-mail" required type="text"/>
            <Input placeholder="Password" required type="text"/>
          </div>
          <Button simple="true" as={Link} className="sign-in__forgot-password" to="/">Already have an account?</Button>
          <div className="sign-up__required">
            <span>* </span>
            These informations are required to continue
          </div>
        </div>

        <div className="sign-up__second-step">
          <Title>Fill your profile</Title>
          <div className="sign-up__fields">
            <div className="sign-up__photo">
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
                  src={ isSelected === gender.id ? `${gender.genre}1.svg` : `${gender.genre}.svg`}>
                    {console.log("gender: ", gender.genre, "isSelected :", isSelected)}
                </img>
                )}
            </div>
          </div>
        </div>

        <div className="sign-up__third-step">
          <Title>What are you looking for ?</Title>
          <div className="sign-up__fields">
            <Input placeholder="Age" type="number"/>
            <Input placeholder="Interests" type="text"/>
          </div>
        </div>
      </SignUpStepsWrapper>
    )
  }

export default SignUpSteps;