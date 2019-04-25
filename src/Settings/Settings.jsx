import React from 'react';
import { BLink, Button } from '../Styled';
import SettingsWrapper from './SettingsWrapper.js';


function Settings({ handleTheme, handleLogging, isLogged }) {
  return (
    <SettingsWrapper>
      <div className="settings__theme">
        <div className="settings__theme-1" onClick={() => handleTheme(1)}></div>
        <div className="settings__theme-2" onClick={() => handleTheme(2)}></div>
        <div className="settings__theme-3" onClick={() => handleTheme(3)}></div>
      </div>
      <div className="settings__log-out">
        <BLink to="/register">SIGN UP</BLink>
        <Button onClick={handleLogging}>LOG OUT</Button>
      </div>
    </SettingsWrapper>
  )
};

export default Settings;