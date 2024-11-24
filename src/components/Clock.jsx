// src/components/Clock.jsx
import React, { useState, useEffect } from "react";
import "./Clock.css"; // Import custom CSS file for the clock

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [alarms, setAlarms] = useState([
    { id: 1, time: "08:00:00", triggered: false },
    { id: 2, time: "12:00:00", triggered: false },
    { id: 3, time: "18:00:00", triggered: false },
  ]); // Pre-set alarms

  // Function to handle time updates
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      checkAlarms(); // Check alarms every time the clock updates
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [time, alarms]);

  // Function to check if any alarm matches the current time
  const checkAlarms = () => {
    alarms.forEach((alarm) => {
      if (!alarm.triggered && time === alarm.time) {
        alert(`Alarm: ${alarm.time}`);
        setAlarms(
          alarms.map((a) =>
            a.id === alarm.id ? { ...a, triggered: true } : a
          )
        );
      }
    });
  };

  return (
    <div className="clock-container">
      <h2 className="clock-header">Clock</h2>
      <div className="clock-face">
        <p className="time">{time}</p>
      </div>

      <div className="alarms-section">
        <h3 className="alarms-header">Alarms</h3>
        <div className="alarms-container">
          {alarms.map((alarm) => (
            <div key={alarm.id} className={`alarm-item ${alarm.triggered ? 'triggered' : 'active'}`}>
              <div className="alarm-time">
                <span>{alarm.time}</span>
              </div>
              <div className="alarm-status">
                <span className={alarm.triggered ? 'triggered-status' : 'active-status'}>
                  {alarm.triggered ? 'Triggered' : 'Active'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clock;
