import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Home = () => {
  const navigate = useNavigate();

  // Handle clicking on each app
  const handleAppClick = (app) => {
    switch (app) {
      case "dialer":
        navigate("/dialer");
        break;
      case "calculator":
        navigate("/calculator");
        break;
      case "browser":
        navigate("/browser");
        break;
      case "gallery":
        navigate("/gallery");
        break;
      case "vault":
        navigate("/vault");
        break;
      default:
        break;
    }
  };

  return (
    <div className="screen home">
      <h2>Home Screen</h2>
      {/* 3x3 App Grid */}
      <div className="app-grid">
        <div className="app-card" onClick={() => handleAppClick("dialer")}>
          <span>📞</span>
          <p>Dialer</p>
        </div>
        <div className="app-card" onClick={() => handleAppClick("calculator")}>
          <span>🧮</span>
          <p>Calculator</p>
        </div>
        <div className="app-card" onClick={() => handleAppClick("browser")}>
          <span>🌐</span>
          <p>Browser</p>
        </div>
        <div className="app-card" onClick={() => handleAppClick("gallery")}>
          <span>🖼️</span>
          <p>Gallery</p>
        </div>
        <div className="app-card" onClick={() => handleAppClick("vault")}>
          <span>🔒</span>
          <p>Vault</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
