'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var taskList = document.getElementById('ul');
var taskInput = document.getElementById('in');
var newTaskButton = document.getElementById('addBtn');
var localStorageItems = JSON.parse(localStorage.getItem('items'));
var taskArray = [];

exports.taskList = taskList;
exports.taskInput = taskInput;
exports.newTaskButton = newTaskButton;
exports.localStorageItems = localStorageItems;
exports.taskArray = taskArray;