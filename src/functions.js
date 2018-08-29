import { Task } from '/task.class.js';
import { taskList, taskInput } from '/elements.js';

function newTask(title, priority) {
    if (title) {
        setOnList(new Task (title, priority));
        setToLocal(new Task (title, priority));
    }
};

function setOnList(taskItem){
    let li = document.createElement('li');
    li.textContent = taskItem.title;
    taskList.appendChild(li);
    taskInput.value = "";
    const xButton = document.createElement('SPAN');
    xButton.className = "xButton";
    xButton.appendChild(document.createTextNode("x"));
    li.appendChild(xButton);
};

function setToLocal(taskItem) {
    if(taskItem) {
        itemsArray.push(taskItem);
        localStorage.setItem('items', JSON.stringify(itemsArray));
    } else {
        localStorage.setItem('items', JSON.stringify(itemsArray));
    }
};

function useLocalItems(){
    localItems ? localItems.forEach( item => { setOnList(item) }) : [];
}

const localItems = JSON.parse(localStorage.getItem('items'));
let itemsArray = localItems ? localItems : [];

function removeByTitle(params){
    itemsArray.some(function(item, index) {
      return (itemsArray[index][params.key] === params.value) ? !!(itemsArray.splice(index, 1)) : false;
    });
    return itemsArray;
  }

export { newTask, useLocalItems, removeByTitle, setToLocal };
