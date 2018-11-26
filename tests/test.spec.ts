import { BasePage } from './basePage.po';
import { browser } from 'protractor';

describe('test', () => {
    const basePage = new BasePage();
    browser.waitForAngularEnabled(false);

    const exampleTasks = [
        'pierwsze przykładowe zadanie',
        'drugie przykładowe zadanie',
        'trzecie przykładowe zadanie',
        'dodajmy czwarty task'
    ];
    const usedTasks = [1, 3];
    // need to actually think of something less hardcoded than that, like a random tastks and then go from there

    it('check the heading', () => {
        basePage.openBrowser('http://localhost:8808');
        basePage.checkHeading('To do list:');
    });

    it('add some tasks by clicking enter', () => {

        exampleTasks.forEach(task => {
            basePage.writeTask(task);
            basePage.clickEnter();
        });
    });

    it('check tasks on list, refresh the page page and check again', () => {

        exampleTasks.forEach(task => {
            basePage.checkTaskListByValue(exampleTasks.indexOf(task) + 1, task);
        });
        basePage.refresh();
        exampleTasks.forEach(task => {
            basePage.checkTaskListByValue(exampleTasks.indexOf(task) + 1, task);
        });
    });

    it('check used tasks, check if checked, refresh and check again', () => {

        basePage.checkTask(usedTasks);
        basePage.checkTaskListByCss(usedTasks, 'text-decoration', 'line-through');
        basePage.refresh();
        basePage.checkTaskListByCss(usedTasks, 'text-decoration', 'line-through');
    });

    it('should delete used tasks and check if gone, refresh and check again', () => {

        basePage.deleteTask(usedTasks);
        basePage.expectLeftTasksNumber(exampleTasks.length - usedTasks.length);
        basePage.refresh();
        basePage.expectLeftTasksNumber(exampleTasks.length - usedTasks.length);
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
            basePage.checkTaskListByValue(exampleTasks.indexOf(task) + 1, task);
        });
        basePage.refresh();
        exampleTasks.forEach(task => {
            basePage.checkTaskListByValue(exampleTasks.indexOf(task) + 1, task);
        });
    });
});
