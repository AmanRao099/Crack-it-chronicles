import React from "react";
import "./Vault.css";

const Vault = () => {
  return (
    <div className="vault-container">
      <h2 className="vault-header">Welcome to Your Vault</h2>
      <div className="vault-content">
        <div className="vault-note">
          <h3>Secret Note</h3>
          <p>
            This is a private note stored securely in your vault. Keep it safe and don't share it with anyone!
          </p>
        </div>
        <div className="vault-image">
          <h3>Hidden Image</h3>
          <img 
            src="https://via.placeholder.com/300" 
            alt="Vault Secret" 
            className="vault-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Vault;
