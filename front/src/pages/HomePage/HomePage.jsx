import React from 'react';
import HomePageWrapper from'./HomePageWrapper';
import { Title, Button } from '../../Styled';

function HomePage(props) {

  return (
    <HomePageWrapper id="HomePage">
      <Title>Welcome</Title>
      <span>Our very simple algorithm will find someone who matches the interests you filled !</span>
      <br />
      <span>If you're ready, click the button</span>
      <Button>Let's M33t</Button>
    </HomePageWrapper>
  );
}

export default HomePage;
