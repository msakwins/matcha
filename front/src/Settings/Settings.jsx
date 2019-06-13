import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Title } from '../Styled';
import SettingsWrapper from './SettingsWrapper';


function Settings({ handleTheme, handleLogging, isLogged }) {
  return (
    <SettingsWrapper>
      <Button darkPinkBorder as={Link} to="/settings/my-infos">My informations</Button>
      <Button as={Link} pink img="/heart-love.svg" to="/superlikes">SUPERLIKES</Button>
      <br />
      <br />
      <Button greyBorder to="/about" as={Link}><p>{"About Meet"}</p></Button>
      <Button greyBorder as={Link} to="/cgv">CGV</Button>
      <Button greyBorder as={Link} to="/cgv">Privacy policy</Button>
      <Button blue onClick={handleLogging}>LOG OUT</Button>
    </SettingsWrapper>
  )
};

export default Settings;