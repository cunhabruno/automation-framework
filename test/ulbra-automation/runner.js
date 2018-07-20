require('babel-register');
const webdriver = require('selenium-webdriver');

global.browser = new webdriver.Builder().usingServer('http://10.95.2.220:4444/wd/hub').withCapabilities({'browserName': 'chrome'}).build();
require('./valdiate-main-page');