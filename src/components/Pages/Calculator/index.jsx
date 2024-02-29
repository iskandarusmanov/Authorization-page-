import React from 'react'
import { useState } from 'react';
import './Calculator.scss'

export default function Calculator() {
    const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(result).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setResult('');
    } else {
      setResult(result + value);
    }
  };

  return (
    <div className="calculator">
      <input placeholder='000000000000' type="text" value={result} readOnly />
      <div className="calc__nums">
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('C')}>C</button>
        <button onClick={() => handleClick('=')}>=</button>
        <button onClick={() => handleClick('/')}>/</button>
      </div>
    </div>
  );
}
