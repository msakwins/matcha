import React from 'react';
import { Link } from 'react-router-dom';
import SettingsWrapper from './SettingsWrapper.js';


function Settings(props) {

  return (
    <SettingsWrapper>
      {console.log(props)}
      <div className="settings__theme-1" onClick={() => props.handleTheme(1)}></div>
      <div className="settings__theme-2" onClick={() => props.handleTheme(2)}></div>
      <div className="settings__theme-3" onClick={() => props.handleTheme(3)}></div>
      <Link to="/register">SIGN UP</Link>
    </SettingsWrapper>
  )
};

export default Settings;