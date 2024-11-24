import React from "react";
import '../App.css';


function NavigationBar({ goBack, goHome, openRecent }) {
  return (
    <div className="nav-bar">
      <button onClick={goBack}>🔙</button>
      <button onClick={goHome}>🏠</button>
      <button onClick={openRecent}>🕘</button>
    </div>
  );
}

export default NavigationBar;
