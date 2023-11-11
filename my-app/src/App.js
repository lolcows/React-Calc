import "./styles.css"
import { evaluate } from "mathjs";
import React, { useState } from "react";

function App() {

  const [currentOperand, setCurrentOperand] = useState("");
  const [previousOperand, setPreviousOperand] = useState("");
  const [operator, setOperator] = useState("");
  
  function handleNumberClick(number) {
    setCurrentOperand((prevOperand) => prevOperand + number);

  }

  function handleOperatorClick(selectedOperator) {
    setCurrentOperand((prevOperand) => prevOperand + " " + selectedOperator);
    setOperator(selectedOperator);
  }

  function handleEqualClick() {
    if (operator !== "") {
      try {
        const result = evaluate(currentOperand);
        setPreviousOperand(`${currentOperand} ${operator}`);
        setCurrentOperand(result.toString());
        setOperator("=");
      } catch (error) {
        setCurrentOperand("Error");
      }
    }
  }

  function handleExponentClick() {
    setCurrentOperand((prevOperand) => prevOperand + " ^ ");
  }

  function handleDeleteClick() {
    setCurrentOperand((prevOperand) => prevOperand.slice(0, -1));
  }

  function handleParenthesesClick(parentheses) {
    setCurrentOperand((prevOperand) => prevOperand + parentheses);
  }

  function handleAllClear() {
    setCurrentOperand("");
    setPreviousOperand("");
    setOperator("");
  }

  function handleDotClick() {
    // checks to see if current operand has dec point
    if (!currentOperand.includes(".")) {
      setCurrentOperand((prevOperand) => prevOperand + ".");
    }
  }

  //renders ui and assigns funcitons to each buttons
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{previousOperand}</div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      <button onClick={handleAllClear}>AC</button>
      <button onClick={handleDeleteClick}>DEL</button>
      <button onClick={() => handleParenthesesClick("(")}>&#40;</button>
      <button onClick={() => handleParenthesesClick(")")}>&#41;</button>
      <button onClick={() => handleNumberClick("1")}>1</button>
      <button onClick={() => handleNumberClick("2")}>2</button>
      <button onClick={() => handleNumberClick("3")}>3</button>
      <button onClick={() => handleOperatorClick("*")}>*</button>
      <button onClick={() => handleNumberClick("4")}>4</button>
      <button onClick={() => handleNumberClick("5")}>5</button>
      <button onClick={() => handleNumberClick("6")}>6</button>
      <button onClick={() => handleOperatorClick("+")}>+</button>
      <button onClick={() => handleNumberClick("7")}>7</button>
      <button onClick={() => handleNumberClick("8")}>8</button>
      <button onClick={() => handleNumberClick("9")}>9</button>
      <button onClick={() => handleOperatorClick("-")}>-</button>
      <button onClick={() => handleDotClick(".")}>.</button>
      <button onClick={() => handleNumberClick("0")}>0</button>
      <button onClick={() => handleEqualClick("=")}>=</button>
      <button onClick={() => handleOperatorClick("÷")}>÷</button>
      <button onClick={() => handleExponentClick("^")}>^</button>
    </div>  
  );
}

export default App