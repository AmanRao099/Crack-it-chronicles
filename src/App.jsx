import React, { useState } from "react";
import Dialer from "./components/Dialer";
import Gallery from "./components/Gallery";
import Calculator from "./components/Calculator";
import LockScreen from "./components/LockScreen";
import Messages from "./components/Messages";
import Calendar from "./components/Calender"; // Import the Calendar component
import News from "./components/News"; // Import the News component
import Clock from "./components/Clock"; // Import the Clock component
import "./App.css";

const App = () => {
  const [currentScreen, setCurrentScreen] = useState("home");
  const [isLocked, setIsLocked] = useState(true); // Add state for lock screen
  const [vaultUnlocked, setVaultUnlocked] = useState(false); // Track if the vault is unlocked

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
    if (app === "calculator" && vaultUnlocked) {
      // If vault is unlocked, show the vault screen
      setCurrentScreen("vault");
    } else {
      setCurrentScreen(app);
    }
  };

  const unlockVault = () => {
    setVaultUnlocked(true);
    alert("Vault Unlocked!");
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
                <div className="app-card" onClick={() => openApp("notes")}>
                  <span>📝</span>
                  <p>Notes</p>
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

          {currentScreen === "calculator" && (
            <Calculator
              navigateHome={navigateHome}
              navigateBack={navigateBack}
              unlockVault={unlockVault}
            />
          )}

          {currentScreen === "gallery" && <Gallery />}

          {currentScreen === "messages" && (
            <Messages
              navigateHome={navigateHome}
              navigateBack={navigateBack}
            />
          )}

          {currentScreen === "calendar" && (
            <Calendar navigateBack={navigateBack} />
          )}

          {currentScreen === "news" && (
            <News navigateHome={navigateHome} navigateBack={navigateBack} />
          )}

          {currentScreen === "clock" && (
            <Clock navigateBack={navigateBack} />
          )}

          {currentScreen === "vault" && (
            <div className="screen vault">
              <h2>Vault</h2>
              <p>Welcome to your hidden vault! You can store files and other data here.</p>
            </div>
          )}

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
