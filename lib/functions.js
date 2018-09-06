'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.clearAll = exports.setOnList = exports.checkByTitle = exports.setToLocal = exports.removeByTitle = exports.useLocalItems = exports.newTask = undefined;

var _taskClass = require('/task.class.js');

var _elements = require('/elements.js');

function newTask(title, isChecked) {
    _elements.taskArray.push(new _taskClass.Task(title, isChecked));
    setOnList(title, isChecked);
};

function setOnList(title, isChecked) {
    var li = document.createElement('li');
    li.textContent = title;
    _elements.taskList.appendChild(li);
    var xButton = document.createElement('button');
    xButton.className = "xButton";
    xButton.appendChild(document.createTextNode("x"));
    li.appendChild(xButton);
    if (isChecked === true) {
        li.classList.toggle('checked');
    };
};

function setToLocal() {
    localStorage.setItem('items', JSON.stringify(_elements.taskArray));
};

function useLocalItems() {
    _elements.localStorageItems ? _elements.localStorageItems.forEach(function (item) {
        newTask(item.title, item.isChecked);
    }) : [];
};

function removeByTitle(params) {
    _elements.taskArray.some(function (item, index) {
        return _elements.taskArray[index][params.key] === params.value ? !!_elements.taskArray.splice(index, 1) : false;
    });
    return _elements.taskArray;
};

function checkByTitle(params) {
    _elements.taskArray.some(function (item, index) {
        return _elements.taskArray[index][params.key] === params.value ? item.check() : false;
    });
    return _elements.taskArray;
};

function clearAll() {
    localStorage.clear();
    while (_elements.taskList.firstChild) {
        _elements.taskList.removeChild(_elements.taskList.firstChild);
    }
    while (_elements.taskArray.length > 0) {
        _elements.taskArray.pop();
    };
};

exports.newTask = newTask;
exports.useLocalItems = useLocalItems;
exports.removeByTitle = removeByTitle;
exports.setToLocal = setToLocal;
exports.checkByTitle = checkByTitle;
exports.setOnList = setOnList;
exports.clearAll = clearAll;