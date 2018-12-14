import { Task } from '../../src/task.class.js';
import { TasksList } from '../../src/tasks-list.class.js';

describe('test task class;', () => {

const task = new Task;

//this variable declaration now brakes the compilation:
const tasksList = new TasksList;

    it('create an instance of task', () => {

        expect('test').toBe('test');

        //if i try to run this everything brakes i get 'create an instance of task FAILED':
        //task('example task', 1, false);

    });

});
