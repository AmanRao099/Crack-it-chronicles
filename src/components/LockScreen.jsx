import React, { useState, useEffect } from "react";
import './LockScreen.css'; // Lock Screen Styles

const LockScreen = ({ unlockPhone }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  // Update the time every second
  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date().toLocaleTimeString();
      setCurrentTime(time);
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleUnlock = () => {
    const passcode = "1234"; // Set your passcode here
    if (inputValue === passcode) {
      unlockPhone(); // Unlock the phone if the passcode is correct
    } else {
      setError(true); // Show error message if passcode is incorrect
    }
  };

  return (
    <div className="lock-screen">
      <div className="time">{currentTime}</div>
      <div className="lock-container">
        <input
          type="password"
          placeholder="Enter passcode"
          value={inputValue}
          onChange={handleInputChange}
          className="lock-input"
        />
        {error && <p className="error-message">Incorrect passcode, try again!</p>}
        <button onClick={handleUnlock} className="unlock-button">Unlock</button>
      </div>
    </div>
  );
};

export default LockScreen;
