import React from 'react';
import SettingsWrapper from './SettingsWrapper.js';


function Settings(props) {

  return (
    <SettingsWrapper>
      <div className="settings__theme-1" onClick={() => props.action(1)}></div>
      <div className="settings__theme-2" onClick={() => props.action(2)}></div>
      <div className="settings__theme-3" onClick={() => props.action(3)}></div>
    </SettingsWrapper>
  )
};

export default Settings;