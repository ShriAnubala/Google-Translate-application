export class TranslationPage {
    getSourceDropDown() {
        return cy.contains('button','Detect language').parents('div[jsname="HexNre"]').siblings('button[aria-label="More source languages"]');
    };
    getSourceLanguage(sourceLaguage) {  // This can be typed by using type script
        return cy.contains('div.Llmcnf',`${sourceLaguage}`).should('have.text',`${sourceLaguage}`);
    };
    getBody() {
        return cy.get('body[id="yDmH0d"]');
    }
    getTargetSection () {
        return cy.contains('div[class="tm8pq"]','Translation').parents('div[class="AxqVh"]').siblings('div[class="aCQag"]');
    };
    getTargetDropDown() {
       return cy.get('button[aria-label="More target languages"]');
    };
    getTargetLanguage(targetLanguage) {
        return cy.contains('div.Llmcnf',`${targetLanguage}`).should('have.text',`${targetLanguage}`);
    };
    getSourceTab() {
        return cy.get('div[class="akczyd"]').first();
    };
    getLanguageFromTab(sourceLanguage) {
        return cy.contains('span[class="VfPpkd-jY41G-V67aGc"]',`${sourceLanguage}`);
    };
    getSourceTextArea() {
        return cy.get('textarea[aria-label="Source text"]');
    };
    getTargetTab() {
        return cy.get('div[class="akczyd"]').eq(1);
    };
    gerResultText() {
        return cy.get('span[class="Q4iAWc"]')
    };
    getSwapButton() {
        return cy.get('button[aria-label ="Swap languages (Ctrl+Shift+S)"]').first();
    };
    getInputToolMenu() {
        return cy.get('a[aria-label="Show the Input Tools menu"]');
    };
    getVirtualKeyboard() {
        return cy.get('a[aria-label="Show the Input Tools menu"]').siblings('a');
    };
    getShifKeyOnVgKeyboard() {
        return cy.get('button[id="K16"]').first();
    };
    getCharacterOnVgKeyboard(character) {
        return cy.contains('span[class="vk-cap"]',`${character}`);
    };
    getVgKeyboardContainer(){
        return cy.get('#kbd');
    };

};
export const translationPage = new TranslationPage();