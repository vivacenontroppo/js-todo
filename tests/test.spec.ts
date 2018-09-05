import { BasePage } from "./basePage.po";
import { browser } from "protractor";

describe("test", () => {
    const basePage = new BasePage();
    browser.ignoreSynchronization = true;

    const exampleTasks = [
        "pierwsze przykładowe zadanie",
        "drugie przykładowe zadanie",
        "trzecie przykładowe zadanie"
    ];

    it("check the heading", () => {
        basePage.openBrowser("http://localhost:8808");
        basePage.checkHeading();
    });

    it("add some tasks", () => {
        basePage.writeTask(exampleTasks[0]);
        basePage.input
            .getAttribute("value")
            .then(text => expect(text).toEqual("pierwsze przykładowe zadanie"));
        basePage.clickEnter();
        basePage.writeTask(exampleTasks[1]);
        basePage.clickEnter();
        basePage.writeTask(exampleTasks[2]);
        basePage.clickEnter();
    });

    it("check tasks on list", () => {

        basePage.checkTaskList(1, exampleTasks[0])
        basePage.checkTaskList(2, exampleTasks[1])
        basePage.checkTaskList(3, exampleTasks[2])

    })

});
