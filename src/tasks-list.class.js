import { Task } from '/task.class.js';

export class TasksList {

    constructor() {
        this.taskList = document.getElementById('ul');
        this.taskInput = document.getElementById('in');
        this.newTaskButton = document.getElementById('addBtn');
        this.localStorageItems = JSON.parse(localStorage.getItem('items'));
        this.clearButton = document.getElementById('clearButton');
        this.taskArray = [];
    }

    initialize() {
        this.useLocalItems();
        this.taskInput.addEventListener('keyup', (event) => {
            const enterKeyCode = 13
            if (event.keyCode == enterKeyCode) {
                this.newTask(this.taskInput.value);
                this.setToLocal();
                this.taskInput.value = "";
            }
        });

        this.newTaskButton.addEventListener('click', (event) => {
            this.newTask(this.taskInput.value);
            this.setToLocal();
            this.taskInput.value = "";
        });

        this.taskList.addEventListener('click', (event) => {
            if (event.target.tagName === 'LI') {
                this.checkByTitle('title', event.target.textContent.slice(0, -1))
                event.target.classList.toggle('checked')
            } else if (event.target.className === 'xButton') {
                this.removeByTitle('title', event.target.parentElement.textContent.slice(0, -1));
                event.target.parentElement.parentNode.removeChild(event.target.parentElement)
            }
            this.setToLocal();
        });

        this.clearButton.addEventListener('click', _ => this.clearAll());
    }

    newTask(title, isChecked) {
        this.taskArray.push(new Task(title, isChecked));
        this.setOnList(title, isChecked);
    }

    setOnList(title, isChecked) {
        const li = document.createElement('li');
        li.textContent = title
        this.taskList.appendChild(li);
        const xButton = document.createElement('button');
        xButton.className = "xButton";
        xButton.appendChild(document.createTextNode("x"));
        li.appendChild(xButton);
        if (isChecked === true) {
            li.classList.toggle('checked')
        };
    }

    setToLocal() {
        localStorage.setItem('items', JSON.stringify(this.taskArray));
    }

    useLocalItems() {
        this.localStorageItems ? this.localStorageItems.forEach(item => {
            this.newTask(item.title, item.isChecked)
        }) : [];
    }

    removeByTitle(key, value) {
        this.taskArray
            .filter(task => task[key] === value)
            .forEach(task => {
                const indexOf = this.taskArray.indexOf(task);
                this.taskArray.splice(indexOf, 1)
            })
    }

    checkByTitle(key, value) {
        this.taskArray
            .filter(task => task[key] === value)
            .forEach(task => task.toggleCheck())
    }

    clearAll() {
        localStorage.clear();
        while (this.taskList.firstChild) {
            this.taskList.removeChild(this.taskList.firstChild)
        }
        while (this.taskArray.length > 0) {
            this.taskArray.pop();
        };
    }
};