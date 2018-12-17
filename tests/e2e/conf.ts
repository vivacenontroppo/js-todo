import { Config } from 'protractor';
import * as HtmlScreenshotReporter from 'protractor-jasmine2-screenshot-reporter';

export let config: Config = {
    framework: 'jasmine',
    specs: ['./test.spec.js'],
    seleniumServerJar: '../../node_modules/webdriver-manager/selenium/selenium-server-standalone-3.141.59.jar',
    defaultTimeoutInterval: 10000,
    onPrepare: (): void => {
      jasmine.getEnv().addReporter(
        new HtmlScreenshotReporter({
          dest: `tests/screenshots/${new Date()}`,
          filename: 'report.html',
          captureOnlyFailedSpecs: true
        })
      );
   },
   jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 10000,
  },
  multiCapabilities: [
  //   {
  //   'browserName': 'firefox'
  // },
   {
    browserName: 'chrome'
  }]
    // seleniumAddress: 'http://localhost:4444/wd/hub'
};
