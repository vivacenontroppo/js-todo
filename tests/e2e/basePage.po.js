"use strict";
/* tslint:disable: no-magic-numbers*/
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var fs = require("fs");
var common_config_repo_1 = require("./common.config.repo");
var BasePage = /** @class */ (function () {
    function BasePage() {
        var _this = this;
        this.heading = protractor_1.element(protractor_1.by.xpath('//div[1]/h2[1]'));
        this.input = protractor_1.element(protractor_1.by.xpath('//input[1]'));
        this.addButton = protractor_1.element(protractor_1.by.xpath('//button[@id=\'addBtn\']'));
        this.list = protractor_1.element(protractor_1.by.tagName('ul'));
        this.allListElements = protractor_1.element.all(protractor_1.by.tagName('li'));
        this.clearButton = protractor_1.element(protractor_1.by.xpath('//button[@id=\'clearButton\']'));
        this.currentDate = new Date();
        this.commonConfig = new common_config_repo_1.CommonConfig;
        this.openBrowser = function (url) { return protractor_1.browser.get(url); };
        this.randomize = function (tasks) {
            var set = new Set();
            tasks.forEach(function (_element) {
                set.add((Math.floor((Math.random() * tasks.length) + 1)));
            });
            var compareNumbers = function (a, b) { return b - a; };
            return Array.from(set).sort(compareNumbers);
        };
        this.pause = function (sec) {
            return protractor_1.browser.driver.sleep(sec * 1000);
        };
        this.checkHeading = function (title) {
            return _this.heading.getText().then(function (text) {
                expect(text).toBe(title);
            });
        };
        this.writeTask = function (task) { return _this.input.sendKeys(task); };
        this.clickAdd = function () { return _this.addButton.click(); };
        this.clickEnter = function () {
            return _this.input.sendKeys(protractor_1.protractor.Key.RETURN);
        };
        this.checkTaskListByValue = function (liIndex, liValue) {
            var liElement = protractor_1.element(protractor_1.by.xpath("//ul//li[" + (liIndex + 1) + "]"));
            return liElement.getText()
                .then(function (text) { return expect(text).toContain(liValue); });
        };
        this.checkTaskListByCss = function (tasksIndexes, cssProperty, cssValue) {
            tasksIndexes.forEach(function (taskIndex) {
                var liElement = protractor_1.element(protractor_1.by.xpath("//ul[@id='ul']//li[" + taskIndex + "]"));
                liElement.getCssValue(cssProperty)
                    .then(function (property) { return expect(property).toContain(cssValue); });
            });
        };
        this.checkTask = function (tasksIndexes) {
            return tasksIndexes.forEach(function (taskIndex) {
                return protractor_1.element(protractor_1.by.xpath("//ul[@id='ul']//li[" + taskIndex + "]")).click();
            });
        };
        this.deleteTask = function (tasksIndexes) {
            return tasksIndexes.forEach(function (taskIndex) {
                return protractor_1.element(protractor_1.by.xpath("//ul[@id='ul']//li[" + taskIndex + "]//button")).click();
            });
        };
        this.expectLeftTasksNumber = function (expected) {
            return _this.allListElements.count().then(function (numberLeft) { return expect(numberLeft).toBe(expected); });
        };
        this.clickClearAll = function () { return _this.clearButton.click(); };
        this.expextListToBeEmpty = function () {
            return _this.list.getText().then(function (text) { return expect(text).toBeFalsy(); });
        };
        this.takeScreenShot = function () {
            return protractor_1.browser.takeScreenshot().then(function (png) {
                return _this.writeScreenShot(png, "./tests/screenshots/" + _this.currentDate + ".png");
            });
        };
        this.refresh = function () { return protractor_1.browser.refresh(); };
        this.writeScreenShot = function (data, filename) {
            var stream = fs.createWriteStream(filename);
            stream.write(new Buffer(data, 'base64'));
            stream.end();
        };
    }
    return BasePage;
}());
exports.BasePage = BasePage;
//# sourceMappingURL=basePage.po.js.map