import React from 'react';
import './App.css';
import DICTIONARY from './dictionary';

const check = (word, dictionary) => dictionary.includes(word);

function App() {
  return <div className="App">Spellchecker</div>;
}

export default App;
export { check };
