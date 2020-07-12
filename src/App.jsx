import React, { useState } from 'react';
import './App.css';
import DICTIONARY from './dictionary';

const wordIsInDic = (word, dictionary) => dictionary.includes(word);

const checkWord = (e) => {
  e.preventDefault();
  const result = wordIsInDic(e.target.testWord.value, DICTIONARY)
    ? 'correct'
    : 'incorrect';
  setResult(result);
};

function App() {
  const [result, setResult] = useState('');
  return (
    <div className="App">
      <form onSubmit={checkWord}>
        <label htmlFor="testWord">Type the word you want to check</label>
        <input type="text" id="testWord" name="testWord" />
        <input type="submit" value="Check" />
      </form>
      <div>{result}</div>
    </div>
  );
}

export default App;
export { wordIsInDic };
