import * as React from 'react';
import { render } from '@testing-library/react';
import App, { wordIsInDic } from './App';
import { getRandomIndexInList } from './utils';
import DICTIONARY from './dictionary';

test('renders the form', () => {
  const { getByLabelText, getByText } = render(<App />);
  const input = getByLabelText(/Type the word you want to check/i);
  expect(input).toBeInTheDocument();
  const submit = getByText('Check');
  expect(submit).toBeInTheDocument();
});

test('checks if the word in the dictionary', () => {
  const goodTestWord = DICTIONARY[getRandomIndexInList(DICTIONARY)];
  const badTestWord = 'asjskadl';
  expect(wordIsInDic(goodTestWord, DICTIONARY)).toBeTruthy();
  expect(wordIsInDic(badTestWord, DICTIONARY)).toBeFalsy();
});
