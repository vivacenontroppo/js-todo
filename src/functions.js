import { Task } from '/task.class.js';
import { taskList, localStorageItems, taskArray } from '/elements.js';

function newTask(title, isChecked) {
    taskArray.push(new Task(title, isChecked));
    setOnList(title, isChecked);
};

function setOnList(title, isChecked) {
    const li = document.createElement('li');
    li.textContent = title
    taskList.appendChild(li);
    const xButton = document.createElement('button');
    xButton.className = "xButton";
    xButton.appendChild(document.createTextNode("x"));
    li.appendChild(xButton);
    if(isChecked === true) {
        li.classList.toggle('checked')
    };
};

function setToLocal() {
    localStorage.setItem('items', JSON.stringify(taskArray));
};

function useLocalItems() {
    localStorageItems ? localStorageItems.forEach(item => {
        newTask(item.title, item.isChecked)
    }) : [];
};

function removeByTitle(params) {
    taskArray.some(function(item, index) {
      return (taskArray[index][params.key] === params.value) ? !!(taskArray.splice(index, 1)) : false;
    });
    return taskArray;
};

function checkByTitle(params) {
    taskArray.some(function(item, index) {      
      return (taskArray[index][params.key] === params.value) ? item.check() : false;
    });
    return taskArray;
};

function clearAll() {
        localStorage.clear();
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild)
        }
        while (taskArray.length > 0) {
            taskArray.pop();
        };
};

export { newTask, useLocalItems, removeByTitle, setToLocal, checkByTitle, setOnList, clearAll };
