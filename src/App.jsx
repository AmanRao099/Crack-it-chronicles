import React, { useState } from "react";
import Dialer from "./components/Dialer";
import Gallery from "./components/Gallery";
import Calculator from "./components/Calculator";
import LockScreen from "./components/LockScreen";
import Messages from "./components/Messages";
import Calendar from "./components/Calendar";
import News from "./components/News";
import Clock from "./components/Clock";
import Notes from "./components/Notes";
import PasswordPage from "./components/PasswordPage";
import Vault from "./components/Vault"; // Import Vault component
import Settings from "./components/Settings";
import "./App.css";

const App = () => {
  const [currentScreen, setCurrentScreen] = useState("home");
  const [isLocked, setIsLocked] = useState(true);
  const [recentTabs, setRecentTabs] = useState([]);
  const [passwordRequiredForApp, setPasswordRequiredForApp] = useState(null);
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

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
    setCurrentScreen("home");
  };

  const showRecentTabs = () => {
    setCurrentScreen("recent-tabs");
  };

  const openApp = (app) => {
    if (appPasswords[app]) {
      setPasswordRequiredForApp(app);
      setCurrentScreen("password");
    } else {
      setCurrentScreen(app);
      updateRecentTabs(app);
    }
  };

  const checkPassword = (password) => {
    if (password === appPasswords[passwordRequiredForApp]) {
      setPasswordRequiredForApp(null);
      setEnteredPassword("");
      setPasswordError("");
      setCurrentScreen(passwordRequiredForApp);
      updateRecentTabs(passwordRequiredForApp);
    } else {
      setPasswordError("Incorrect password!");
    }
  };

  const updateRecentTabs = (app) => {
    setRecentTabs((prevTabs) => {
      const updatedTabs = [app, ...prevTabs.filter((tab) => tab !== app)];
      return updatedTabs.slice(0, 5);
    });
  };

  const openVault = () => {
    setCurrentScreen("vault");
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

          {currentScreen === "password" && (
            <PasswordPage
              checkPassword={checkPassword}
              enteredPassword={enteredPassword}
              setEnteredPassword={setEnteredPassword}
              passwordError={passwordError}
            />
          )}

          {currentScreen === "dialer" && <Dialer />}
          {currentScreen === "gallery" && <Gallery />}
          {currentScreen === "calendar" && <Calendar />}
          {currentScreen === "messages" && <Messages />}
          {currentScreen === "calculator" && <Calculator navigateBack={navigateBack} openVault={openVault} />}
          {currentScreen === "news" && <News />}
          {currentScreen === "clock" && <Clock />}
          {currentScreen === "notes" && <Notes />}
          {currentScreen === "vault" && <Vault />}
          {currentScreen === "settings" && <Settings />}

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
