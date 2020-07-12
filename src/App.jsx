import React from 'react';
import './App.css';
import DICTIONARY from './dictionary';

function App() {
  console.log(DICTIONARY);
  return (
    <div className="App">
      <ul>
        {DICTIONARY.map((word) => (
          <li>{word}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
