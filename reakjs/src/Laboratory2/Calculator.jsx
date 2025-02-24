import React, { useState } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [equation, setEquation] = useState('');
  const [hasResult, setHasResult] = useState(false);

  const handleNumber = (number) => {
    if (hasResult) {
      setDisplay(number);
      setEquation(number);
      setHasResult(false);
    } else {
      if (display === "0") {
        setDisplay(number);
        setEquation(number);
      } else {
        setDisplay(display + number);
        setEquation(equation + number);
      }
    }
  };

  const handleOperator = (operator) => {
    const lastChar = equation.trim().slice(-1);
    const operators = ['+', '-', '*', '/'];
    const displayOperator = operator === '*' ? '×' : operator === '/' ? '÷' : operator;
    
    if (hasResult) {
      const newEquation = display + ' ' + operator + ' ';
      setEquation(newEquation);
      setDisplay(display + ' ' + displayOperator + ' ');
      setHasResult(false);
    } else {
      if (operators.includes(lastChar)) {
        const newEquation = equation.slice(0, -3) + ' ' + operator + ' ';
        setEquation(newEquation);
        setDisplay(display.slice(0, -3) + ' ' + displayOperator + ' ');
      } else {
        const newEquation = equation + ' ' + operator + ' ';
        setEquation(newEquation);
        setDisplay(display + ' ' + displayOperator + ' ');
      }
    }
  };

  const handleEqual = () => {
    try {
      const result = eval(equation).toString();
      setDisplay(result);
      setEquation(result);
      setHasResult(true);
    } catch (error) {
      setDisplay('Error');
      setEquation('');
      setHasResult(true);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
    setHasResult(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="w-72 bg-white rounded-lg p-5 shadow-lg">
        <div className="bg-gray-100 p-3 mb-4 rounded border border-gray-300">
          <input 
            type="text" 
            className="w-full text-right text-xl bg-gray-100 p-2 border-none focus:outline-none" 
            value={display} 
            readOnly
          />
        </div>
        <div className="grid grid-cols-4 gap-2">
          <button onClick={handleClear} className="col-span-2 p-3 text-white bg-red-500 rounded hover:bg-red-600">C</button>
          <button onClick={() => handleOperator('/')} className="p-3 text-white bg-blue-500 rounded hover:bg-blue-600">÷</button>
          <button onClick={() => handleOperator('*')} className="p-3 text-white bg-blue-500 rounded hover:bg-blue-600">×</button>
          <button onClick={() => handleNumber('7')} className="p-3 bg-gray-300 rounded hover:bg-gray-400">7</button>
          <button onClick={() => handleNumber('8')} className="p-3 bg-gray-300 rounded hover:bg-gray-400">8</button>
          <button onClick={() => handleNumber('9')} className="p-3 bg-gray-300 rounded hover:bg-gray-400">9</button>
          <button onClick={() => handleOperator('-')} className="p-3 text-white bg-blue-500 rounded hover:bg-blue-600">-</button>
          <button onClick={() => handleNumber('4')} className="p-3 bg-gray-300 rounded hover:bg-gray-400">4</button>
          <button onClick={() => handleNumber('5')} className="p-3 bg-gray-300 rounded hover:bg-gray-400">5</button>
          <button onClick={() => handleNumber('6')} className="p-3 bg-gray-300 rounded hover:bg-gray-400">6</button>
          <button onClick={() => handleOperator('+')} className="p-3 text-white bg-blue-500 rounded hover:bg-blue-600">+</button>
          <button onClick={() => handleNumber('1')} className="p-3 bg-gray-300 rounded hover:bg-gray-400">1</button>
          <button onClick={() => handleNumber('2')} className="p-3 bg-gray-300 rounded hover:bg-gray-400">2</button>
          <button onClick={() => handleNumber('3')} className="p-3 bg-gray-300 rounded hover:bg-gray-400">3</button>
          <button onClick={handleEqual} className="p-3 text-white bg-green-500 rounded hover:bg-green-600">=</button>
          <button onClick={() => handleNumber('0')} className="col-span-2 p-3 bg-gray-300 rounded hover:bg-gray-400">0</button>
          <button onClick={() => handleNumber('.')} className="p-3 bg-gray-300 rounded hover:bg-gray-400">.</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
