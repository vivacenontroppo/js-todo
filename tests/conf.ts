import { Config } from 'protractor';

export let config: Config = {
    framework: 'jasmine',
    specs: ['./test.spec.js'],
    seleniumAddress: 'http://localhost:4444/wd/hub'
};
