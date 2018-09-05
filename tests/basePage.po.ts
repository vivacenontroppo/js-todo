import { browser, element, by, protractor } from "protractor";

export class BasePage {
    heading = element(by.xpath("//div[1]/h2[1]"));
    input = element(by.xpath("//input[1]"));
    addButton = element(by.xpath("//button[@id='addBtn']"));

    openBrowser(url: string) {
        browser.get(url);
    }

    pause() {
        browser.driver.sleep(1000);
    }

    checkHeading() {
        this.heading.getText().then(text => {
            expect(text).toBe("To do list:");
        });
    }

    writeTask(task) {
        this.input.sendKeys(task);
    }

    clickAdd() {
        this.addButton.click();
    }

    clickEnter() {
        browser
            .actions()
            .sendKeys(protractor.Key.ENTER)
            .perform();
    }

    checkTaskList(liIndex, liValue) {
        var liElement = element(by.xpath(`//ul//li[${liIndex}]`));
        liElement.getText().then(text => {
            expect(text).toContain(liValue);
        });
    }
};
