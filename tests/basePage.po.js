"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var BasePage = /** @class */ (function () {
    function BasePage() {
        this.heading = protractor_1.element(protractor_1.by.xpath("//div[1]/h2[1]"));
        this.input = protractor_1.element(protractor_1.by.xpath("//input[1]"));
        this.addButton = protractor_1.element(protractor_1.by.xpath("//button[@id='addBtn']"));
    }
    BasePage.prototype.openBrowser = function (url) {
        protractor_1.browser.get(url);
    };
    BasePage.prototype.pause = function () {
        protractor_1.browser.driver.sleep(1000);
    };
    BasePage.prototype.checkHeading = function () {
        this.heading.getText().then(function (text) {
            expect(text).toBe("To do list:");
        });
    };
    BasePage.prototype.writeTask = function (task) {
        this.input.sendKeys(task);
    };
    BasePage.prototype.clickAdd = function () {
        this.addButton.click();
    };
    BasePage.prototype.clickEnter = function () {
        protractor_1.browser
            .actions()
            .sendKeys(protractor_1.protractor.Key.ENTER)
            .perform();
    };
    BasePage.prototype.checkTaskList = function (liIndex, liValue) {
        var liElement = protractor_1.element(protractor_1.by.xpath("//ul//li[" + liIndex + "]"));
        liElement.getText().then(function (text) {
            expect(text).toContain(liValue);
        });
    };
    return BasePage;
}());
exports.BasePage = BasePage;
;
//# sourceMappingURL=basePage.po.js.map