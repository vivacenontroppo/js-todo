"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var basePage_po_1 = require("./basePage.po");
var protractor_1 = require("protractor");
describe("test", function () {
    var basePage = new basePage_po_1.BasePage();
    protractor_1.browser.ignoreSynchronization = true;
    var exampleTasks = [
        "pierwsze przykładowe zadanie",
        "drugie przykładowe zadanie",
        "trzecie przykładowe zadanie"
    ];
    it("check the heading", function () {
        basePage.openBrowser("http://localhost:8808");
        basePage.checkHeading();
    });
    it("add some tasks", function () {
        basePage.writeTask(exampleTasks[0]);
        basePage.input
            .getAttribute("value")
            .then(function (text) { return expect(text).toEqual("pierwsze przykładowe zadanie"); });
        basePage.clickEnter();
        basePage.writeTask(exampleTasks[1]);
        basePage.clickEnter();
        basePage.writeTask(exampleTasks[2]);
        basePage.clickEnter();
    });
    it("check tasks on list", function () {
        basePage.checkTaskList(1, exampleTasks[0]);
        basePage.checkTaskList(2, exampleTasks[1]);
        basePage.checkTaskList(3, exampleTasks[2]);
    });
});
//# sourceMappingURL=test.spec.js.map