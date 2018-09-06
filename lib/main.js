'use strict';

var _functions = require('/functions.js');

var _elements = require('/elements.js');

(0, _functions.useLocalItems)();

_elements.taskInput.addEventListener('keyup', function (event) {
    if (event.keyCode == 13) {
        (0, _functions.newTask)(_elements.taskInput.value);
        (0, _functions.setToLocal)();
        _elements.taskInput.value = "";
    }
});

_elements.newTaskButton.addEventListener('click', function (event) {
    (0, _functions.newTask)(_elements.taskInput.value);
    (0, _functions.setToLocal)();
    _elements.taskInput.value = "";
});

_elements.taskList.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        (0, _functions.checkByTitle)({
            key: 'title',
            value: event.target.textContent.slice(0, -1)
        });
        event.target.classList.toggle('checked');
    } else if (event.target.className === 'xButton') {
        (0, _functions.removeByTitle)({
            key: 'title',
            value: event.target.parentElement.textContent.slice(0, -1)
        });
        event.target.parentElement.style.display = "none";
    }
    (0, _functions.setToLocal)();
});

clearButton.addEventListener('click', function (event) {
    return (0, _functions.clearAll)();
});