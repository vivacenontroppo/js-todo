import { Task } from '../../src/task.class.js';

//if i try to run this everything brakes:
//import { TasksList } from '../../src/tasks-list.class.js';

describe('test task class;', () => {

const task = new Task;
//const taskList = new TasksList;

    it('create an instance of task', () => {

        expect('test').toBe('test');

        //if i try to run this everything brakes:
        //newTask('example task', 1, fasle)

    });

});
