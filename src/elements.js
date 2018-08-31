const taskList = document.getElementById('ul');
const taskInput = document.getElementById('in');
const newTaskButton = document.getElementById('addBtn');
const localStorageItems = JSON.parse(localStorage.getItem('items'));
let taskArray = []

export { taskList, taskInput, newTaskButton, localStorageItems, taskArray };