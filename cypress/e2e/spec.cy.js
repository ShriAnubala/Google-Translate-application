/// <reference types="Cypress" />
import { translationPage as TP } from '../support/pageObject/translation';

describe('This is to verify google tranlation from one language to another', () => {
  beforeEach(() => {
    cy.fixture('dataFile.json').as('testData');
  });
  it('Translation', () => {
    cy.visit('https://translate.google.com')
    TP.getSourceDropDown().click();
    cy.get('@testData').then((data) => {
      TP.getSourceLanguage(data.sourceLanguage).click();
    });
    TP.getBody().click();
    TP.getTargetSection().within(() => {
      TP.getTargetDropDown().click();
    });
    cy.get('@testData').then((data) => {
      TP.getTargetLanguage(data.translationLanguage).should('have.text', `${data.translationLanguage}`).click({ force: true });
    });
    TP.getBody().click();
    TP.getSourceTab().within(() => {
      cy.get('@testData').then((data) => {
        TP.getLanguageFromTab(data.sourceLanguage).click({ force: true });
      });
    });
    cy.get('@testData').then((data) => {
      TP.getSourceTextArea().clear().type(`${data.initialText}`, { force: true });
    });
    TP.getTargetTab().within(() => {
      cy.get('@testData').then((data) => {
        TP.getLanguageFromTab(data.translationLanguage).click({ force: true });
      });
    });
    cy.get('@testData').then((data) => {
      TP.gerResultText().should('have.text', `${data.expectedResult}`);
    });
  })

  it('Swaping', () => {
    TP.getSwapButton().click();
    cy.get('@testData').then((data) => {
      TP.gerResultText().should('have.text', `${data.initialText}`);
    });
  });

  it('Typing with virtual Key board', () => {
    TP.getSourceTextArea().clear();
    TP.getInputToolMenu().click()
    TP.getVirtualKeyboard().click();
    cy.get('@testData').then((data) => {
      const word = data.wordToType.split('')
      word.forEach(temp => {
        cy.get('body').then((keypad) => {
          if (keypad.find(`span[class="vk-cap"]:contains(${temp})`).length) {
            TP.getCharacterOnVgKeyboard(temp).click()
          } else {
            TP.getShifKeyOnVgKeyboard().click();
            TP.getCharacterOnVgKeyboard(temp).click();
          }
        });
      })
    });
  });
})