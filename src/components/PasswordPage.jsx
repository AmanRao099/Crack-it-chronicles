import React from "react";

const PasswordPage = ({ checkPassword, enteredPassword, setEnteredPassword, passwordError }) => {
  const handleInputChange = (e) => {
    setEnteredPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkPassword(enteredPassword);
  };

  return (
    <div className="password-page">
      <h2>Enter Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={enteredPassword}
          onChange={handleInputChange}
          placeholder="Password"
          autoFocus
        />
        <button type="submit">Unlock</button>
      </form>
      {passwordError && <p className="error-message">{passwordError}</p>} {/* Display error message */}
    </div>
  );
};

export default PasswordPage;
