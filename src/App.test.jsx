import * as React from 'react';
import { render } from '@testing-library/react';
import App, { wordIsInDic } from './App';
import DICTIONARY from './dictionary';

test('renders the form', () => {
  const { getByLabelText, getByText } = render(<App />);
  const input = getByLabelText(/Type the word you want to check/i);
  expect(input).toBeInTheDocument();
  const submit = getByText('Check');
  expect(submit).toBeInTheDocument();
});

test('checks if the word in the dictionary', () => {
  const randomIndexInDic = Math.round(Math.random() * DICTIONARY.length);
  const goodTestWord = DICTIONARY[randomIndexInDic];
  expect(wordIsInDic(goodTestWord, DICTIONARY)).toBeTruthy();
  expect(wordIsInDic('abcdrf', DICTIONARY)).toBeFalsy();
});
