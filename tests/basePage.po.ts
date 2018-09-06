import { browser, element, by, protractor, promise } from 'protractor';

export class BasePage {
    public heading = element(by.xpath('//div[1]/h2[1]'));
    public input = element(by.xpath('//input[1]'));
    public addButton = element(by.xpath('//button[@id=\'addBtn\']'));
    public ul = element(by.xpath(`//ul`));

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

    public checkTaskList = (liIndex: number, liValue: string): promise.Promise<boolean> => {
        const liElement = element(by.xpath(`//ul//li[${liIndex}]`));

        return liElement.getText()
            .then(text => expect(text).toContain(liValue));
    }

    public deleteTask = (liIndex: number): promise.Promise<void> =>
    element(by.xpath(`//ul[@id='ul']//li[${liIndex}]//button`)).click();
}
