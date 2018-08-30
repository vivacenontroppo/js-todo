const taskList = document.getElementById('ul');
const taskInput = document.getElementById('in');
const newTaskButton = document.getElementById('addBtn');
const localStorageItems = JSON.parse(localStorage.getItem('items'));

export { taskList, taskInput, newTaskButton, localStorageItems };