import { Task } from '../../src/task.class';
import { TasksList } from '../../src/tasks-list.class';

describe('test task class;', () => {

    const task = function (title, priority, isChecked){
        return new Task(title, priority, isChecked)
     };
    
    //const tasksList = new TasksList(null, null, null, null, null, null, [])

    it('create an instance of task', () => {


        const taskOne = task('title', 1, false);
        expect(taskOne.title).toBe('title');
        expect(taskOne.priority).toBe(1);
        expect(taskOne.isChecked).toBe(false);
        taskOne.toggleCheck();
        expect(taskOne.isChecked).toBe(true);

    });

    it('change some parameters of the task', () => {

        const taskTwo = task('string2', 4, true);
        expect(taskTwo.title).toBe('string2');

    });

});
