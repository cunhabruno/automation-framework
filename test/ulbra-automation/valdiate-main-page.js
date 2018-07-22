import PageObject from './page-objects';
import Helpers from '../../lib/helpers';
const pageObjects = new PageObject();

const helpers = new Helpers(browser);

export default class ValidateMainPage {
    constructor(){

    }
    async testFirstPage() {
        browser.get('http://www.ulbra.br/');
        await browser.sleep(3000);
        browser.executeScript('document.getElementsByName("superior").disabled = true;');
        await helpers.waitElementToBeClickAble(pageObjects.unidadeDropdown, 2000, 'bb');
        await helpers.clickOnElementIfDisplayed(pageObjects.unidadeDropdown, 2000, 'Test');
    }
}

const v = new ValidateMainPage();
v.testFirstPage();


