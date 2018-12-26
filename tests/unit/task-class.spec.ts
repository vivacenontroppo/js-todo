// tslint:disable: no-magic-numbers

import { Task } from '../../src/task.class';

describe('test task class;', () => {

    type priorityRange = 1 | 2 | 3 | 4 | 5;
    const randomizePrirority = (): number => ((Math.floor((Math.random() * 5) + 1)));
    const randomizeBoolean = (): boolean => Math.random() >= 0.5;
    const randomizeString = (): string => Math.random().toString(36).substring(2, 10);
    const randomTitle = randomizeString();
    const radnomPriority = randomizePrirority() as priorityRange;
    const randomBoolean = randomizeBoolean();
    const task = (title: string, priority: priorityRange, isChecked: boolean): Task =>
        new Task(title, priority, isChecked);

    it('create an instance of task', () => {

        const taskOne = task(randomTitle, radnomPriority, randomBoolean);
        expect(taskOne.title).toBe(randomTitle);
        expect(taskOne.priority).toBe(radnomPriority);
        expect(taskOne.isChecked).toBe(randomBoolean);

    });

    it('check if values have proper types', () => {

        const taskOne = task(randomTitle, radnomPriority, randomBoolean);
        expect(typeof taskOne.title === 'string').toBeTruthy();
        expect(typeof taskOne.priority === 'number').toBeTruthy();
        expect(typeof taskOne.isChecked === 'boolean').toBeTruthy();

    });

    it('change some parameters of it', () => {

        const taskOne = task(randomTitle, radnomPriority, randomBoolean);
        taskOne.title = 'randomizeString();';
        taskOne.priority = 1;
        taskOne.toggleCheck();
        expect(taskOne.title).toBe('randomizeString();');
        expect(taskOne.priority).toBe(1);
        expect(taskOne.isChecked).toBe(!randomBoolean);

    });

});
