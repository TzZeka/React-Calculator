import React, { useState } from "react";
import "./calculator.css";

const Calculator = () => {
  let [result, setResult] = useState("");

  const handleClick = (e) => {
    const newSymbol = e.target.name;
    const lastChar = result.charAt(result.length - 1);

    if (result.length >= 16) {
      setResult("!Too Big Input");
      return;
    }

    if (result.charAt(0) === "0" && result.length === 1) {
      return;
    } else if (result.charAt(0) === "0") {
      result = result.slice(1, result.length);
    }

    const operators = ["+", "-", "*", "/", "."];

    if (operators.includes(newSymbol) && operators.includes(lastChar)) {
      return;
    }
    setResult(result.concat(newSymbol));
  };

  const clear = () => {
    setResult("");
  };

  const backSpace = () => {
    setResult(result.slice(0, result.length - 1));
  };

  const calculate = () => {
    try {
      let calculatedResult = eval(result).toString();
      if (calculatedResult.includes(".")) {
        calculatedResult = +calculatedResult;
        calculatedResult = calculatedResult.toFixed(4).toString();
      }
      setResult(calculatedResult);
    } catch (err) {
      setResult(result);
    }
  };
  return (
    <div className="container">
      <h3>Calculator</h3>
      <form action="">
        <input type="text" value={result} />
      </form>

      <div className="calculator">
        <section action="">
          <div className="special">
            <button onClick={clear} className="clear color">
              CE
            </button>
            <button name="/" className="color" onClick={handleClick}>
              /
            </button>
            <button name="*" className="color" onClick={handleClick}>
              *
            </button>
            <button onClick={backSpace} className="backspace color">
              C
            </button>
          </div>

          <div>
            <button name="7" onClick={handleClick}>
              7
            </button>
            <button name="8" onClick={handleClick}>
              8
            </button>
            <button name="9" onClick={handleClick}>
              9
            </button>
            <button name="-" className="color" onClick={handleClick}>
              -
            </button>
          </div>
          <div>
            <button name="4" onClick={handleClick}>
              4
            </button>
            <button name="5" onClick={handleClick}>
              5
            </button>
            <button name="6" onClick={handleClick}>
              6
            </button>
            <button name="+" className="color" onClick={handleClick}>
              +
            </button>
          </div>
          <div>
            <button name="1" onClick={handleClick}>
              1
            </button>
            <button name="2" onClick={handleClick}>
              2
            </button>
            <button name="3" onClick={handleClick}>
              3
            </button>
          </div>
          <div>
            <button name="00" onClick={handleClick}>
              00
            </button>
            <button name="0" onClick={handleClick}>
              0
            </button>
            <button name="." className="color" onClick={handleClick}>
              .
            </button>
            <button onClick={calculate} className="equal color">
              =
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Calculator;
