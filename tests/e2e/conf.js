"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HtmlScreenshotReporter = require("protractor-jasmine2-screenshot-reporter");
exports.config = {
    framework: 'jasmine',
    specs: ['./test.spec.js'],
    seleniumServerJar: '../node_modules/webdriver-manager/selenium/selenium-server-standalone-3.141.59.jar',
    defaultTimeoutInterval: 10000,
    onPrepare: function () {
        jasmine.getEnv().addReporter(new HtmlScreenshotReporter({
            dest: "tests/screenshots/" + new Date(),
            filename: 'report.html',
            captureOnlyFailedSpecs: true
        }));
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
        }
    ]
    // seleniumAddress: 'http://localhost:4444/wd/hub'
};
//# sourceMappingURL=conf.js.map