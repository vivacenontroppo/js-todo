import { Task } from '/task.class.js';
import { taskList, localStorageItems } from '/elements.js';

let itemsArray = []

function newTask(title, isChecked) {
        debugger
        itemsArray.push(new Task(title, isChecked));
        setOnList(title, isChecked);
};

function setOnList(title, isChecked) {
    debugger
    const li = document.createElement('li');
    li.textContent = title
    taskList.appendChild(li);
    const xButton = document.createElement('button');
    xButton.className = "xButton";
    xButton.appendChild(document.createTextNode("x"));
    li.appendChild(xButton);
    if(isChecked === true) {
        li.classList.toggle('checked')
    }
};

function setToLocal() {
    debugger
        localStorage.setItem('items', JSON.stringify(itemsArray));
};

function useLocalItems() {
    debugger
    localStorageItems ? localStorageItems.forEach(item => {
        newTask(item.title, item.isChecked)
    }) : [];
};

function removeByTitle(params) {
    itemsArray.some(function(item, index) {
      return (itemsArray[index][params.key] === params.value) ? !!(itemsArray.splice(index, 1)) : false;
    });
    return itemsArray;
};

function checkByTitle(params) {
    itemsArray.some(function(item, index) {
        debugger
      return (itemsArray[index][params.key] === params.value) ? item.check() : false;
    });
    return itemsArray;
};

export { newTask, useLocalItems, removeByTitle, setToLocal, checkByTitle, setOnList };
