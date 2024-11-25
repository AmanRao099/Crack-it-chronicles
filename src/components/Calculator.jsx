import React, { useState } from "react";
import "./Calculator.css";

const Calculator = ({ openVault }) => {
  const [input, setInput] = useState(""); // State to track calculator input

  // Function to handle button clicks and append value to the current input
  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  // Function to safely evaluate the input expression
  const handleEvaluate = () => {
    try {
      const result = evaluateExpression(input);
      if (result === "788576") {
        // If the result matches the "vault code," redirect to the vault
        openVault(); // Call the function to navigate to Vault
      } else {
        setInput(result);
      }
    } catch (error) {
      setInput("Error"); // Show error if invalid expression
    }
  };

  // Simple function to evaluate basic arithmetic expressions (addition, subtraction, multiplication, division)
  const evaluateExpression = (expression) => {
    expression = expression.replace(/\s+/g, ""); // Remove any spaces

    const regex = /(\d+(\.\d*)?|\.\d+|[-+*/^])/g;
    let tokens = expression.match(regex);

    if (!tokens) throw new Error("Invalid expression");

    const applyOperator = (left, operator, right) => {
      const leftNum = parseFloat(left);
      const rightNum = parseFloat(right);
      switch (operator) {
        case "+":
          return leftNum + rightNum;
        case "-":
          return leftNum - rightNum;
        case "*":
          return leftNum * rightNum;
        case "/":
          if (rightNum === 0) throw new Error("Division by zero");
          return leftNum / rightNum;
        default:
          throw new Error("Unknown operator");
      }
    };

    // Handle multiplication and division
    let index = 0;
    while (index < tokens.length) {
      if (tokens[index] === "*" || tokens[index] === "/") {
        const left = tokens[index - 1];
        const operator = tokens[index];
        const right = tokens[index + 1];
        const result = applyOperator(left, operator, right);
        tokens.splice(index - 1, 3, result.toString());
      } else {
        index++;
      }
    }

    // Handle addition and subtraction
    index = 0;
    while (index < tokens.length) {
      if (tokens[index] === "+" || tokens[index] === "-") {
        const left = tokens[index - 1];
        const operator = tokens[index];
        const right = tokens[index + 1];
        const result = applyOperator(left, operator, right);
        tokens.splice(index - 1, 3, result.toString());
      } else {
        index++;
      }
    }

    return tokens[0];
  };

  // Function to clear the input
  const handleClear = () => {
    setInput(""); // Clear the input field
  };

  // Function to delete the last character
  const handleDelete = () => {
    setInput(input.slice(0, -1)); // Delete the last character
  };

  return (
    <div className="calculator">
      <div className="screen">
        <input
          type="text"
          value={input}
          readOnly
          className="input-screen"
          placeholder="0"
        />
      </div>

      {/* Calculator Buttons */}
      <div className="buttons">
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("+")}>+</button>

        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("-")}>-</button>

        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick("*")}>*</button>

        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={() => handleButtonClick(".")}>.</button>
        <button onClick={handleEvaluate}>=</button>
        <button onClick={() => handleButtonClick("/")}>/</button>

        <button onClick={handleClear}>C</button>
        <button onClick={handleDelete}>←</button>
      </div>
    </div>
  );
};

export default Calculator;
