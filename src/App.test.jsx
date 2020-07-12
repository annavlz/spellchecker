import * as React from 'react';
import { render } from '@testing-library/react';
import App, { check } from './App';
import DICTIONARY from './dictionary';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Spellchecker/i);
  expect(linkElement).toBeInTheDocument();
});

test('checks if the word in the dictionary', () => {
  const randomIndexInDic = Math.round(Math.random() * DICTIONARY.length);
  const goodTestWord = DICTIONARY[randomIndexInDic];
  expect(check(goodTestWord, DICTIONARY)).toBeTruthy();
  expect(check('abcdrf', DICTIONARY)).toBeFalsy();
});
