import { Config } from 'protractor';

export let config: Config = {
    framework: 'jasmine',
    specs: ['./test.spec.js'],
    seleniumServerJar: '../node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.14.0.jar'
    //seleniumAddress: 'http://localhost:4444/wd/hub'
};