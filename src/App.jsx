import React, { useState } from "react";
import Dialer from "./components/Dialer";
import Gallery from "./components/Gallery";
import LockScreen from "./components/LockScreen"; // Import the LockScreen component
import "./App.css";

const App = () => {
  const [currentScreen, setCurrentScreen] = useState("home");
  const [isLocked, setIsLocked] = useState(true); // Add state for lock screen

  const unlockPhone = () => {
    setIsLocked(false); // Unlock the phone when the correct passcode is entered
  };

  const navigateHome = () => {
    setCurrentScreen("home");
  };

  const navigateBack = () => {
    if (currentScreen !== "home") {
      setCurrentScreen("home");
    }
  };

  const showRecentTabs = () => {
    alert("Showing recent tabs...");
  };

  const openApp = (app) => {
    setCurrentScreen(app);
  };

  return (
    <div className="phone">
      {isLocked ? (
        // Show the lock screen if the phone is locked
        <LockScreen unlockPhone={unlockPhone} />
      ) : (
        <div className="phone-screen">
          {currentScreen === "home" && (
            <div className="screen home">
              <h2>Home Screen</h2>
              {/* 3x3 Grid of Apps */}
              <div className="app-grid">
                <div className="app-card" onClick={() => openApp("dialer")}>
                  <span>📞</span>
                  <p>Dialer</p>
                </div>
                <div className="app-card" onClick={() => openApp("calculator")}>
                  <span>🧮</span>
                  <p>Calculator</p>
                </div>
                <div className="app-card" onClick={() => openApp("gallery")}>
                  <span>🖼️</span>
                  <p>Gallery</p>
                </div>
                <div className="app-card" onClick={() => openApp("messages")}>
                  <span>💬</span>
                  <p>Messages</p>
                </div>
                <div className="app-card" onClick={() => openApp("contacts")}>
                  <span>📱</span>
                  <p>Contacts</p>
                </div>
                <div className="app-card" onClick={() => openApp("settings")}>
                  <span>⚙️</span>
                  <p>Settings</p>
                </div>
                <div className="app-card" onClick={() => openApp("calendar")}>
                  <span>📅</span>
                  <p>Calendar</p>
                </div>
                <div className="app-card" onClick={() => openApp("clock")}>
                  <span>⏰</span>
                  <p>Clock</p>
                </div>
                <div className="app-card" onClick={() => openApp("news")}>
                  <span>📰</span>
                  <p>News</p>
                </div>
              </div>
            </div>
          )}

          {currentScreen === "dialer" && (
            <Dialer
              navigateHome={navigateHome}
              navigateBack={navigateBack}
              showRecentTabs={showRecentTabs}
            />
          )}

          {currentScreen === "gallery" && <Gallery />} {/* Add Gallery Screen */}

          {/* Navigation Bar */}
          <div className="nav-bar">
            <button onClick={navigateHome}>🏠</button>
            <button onClick={navigateBack}>⬅️</button>
            <button onClick={showRecentTabs}>🗂️</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
