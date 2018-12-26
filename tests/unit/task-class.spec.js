"use strict";
// tslint:disable: no-magic-numbers
Object.defineProperty(exports, "__esModule", { value: true });
var task_class_1 = require("../../src/task.class");
describe('test task class;', function () {
    var randomizePrirority = function () { return ((Math.floor((Math.random() * 5) + 1))); };
    var randomizeBoolean = function () { return Math.random() >= 0.5; };
    var randomizeString = function () { return Math.random().toString(36).substring(2, 10); };
    var randomTitle = randomizeString();
    var radnomPriority = randomizePrirority();
    var randomBoolean = randomizeBoolean();
    var task = function (title, priority, isChecked) {
        return new task_class_1.Task(title, priority, isChecked);
    };
    it('create an instance of task', function () {
        var taskOne = task(randomTitle, radnomPriority, randomBoolean);
        expect(taskOne.title).toBe(randomTitle);
        expect(taskOne.priority).toBe(radnomPriority);
        expect(taskOne.isChecked).toBe(randomBoolean);
    });
    it('check if values have proper types', function () {
        var taskOne = task(randomTitle, radnomPriority, randomBoolean);
        expect(typeof taskOne.title === 'string').toBeTruthy();
        expect(typeof taskOne.priority === 'number').toBeTruthy();
        expect(typeof taskOne.isChecked === 'boolean').toBeTruthy();
    });
    it('change some parameters of it', function () {
        var taskOne = task(randomTitle, radnomPriority, randomBoolean);
        taskOne.title = 'randomizeString();';
        taskOne.priority = 1;
        taskOne.toggleCheck();
        expect(taskOne.title).toBe('randomizeString();');
        expect(taskOne.priority).toBe(1);
        expect(taskOne.isChecked).toBe(!randomBoolean);
    });
});
//# sourceMappingURL=task-class.spec.js.map