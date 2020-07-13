/// <reference types="cypress" />
import '@testing-library/cypress/add-commands';
import DICTIONARY from '../../../src/dictionary.js';
import { getRandomIndexInList } from '../../../src/utils.js';

context('App', () => {
  it('user can spellcheck a word', () => {
    const goodWord = DICTIONARY[getRandomIndexInList(DICTIONARY)];
    const badWord = 'sdlskdl';
    cy.visit('/');
    cy.get('form')
      .findByLabelText(/Type the word you want to check/i)
      .type(goodWord);
    cy.findByText('Check').click();
    cy.findByText('correct').should('exist');
    cy.get('form')
      .findByLabelText(/Type the word you want to check/i)
      .clear()
      .type(badWord);
    cy.findByText('Check').click();
    cy.findByText('incorrect').should('exist');
  });
});
