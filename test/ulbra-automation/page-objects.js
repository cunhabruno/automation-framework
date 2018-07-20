const webdriver = require('selenium-webdriver');
export default class PageObjects {
    constructor(){
        this.unidadeDropdown = webdriver.By.css('[name="superiora"]');
    }
}