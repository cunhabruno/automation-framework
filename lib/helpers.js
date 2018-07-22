import {until, WebElement} from 'selenium-webdriver';
class Helpers{

    constructor(driver) {
        this.driver = driver;
    }

    /**
     * Click in an element if it is displayed otherwise nothing is done
     * @param {By} elementLocator = the element locator to click
     * @param {int} timeOut = the time out in ms to wait the element to be displayed
     * @param {string} elementDescription = a description of the element to inform on log message
     */
    async clickOnElementIfDisplayed(elementLocator, timeOut, elementDescription) {
        console.log('displayed')
        return await this.driver.wait(() => {return this.isElementDisplayed(elementLocator)},timeOut, 'Timed out').then((result) => {
            if(result) {
                console.log('Clicking on ' + elementDescription);
                return this.driver.findElement(elementLocator).click();
            }

            return result;

        }, error => {
            console.log('Click not performed ' + error);
        });
    }

    /**
     * Click in an element if it is displayed otherwise nothing is done
     * @param {By} elementLocator = the element locator to click
     * @param {int} timeOut = the time out in ms to wait the element to be displayed
     * @param {string} elementDescription = a description of the element to inform on log message
     */
    async waitElementToBeClickAble(elementLocator, timeOut, elementDescription) {
        console.log('clickable');
        return await this.driver.wait(() => {return this.isElementEnabled(elementLocator);},timeOut, 'Timed out')
            .then((result) => {
            if(result) {
                console.log('Element ' + elementDescription + ' is click able');
                return result;
            }

            return result;

        }, error => {
            console.log('Element is not Click able ' + error);
        });
    }

    isElementDisplayed(elementLocator) {
            return this.driver.findElements(elementLocator).then((elms) => {
                if(elms.length > 0) {
                    return elms[0].isDisplayed().then(displayed => displayed);
                } else {
                    return false;
                }
            }, (err) => {
                return false;
            });
    }

    isElementEnabled(elementLocator) {
        this.isElementDisplayed(elementLocator).then((displayed) => {
           if(displayed) {
               this.driver.findElement(elementLocator).isEnabled().then((enabled) => {
                   return enabled;
               })
           }

           return displayed;
        });
    }
}

module.exports = Helpers;