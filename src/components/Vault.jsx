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
            I know the place, but I dont have the key for the treasure, I think i should check the rumour about the ghost
          </p>
        </div>
        <div className="vault-image">
          <h3>Hidden Image</h3>
          <img 
            src="/images/image1.jpg" 
           
            className="vault-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Vault;
