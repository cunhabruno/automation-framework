import PageObject from './page-objects';
import Helpers from '../../lib/helpers';
const pageObjects = new PageObject();

const helpers = new Helpers(browser);

browser.get('http://www.ulbra.br/');

//browser.executeScript('$(\'[name="superior"]\').hide()');
helpers.isElementDisplayed(pageObjects.unidadeDropdown);
helpers.clickOnElementIfDisplayed(pageObjects.unidadeDropdown, 20000, 'Test');


