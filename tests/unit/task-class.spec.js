import { Task } from '../../src/task.class.js';
//import { taskList, TasksList } from '../../src/tasks-list.class.js';

describe('test task class;', () => {

var task = new Task;
//var taskList = new TasksList;
const newTask = (title, priority, isChecked) => {
    return task(this.title, this.priority, this.isChecked)
};

    it('create an instance of task', () => {

        //taskList.newTask('title', 1, false);
        expect('test').toBe('test');
        newTask('example task', 1, fasle)

    });

});
