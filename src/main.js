import { newTask, useLocalItems, removeByTitle, setToLocal } from '/functions.js';
import { taskInput, newTaskButton, taskList } from '/elements.js';

useLocalItems();

taskInput.addEventListener('keyup', (event) =>
    event.keyCode == 13 ? newTask(taskInput.value) : []);
    
newTaskButton.addEventListener('click', (event) =>
    newTask(taskInput.value));

taskList.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            console.log('click na listę')
        } else if (event.target.className === 'xButton') {
            let parentText = event.target.parentElement.textContent.slice(0, -1);
            event.target.parentElement.style.display = "none";
            removeByTitle({
                key: 'title',
                value: parentText
              });
            setToLocal();
        }
    });