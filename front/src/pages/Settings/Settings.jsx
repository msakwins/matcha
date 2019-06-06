import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Title } from '../../Styled';
import SettingsWrapper from './SettingsWrapper.js';


function Settings({ handleTheme, handleLogging, isLogged }) {
  return (
    <SettingsWrapper>
      <Title>Settings</Title>
      <div className="settings__pink">
        <Button darkPinkBorder as={Link} to="/settings/my-infos">My informations</Button>
        <Button as={Link} pink img="/heart-love.svg" to="/superlikes">SUPERLIKES</Button>
        <Button darkPink to="/about" as={Link}><p>{"About Meet"}</p></Button>
      </div>
      <div className="settings__blue">
        <Button blueBorder as={Link} onClick={handleLogging} to="/register">SIGN UP</Button>
        <Button blue onClick={handleLogging}>LOG OUT</Button>
      </div>
      <div className="settings__grey">
        <Button greyBorder as={Link} to="/cgv">CGV</Button>
        <Button greyBorder as={Link} to="/cgv">Privacy policy</Button>
      </div>
    </SettingsWrapper>
  )
};

export default Settings;