import React from 'react';
import MyInfomationsWrapper from './MyInformationsWrapper';
import { CategoryHeader, CategoryContainer } from '../Styled';

const MyInformations = ({ user }) =>
<MyInfomationsWrapper>
  <CategoryHeader className="category__header">
    My informations
  </CategoryHeader>
  <CategoryContainer>
    <p>
      <span className="profile__about-cat">First Name: </span>
      <span className="profile__about-text">{user.firstName}</span>
    </p>
    <p>
      <span className="profile__about-cat">Last Name: </span>
      <span className="profile__about-text">{user.lastName}</span>
    </p>
    <p>
      <span className="profile__about-cat">e-mail: </span>
      <span className="profile__about-text">{user.email}</span>
    </p>
    <p>
      <span className="profile__about-cat">City: </span>
      <span className="profile__about-text">{user.city}</span>
    </p>
  </CategoryContainer>
</MyInfomationsWrapper>

export default MyInformations;