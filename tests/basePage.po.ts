import { browser, element, by, protractor, promise } from 'protractor';

export class BasePage {
    public heading = element(by.xpath('//div[1]/h2[1]'));
    public input = element(by.xpath('//input[1]'));
    public addButton = element(by.xpath('//button[@id=\'addBtn\']'));
    public list = element(by.tagName('ul'));
    public allListElements = element.all(by.tagName('li'));
    public clearButton = element(by.xpath('//button[@id=\'clearButton\']'))

    public openBrowser = (url: string): promise.Promise<void> => browser.get(url);

    public pause = (): promise.Promise<void> => {
        const sec = 1000;

        return browser.driver.sleep(sec);
    }

    public checkHeading = (title: string): promise.Promise<void> =>
        this.heading.getText().then(text => {
            expect(text).toBe(title);
        });

    public writeTask = (task: string): promise.Promise<void> => this.input.sendKeys(task);

    public clickAdd = (): promise.Promise<void> => this.addButton.click();

    public clickEnter = (): promise.Promise<void> =>
        browser
            .actions()
            .sendKeys(protractor.Key.ENTER)
            .perform();

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
    )};

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

    public randomIndex = (max): number => Math.floor(Math.random() * Math.floor(max) + 1);

    public refresh = (): promise.Promise<void> => browser.refresh();
}
