import { BasePage } from './basePage.po';
import { browser } from 'protractor';

describe('test', () => {
    const basePage = new BasePage();
    browser.ignoreSynchronization = true;

    const exampleTasks = [
        'pierwsze przykładowe zadanie',
        'drugie przykładowe zadanie',
        'trzecie przykładowe zadanie',
        'dodajmy czwarty task'
    ];

    it('check the heading', () => {
        basePage.openBrowser('http://localhost:8808');
        basePage.checkHeading('To do list:');
    });

    it('add some tasks', () => {

        exampleTasks.forEach(task => {
            basePage.writeTask(task);
            basePage.clickEnter();
        });
    });

    it('check tasks on list', () => {

        for (let i = 0; i < exampleTasks.length; i++) {
            basePage.checkTaskList(i + 1, exampleTasks[i]);
        }
    });

    it('should delete all the task and check if they are gone', () => {

        for (let i = 1; i < exampleTasks.length + 1; i++) {
            basePage.deleteTask(i);
        }
        basePage.ul.getText().then(text => expect(text).toBeFalsy());
    });
});
