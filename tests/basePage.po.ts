import { browser, element, by, protractor, promise } from 'protractor';
import * as fs from 'fs';

export class BasePage {
    public heading = element(by.xpath('//div[1]/h2[1]'));
    public input = element(by.xpath('//input[1]'));
    public addButton = element(by.xpath('//button[@id=\'addBtn\']'));
    public list = element(by.tagName('ul'));
    public allListElements = element.all(by.tagName('li'));
    public clearButton = element(by.xpath('//button[@id=\'clearButton\']'));
    public currentDate = new Date();

    public openBrowser = (url: string): promise.Promise<void> => browser.get(url);

    public pause = (sec: number): promise.Promise<void> => {
      
        return browser.driver.sleep(sec * 1000);
    }

    public checkHeading = (title: string): promise.Promise<void> =>
        this.heading.getText().then(text => {
            expect(text).toBe(title);
        });

    public writeTask = (task: string): promise.Promise<void> => this.input.sendKeys(task);

    public clickAdd = (): promise.Promise<void> => this.addButton.click();

    public clickEnter = (): promise.Promise<void> =>
        this.input.sendKeys(protractor.Key.RETURN);

    public checkTaskListByValue = (liIndex: number, liValue: string): promise.Promise<boolean> => {
        const liElement = element(by.xpath(`//ul//li[${liIndex}]`));

        return liElement.getText()
            .then(text => expect(text).toContain(liValue));
    }

    public checkTaskListByCss = (tasksIndexes: number[], cssProperty: string, cssValue: string): void => {
        tasksIndexes.forEach(taskIndex => {
            const liElement = element(by.xpath(`//ul[@id='ul']//li[${taskIndex}]`));
            liElement.getCssValue(cssProperty)
            .then(property => expect(property).toContain(cssValue));
        }
    ); };

    public checkTask = (tasksIndexes: number[]): void =>
        tasksIndexes.forEach(taskIndex =>
            element(by.xpath(`//ul[@id='ul']//li[${taskIndex}]`)).click());

    public deleteTask = (tasksIndexes: number[]): void =>
        tasksIndexes.forEach(taskIndex =>
            element(by.xpath(`//ul[@id='ul']//li[${taskIndex}]//button`)).click());

    public expectLeftTasksNumber = (expected): promise.Promise<boolean> =>
    this.allListElements.count().then(numberLeft => expect(numberLeft).toBe(expected))

    public clickClearAll = (): promise.Promise<void> => this.clearButton.click();

    public expextListToBeEmpty = (): promise.Promise<boolean> =>
    this.list.getText().then(text => expect(text).toBeFalsy());

    public writeScreenShot = (data, filename) => {
        const stream = fs.createWriteStream(filename);
        stream.write(new Buffer (data, 'base64'));
        stream.end();
      };

    public takeScreenShot = (): promise.Promise<void> => browser.takeScreenshot().then(png => this.writeScreenShot(png, `./tests/screenshots/${this.currentDate}.png`));

    public randomIndex = (max): number => Math.floor(Math.random() * Math.floor(max) + 1);

    public refresh = (): promise.Promise<void> => browser.refresh();

}
