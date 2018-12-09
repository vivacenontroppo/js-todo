import { Task } from '../../src/task.class.js';

describe('test task class;', () => {

const task = new Task;

    it('create an instance of task', () => {

        task();
        expect('test').toBe('test');

    });

});
