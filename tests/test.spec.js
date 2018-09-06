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
        "trzecie przykładowe zadanie",
        "dodajmy czwarty task"
    ];
    it("check the heading", function () {
        basePage.openBrowser("http://localhost:8808");
        basePage.checkHeading("To do list:");
    });
    it("add some tasks", function () {
        exampleTasks.forEach(function (task) {
            basePage.writeTask(task);
            basePage.clickEnter();
        });
        for (var i = 0; i < exampleTasks.length; i++) {
            basePage.writeTask(exampleTasks[i]);
            basePage.clickEnter();
        }
    });
    it("check tasks on list", function () {
        for (var i = 0; i < exampleTasks.length; i++) {
            basePage.checkTaskList(i + 1, exampleTasks[i]);
        }
    });
    it("should delete all the task", function () {
        for (var i = 1; i < exampleTasks.length + 1; i++) {
            basePage.deleteTask(i);
        }
        basePage.ul.getText().then(function (text) { return expect(text).toBeFalsy(); });
    });
});
//# sourceMappingURL=test.spec.js.map