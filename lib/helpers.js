import {until, WebElement} from 'selenium-webdriver';
class Helpers {

    constructor(driver) {
        this.driver = driver;
    }

    /**
     * Click in an element if it is displayed otherwise nothing is done
     * @param {By} elementLocator = the element locator to click
     * @param {int} timeOut = the time out in ms to wait the element to be displayed
     * @param {string} elementDescription = a description of the element to inform on log message
     */
   clickOnElementIfDisplayed(elementLocator, timeOut, elementDescription) {
        this.driver.wait(this.isElementDisplayed(elementLocator), timeOut).then(() => {
            this.driver.findElement(elementLocator).click();
        }, error => {
            console.log(error);
        });
    }

     isElementDisplayed(elementLocator) {
       return this.driver.findElements(elementLocator).catch(rejected => {
           return false;
       })

    }
}

module.exports = Helpers;