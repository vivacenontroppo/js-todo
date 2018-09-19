import { Task } from '/task.class.js';

export class TasksList {

    constructor() {
        this.taskList = document.getElementById('ul');
        this.taskInput = document.getElementById('in');
        this.newTaskButton = document.getElementById('addBtn');
        this.localStorageItems = JSON.parse(localStorage.getItem('items'));
        this.clearButton = document.getElementById('clearButton');
        this.prioritySelected = document.getElementById('priority');
        this.taskArray = [];
    }

    initialize() {
        this.useLocalItems();
        this.taskInput.addEventListener('keyup', (event) => {
            if (this.taskInput.value) {
                const enterKeyCode = 13
                if (event.keyCode == enterKeyCode && this.prioritySelected.value == "0") {
                    alert('set priority first!')
                }
                else if (event.keyCode == enterKeyCode) {
                    this.newTask(this.taskInput.value, this.prioritySelected.value);
                    this.setToLocal();
                    this.taskInput.value = '';
                }
            }
        });

        this.newTaskButton.addEventListener('click', (event) => {
            if (this.taskInput.value) {
                if (this.prioritySelected.value == 0) {
                    alert('set priority first!')
                } else {
                    this.newTask(this.taskInput.value, this.prioritySelected.value);
                    this.setToLocal();
                    this.taskInput.value = '';
                }
            }
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

    newTask(title, priority, isChecked) {
        this.taskArray.push(new Task(title, priority, isChecked));
        this.setOnList(title, isChecked, priority);
    }

    setOnList(title, isChecked, priority) {
        switch (priority) {
            case '5': this.prioritySwitchIcon = "♛ "; break;
            case '4': this.prioritySwitchIcon = "♜ "; break;
            case '3': this.prioritySwitchIcon = "♝ "; break;
            case '2': this.prioritySwitchIcon = "♞ "; break;
            case '1': this.prioritySwitchIcon = "♟ "; break;
        }
        const li = document.createElement('li');
        const xButton = document.createElement('button');
        li.textContent = this.prioritySwitchIcon + title
        this.taskList.appendChild(li);
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
            this.newTask(item.title, item.priority, item.isChecked)
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