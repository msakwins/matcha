import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Styled';
import SettingsWrapper from './SettingsWrapper';


function Settings({ handleTheme, handleLogging, isLogged }) {
  return (
    <SettingsWrapper>
      <Button darkpinkborder="true" as={Link} to="/settings/my-infos">My informations</Button>
      <Button as={Link} pink="true" img="/heart-love.svg" to="/superlikes">SUPERLIKES</Button>
      <br />
      <br />
      <Button greyborder="true" to="/about" as={Link}><p>{"About Meet"}</p></Button>
      <Button greyborder="true" as={Link} to="/cgv">CGV</Button>
      <Button greyborder="true" as={Link} to="/cgv">Privacy policy</Button>
      <Button blue onClick={handleLogging}>LOG OUT</Button>
    </SettingsWrapper>
  )
};

export default Settings;