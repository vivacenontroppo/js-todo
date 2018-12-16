"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var task_class_1 = require("../../src/task.class");
describe('test task class;', function () {
    var task = function (title, priority, isChecked) {
        return new task_class_1.Task(title, priority, isChecked);
    };
    //const tasksList = new TasksList(null, null, null, null, null, null, [])
    it('create an instance of task', function () {
        var taskOne = task('title', 1, false);
        expect(taskOne.title).toBe('title');
        expect(taskOne.priority).toBe(1);
        expect(taskOne.isChecked).toBe(false);
        taskOne.toggleCheck();
        expect(taskOne.isChecked).toBe(true);
    });
    it('change some parameters of the task', function () {
        var taskTwo = task('string2', 4, true);
        expect(taskTwo.title).toBe('string2');
    });
});
//# sourceMappingURL=task-class.spec.js.map