import React, { useState, useEffect } from 'react';
import './App.css';
import DICTIONARY from './dictionary';

const check = (word, dictionary) => dictionary.includes(word);

function App() {
  const [result, setResult] = useState('');
  const calcResult = (e) => {
    e.preventDefault();
    const result = check(e.target.testWord.value, DICTIONARY)
      ? 'correct'
      : 'incorrect';
    setResult(result);
  };

  return (
    <div className="App">
      <form onSubmit={calcResult}>
        <label htmlFor="testWord">Type the word you want to check</label>
        <input type="text" id="testWord" name="testWord" />
        <input type="submit" value="Check" />
      </form>
      <div>{result}</div>
    </div>
  );
}

export default App;
export { check };
