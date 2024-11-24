import React from "react";
import "./Settings.css";

const Settings = ({ navigateHome, navigateBack }) => {
  return (
    <div className="screen settings">
      <h2>Settings</h2>
      <div className="settings-options-container">
        <div className="settings-options">
          <div className="settings-option">
            <p>Wi-Fi</p>
            <button>Connect</button>
          </div>
          <div className="settings-option">
            <p>Bluetooth</p>
            <button>Toggle</button>
          </div>
          <div className="settings-option">
            <p>Display</p>
            <button>Adjust</button>
          </div>
          <div className="settings-option">
            <p>Sound</p>
            <button>Adjust</button>
          </div>
          <div className="settings-option">
            <p>Privacy</p>
            <button>Manage</button>
          </div>
          <div className="settings-option">
            <p>Notifications</p>
            <button>Manage</button>
          </div>
          <div className="settings-option">
            <p>Battery</p>
            <button>Optimize</button>
          </div>
          <div className="settings-option">
            <p>Security</p>
            <button>Configure</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
