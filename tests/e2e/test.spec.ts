// tslint:disable:no-console

import { BasePage } from './basePage.po';
import { browser } from 'protractor';
import { CommonConfig } from './common.config.repo';

describe('test', () => {

    browser.waitForAngularEnabled(false);
    const basePage = new BasePage();
    const commonConfig = new CommonConfig();
    const exampleTasks = commonConfig.testData.exampleTasks;
    const useTask: number[] = basePage.randomize(exampleTasks);
    console.log(`Tasks used for check and delete test: ${useTask}`);

    it('check the heading', () => {
        basePage.openBrowser(browser.baseUrl);
        basePage.checkHeading(commonConfig.copy.header);
    });

    it('add some tasks by clicking enter', () => {

        exampleTasks.forEach(task => {
            basePage.writeTask(task);
            basePage.clickEnter();
        });
    });

    it('check tasks on list, refresh the page page and check again', () => {

        exampleTasks.forEach(task => {
            basePage.checkTaskListByValue(exampleTasks.indexOf(task), task);
        });
        basePage.refresh();
        exampleTasks.forEach(task => {
            basePage.checkTaskListByValue(exampleTasks.indexOf(task), task);
        });
    });

    it('check used tasks, check if checked, refresh and check again', () => {

        basePage.checkTask(useTask);
        basePage.checkTaskListByCss(useTask, 'text-decoration', 'line-through');
        basePage.refresh();
        basePage.checkTaskListByCss(useTask, 'text-decoration', 'line-through');
    });

    it('should delete used tasks and check if gone, refresh and check again', () => {

        basePage.deleteTask(useTask);
        basePage.expectLeftTasksNumber(exampleTasks.length - useTask.length);
        basePage.refresh();
        basePage.expectLeftTasksNumber(exampleTasks.length - useTask.length);
    });

    it('should click delete all, check if gone, refresh and check again', () => {

        basePage.clickClearAll();
        basePage.expextListToBeEmpty();
        basePage.refresh();
        basePage.expextListToBeEmpty();
    });

    it('add some tasks by clicking add button and check them', () => {

        exampleTasks.forEach(task => {
            basePage.writeTask(task);
            basePage.clickEnter();
        });
        exampleTasks.forEach(task => {
            basePage.checkTaskListByValue(exampleTasks.indexOf(task), task);
        });
        basePage.refresh();
        exampleTasks.forEach(task => {
            basePage.checkTaskListByValue(exampleTasks.indexOf(task), task);
        });
    });
});
