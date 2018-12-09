"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var basePage_po_1 = require("./basePage.po");
var protractor_1 = require("protractor");
var common_config_repo_1 = require("./common.config.repo");
describe('test', function () {
    protractor_1.browser.waitForAngularEnabled(false);
    var basePage = new basePage_po_1.BasePage();
    var commonConfig = new common_config_repo_1.CommonConfig;
    var exampleTasks = commonConfig.testData.exampleTasks;
    var useTask = basePage.randomize(exampleTasks);
    console.log('Tasks used for check and delete test: ' + useTask);
    it('check the heading', function () {
        basePage.openBrowser('http://localhost:8808');
        basePage.checkHeading(commonConfig.copy.header);
    });
    it('add some tasks by clicking enter', function () {
        exampleTasks.forEach(function (task) {
            basePage.writeTask(task);
            basePage.clickEnter();
        });
    });
    it('check tasks on list, refresh the page page and check again', function () {
        exampleTasks.forEach(function (task) {
            basePage.checkTaskListByValue(exampleTasks.indexOf(task), task);
        });
        basePage.refresh();
        exampleTasks.forEach(function (task) {
            basePage.checkTaskListByValue(exampleTasks.indexOf(task), task);
        });
    });
    it('check used tasks, check if checked, refresh and check again', function () {
        basePage.checkTask(useTask);
        basePage.checkTaskListByCss(useTask, 'text-decoration', 'line-through');
        basePage.refresh();
        basePage.checkTaskListByCss(useTask, 'text-decoration', 'line-through');
    });
    it('should delete used tasks and check if gone, refresh and check again', function () {
        basePage.deleteTask(useTask);
        basePage.expectLeftTasksNumber(exampleTasks.length - useTask.length);
        basePage.refresh();
        basePage.expectLeftTasksNumber(exampleTasks.length - useTask.length);
    });
    it('should click delete all, check if gone, refresh and check again', function () {
        basePage.clickClearAll();
        basePage.expextListToBeEmpty();
        basePage.refresh();
        basePage.expextListToBeEmpty();
    });
    it('add some tasks by clicking add button and check them', function () {
        exampleTasks.forEach(function (task) {
            basePage.writeTask(task);
            basePage.clickEnter();
        });
        exampleTasks.forEach(function (task) {
            basePage.checkTaskListByValue(exampleTasks.indexOf(task), task);
        });
        basePage.refresh();
        exampleTasks.forEach(function (task) {
            basePage.checkTaskListByValue(exampleTasks.indexOf(task), task);
        });
    });
});
//# sourceMappingURL=test.spec.js.map