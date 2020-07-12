import React from 'react';
import './App.css';
import DICTIONARY from './dictionary';

const check = (word, dictionary) => dictionary.includes(word);

function App() {
  const result = '';
  return (
    <div className="App">
      <form>
        <label htmlFor="testWord">Type the word you want to check</label>
        <input type="text" id="testWord" />
        <input type="submit" value="Check" />
      </form>
      <div>{result}</div>
    </div>
  );
}

export default App;
export { check };
