"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var task_class_js_1 = require("../../src/task.class.js");
var tasks_list_class_js_1 = require("../../src/tasks-list.class.js");
describe('test task class;', function () {
    var task = new task_class_js_1.Task;
    //this variable declaration now brakes the compilation:
    var tasksList = new tasks_list_class_js_1.TasksList;
    it('create an instance of task', function () {
        expect('test').toBe('test');
        //if i try to run this everything brakes i get 'create an instance of task FAILED':
        //task('example task', 1, false);
    });
});
//# sourceMappingURL=task-class.spec.js.map