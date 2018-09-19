'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TasksList = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _taskClass = require('/task.class.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TasksList = exports.TasksList = function () {
    function TasksList() {
        _classCallCheck(this, TasksList);

        this.taskList = document.getElementById('ul');
        this.taskInput = document.getElementById('in');
        this.newTaskButton = document.getElementById('addBtn');
        this.localStorageItems = JSON.parse(localStorage.getItem('items'));
        this.clearButton = document.getElementById('clearButton');
        this.prioritySelected = document.getElementById('priority');
        this.taskArray = [];
    }

    _createClass(TasksList, [{
        key: 'initialize',
        value: function initialize() {
            var _this = this;

            this.useLocalItems();
            this.taskInput.addEventListener('keyup', function (event) {
                if (_this.taskInput.value) {
                    var enterKeyCode = 13;
                    if (event.keyCode == enterKeyCode) {
                        _this.newTask(_this.taskInput.value, _this.prioritySelected.value);
                        _this.setToLocal();
                        _this.taskInput.value = '';
                    }
                }
            });

            this.newTaskButton.addEventListener('click', function (event) {
                if (_this.taskInput.value) {
                    _this.newTask(_this.taskInput.value, _this.prioritySelected.value);
                    _this.setToLocal();
                    _this.taskInput.value = '';
                }
            });

            this.taskList.addEventListener('click', function (event) {
                if (event.target.tagName === 'LI') {
                    _this.checkByTitle('title', event.target.textContent.slice(2, -1));
                    event.target.classList.toggle('checked');
                } else if (event.target.className === 'xButton') {
                    _this.removeByTitle('title', event.target.parentElement.textContent.slice(2, -1));
                    event.target.parentElement.parentNode.removeChild(event.target.parentElement);
                }
                _this.setToLocal();
            });

            this.clearButton.addEventListener('click', function (_) {
                return _this.clearAll();
            });
        }
    }, {
        key: 'newTask',
        value: function newTask(title, priority, isChecked) {
            this.taskArray.push(new _taskClass.Task(title, priority, isChecked));
            this.setOnList(title, isChecked, priority);
        }
    }, {
        key: 'setOnList',
        value: function setOnList(title, isChecked, priority) {
            switch (priority) {
                case '5':
                    this.prioritySwitchIcon = "♛ ";break;
                case '4':
                    this.prioritySwitchIcon = "♜ ";break;
                case '3':
                    this.prioritySwitchIcon = "♝ ";break;
                case '2':
                    this.prioritySwitchIcon = "♞ ";break;
                case '1':
                    this.prioritySwitchIcon = "♟ ";break;
            }
            var li = document.createElement('li');
            var xButton = document.createElement('button');
            li.textContent = this.prioritySwitchIcon + title;
            this.taskList.appendChild(li);
            xButton.className = "xButton";
            xButton.appendChild(document.createTextNode("x"));
            li.appendChild(xButton);
            if (isChecked === true) {
                li.classList.toggle('checked');
            };
        }
    }, {
        key: 'setToLocal',
        value: function setToLocal() {
            localStorage.setItem('items', JSON.stringify(this.taskArray));
        }
    }, {
        key: 'useLocalItems',
        value: function useLocalItems() {
            var _this2 = this;

            this.localStorageItems ? this.localStorageItems.forEach(function (item) {
                _this2.newTask(item.title, item.priority, item.isChecked);
            }) : [];
        }
    }, {
        key: 'removeByTitle',
        value: function removeByTitle(key, value) {
            var _this3 = this;

            this.taskArray.filter(function (task) {
                return task[key] === value;
            }).forEach(function (task) {
                var indexOf = _this3.taskArray.indexOf(task);
                _this3.taskArray.splice(indexOf, 1);
            });
        }
    }, {
        key: 'checkByTitle',
        value: function checkByTitle(key, value) {
            this.taskArray.filter(function (task) {
                return task[key] === value;
            }).forEach(function (task) {
                return task.toggleCheck();
            });
        }
    }, {
        key: 'clearAll',
        value: function clearAll() {
            localStorage.clear();
            while (this.taskList.firstChild) {
                this.taskList.removeChild(this.taskList.firstChild);
            }
            while (this.taskArray.length > 0) {
                this.taskArray.pop();
            };
        }
    }]);

    return TasksList;
}();

;