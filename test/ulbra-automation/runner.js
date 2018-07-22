require('babel-register');
const webdriver = require('selenium-webdriver');

global.browser = new webdriver.Builder().usingServer('http://192.168.0.6:4444/wd/hub').withCapabilities({'browserName': 'chrome'}).build();
require('./cucumber-runner');