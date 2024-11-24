import React, { useState } from "react";
import Dialer from "./components/Dialer";
import Gallery from "./components/Gallery";
import Calculator from "./components/Calculator";
import LockScreen from "./components/LockScreen";
import Messages from "./components/Messages";
import Calender from "./components/Calendar";
import News from "./components/News";
import Clock from "./components/Clock";
import Notes from "./components/Notes";
import PasswordPage from "./components/PasswordPage"; // Import PasswordPage for password prompts
import "./App.css";
import Settings from "./components/Settings";
import Calendar from "./components/Calendar";

const App = () => {
  const [currentScreen, setCurrentScreen] = useState("home");
  const [isLocked, setIsLocked] = useState(true);
  const [vaultUnlocked, setVaultUnlocked] = useState(false);
  const [recentTabs, setRecentTabs] = useState([]);
  const [passwordRequiredForApp, setPasswordRequiredForApp] = useState(null); // Track which app needs password
  const [enteredPassword, setEnteredPassword] = useState(""); // Store entered password
  const [passwordError, setPasswordError] = useState(""); // Store error message for incorrect password

  // Passwords for each app
  const appPasswords = {
    gallery: "1234",
    messages: "5678",
    notes: "abcd",
  };

  const unlockPhone = () => {
    setIsLocked(false);
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
    setCurrentScreen("recent-tabs");
  };

  const openApp = (app) => {
    if (appPasswords[app]) {
      setPasswordRequiredForApp(app); // Set the app that needs a password
      setCurrentScreen("password"); // Show password page
    } else {
      setCurrentScreen(app);
      setRecentTabs((prevTabs) => {
        const updatedTabs = [app, ...prevTabs];
        return updatedTabs.slice(0, 5);
      });
    }
  };

  const checkPassword = (password) => {
    if (password === appPasswords[passwordRequiredForApp]) {
      setPasswordRequiredForApp(null); // Clear the required password
      setEnteredPassword(""); // Clear entered password
      setPasswordError(""); // Clear any existing error
      setCurrentScreen(passwordRequiredForApp); // Open the app
    } else {
      setPasswordError("Incorrect password!"); // Set the error message
    }
  };

  return (
    <div className="phone">
      {isLocked ? (
        <LockScreen unlockPhone={unlockPhone} />
      ) : (
        <div className="phone-screen">
          {currentScreen === "home" && (
            <div className="screen home">
              <h2>Home Screen</h2>
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

          {/* Password Screen */}
          {currentScreen === "password" && (
            <PasswordPage
              checkPassword={checkPassword}
              enteredPassword={enteredPassword}
              setEnteredPassword={setEnteredPassword}
              passwordError={passwordError} // Pass error message to PasswordPage
            />
          )}

          {currentScreen === "dialer" && (
            <Dialer navigateHome={navigateHome} navigateBack={navigateBack} showRecentTabs={showRecentTabs} />
          )}
          {currentScreen === "gallery" && <Gallery />}
          {currentScreen === "calendar" && <Calendar navigateHome={navigateHome} navigateBack={navigateBack} />}
          {currentScreen === "messages" && <Messages navigateHome={navigateHome} navigateBack={navigateBack} />}
          {currentScreen === "calculator" && <Calculator navigateBack={navigateBack} />}
          {currentScreen === "news" && <News navigateHome={navigateHome} navigateBack={navigateBack} />}
          {currentScreen === "clock" && <Clock navigateBack={navigateBack} />}
          {currentScreen === "notes" && <Notes navigateBack={navigateBack} />}
          {currentScreen === "vault" && <div className="screen vault">Vault Content</div>}
          {currentScreen === "settings" && <Settings navigateBack={navigateBack} />}

          {/* Recent Tabs Screen */}
          {currentScreen === "recent-tabs" && (
            <div className="recent-tabs-page">
              <h2>Recent Tabs</h2>
              <ul className="recent-tabs-list">
                {recentTabs.length === 0 ? (
                  <li>No recent tabs</li>
                ) : (
                  recentTabs.map((tab, index) => <li key={index}>{tab}</li>)
                )}
              </ul>
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
