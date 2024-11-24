import React, { useState } from "react";
import "../App.css";

const Dialer = () => {
  const [phoneNumber, setPhoneNumber] = useState(""); // Phone number input
  const [callHistory, setCallHistory] = useState([
    { id: 1, name: "John Doe", time: "10:30 AM", type: "incoming" },
    { id: 2, name: "Jane Smith", time: "2:15 PM", type: "missed" },
    { id: 3, name: "Alice Johnson", time: "4:45 PM", type: "missed" }
  ]); // Sample call history with contacts
  const [showDialer, setShowDialer] = useState(false); // Toggle between call history and dialer view
  const [calling, setCalling] = useState(false); // Track whether a call is ongoing

  // Append number to the display
  const handleButtonClick = (value) => {
    if (phoneNumber.length < 15) {
      setPhoneNumber((prev) => prev + value);
    }
  };

  // Delete the last digit
  const handleDelete = () => {
    setPhoneNumber((prev) => prev.slice(0, -1));
  };

  // Clear the number
  const handleClear = () => {
    setPhoneNumber("");
  };

  // Simulate making a call
  const makeCall = () => {
    if (phoneNumber) {
      // Add to call history with "No Signal"
      setCallHistory((prev) => [
        ...prev,
        { id: Date.now(), name: phoneNumber, time: new Date().toLocaleTimeString(), type: "no-signal" }
      ]);
      setPhoneNumber(""); // Clear after call
      setShowDialer(false); // Go back to call history
      setCalling(true); // Set calling to true

      // Automatically end the call after 5 seconds (for demonstration)
      setTimeout(() => {
        setCalling(false); // End the call after 5 seconds
      }, 5000);
    } else {
      alert("Please enter a number to call.");
    }
  };

  // Toggle between call history and dialer view
  const toggleDialer = () => {
    setShowDialer((prev) => !prev);
  };

  // Call history display
  const renderCallHistory = () => {
    return (
      <div className="call-history">
        <h3>Call History</h3>
        {callHistory.length === 0 ? (
          <p>No calls made yet.</p>
        ) : (
          <ul className="call-history-list">
            {callHistory.map((call) => (
              <li key={call.id} className={`call-history-item ${call.type}`}>
                <div className="contact-avatar">{call.name[0]}</div>
                <div className="call-details">
                  <span className="contact-name">{call.name}</span>
                  <span className="call-time">{call.time}</span>
                </div>
                <div className="call-status">
                  {call.type === "incoming" && <span className="status-text">Incoming</span>}
                  {call.type === "missed" && <span className="status-text missed">Missed</span>}
                  {call.type === "no-signal" && <span className="status-text no-signal">no-signal</span>}
                  
                </div>
              </li>
            ))}
          </ul>
        )}
        {/* Button to toggle dialer */}
        <div className="dialer-btn" onClick={toggleDialer}>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    );
  };

  // Dialer display
  const renderDialer = () => {
    return (
      <div className="screen dialer">
        <h2>Dialer</h2>
        {/* Display the entered phone number */}
        <input
          type="text"
          className="number-display"
          value={phoneNumber}
          readOnly
          placeholder="Enter number"
        />
        <div className="dialpad">
          {/* Dial buttons */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "#"].map((item) => (
            <div
              key={item}
              className="dial-button"
              onClick={() => handleButtonClick(item.toString())}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="call-buttons">
          {/* Make call button */}
          <button className="call" onClick={makeCall}>
            📞
          </button>
          {/* End call button */}
          <button className="end-call" onClick={() => setPhoneNumber("")}>
            ✖️
          </button>
        </div>

        {/* Show "No Signal" message if calling */}
        {calling && (
          <div className="no-signal-modal">
            <div className="no-signal-content">
              <span>No Signal</span>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="screen">
      {showDialer ? renderDialer() : renderCallHistory()}
    </div>
  );
};

export default Dialer;
