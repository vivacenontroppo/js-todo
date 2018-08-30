import { newTask, useLocalItems, removeByTitle, setToLocal, checkByTitle, setOnList } from '/functions.js';
import { taskInput, newTaskButton, taskList } from '/elements.js';

useLocalItems();

taskInput.addEventListener('keyup', (event) => {
    if (event.keyCode == 13) {
        newTask(taskInput.value);
        setToLocal();
        taskInput.value = "";
    }
});

newTaskButton.addEventListener('click', (event) => {
    newTask(taskInput.value);
    setToLocal();
    taskInput.value = "";
});

taskList.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        checkByTitle({
            key: 'title',
            value: event.target.textContent.slice(0, -1)
        })
    } else if (event.target.className === 'xButton') {
        removeByTitle({
            key: 'title',
            value: event.target.parentElement.textContent.slice(0, -1)
            });
        event.target.parentElement.style.display = "none";
    }
    setToLocal();
});

clearBtn.addEventListener('click', (event) => {
    localStorage.clear();
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild)
    }
});
    