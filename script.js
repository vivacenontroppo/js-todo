// variables for finding DOM elements:
const inputElement = document.getElementById('in');
const btnElement = document.getElementById('addBtn');
const ulElement = document.getElementById('ul');
const closeBtn = document.getElementsByClassName('closeBtn');

// prepare getting and setting data:
const data = JSON.parse(localStorage.getItem('items'));
let itemsArray = data ? data : [];
const setData = () => {localStorage.setItem('items', JSON.stringify(itemsArray))};
const getData = () => data ? data.forEach(item => {
    newTask(item);
  }) : [];

// push input to localStorage, create new li element, clear input:
const newTask = (text) => {
    if (text) {
    inputElement.value ? itemsArray.push(inputElement.value) : [];
    setData();
    const addLi = document.createElement('li');    
    addLi.textContent = text;
    ulElement.appendChild(addLi);
    inputElement.value = "";

// add 'x' to every list element:
    const addDelSpan = document.createElement('SPAN');
    const addx = document.createTextNode("x");
    addDelSpan.className = "closeBtn";
    addDelSpan.appendChild(addx);
    addLi.appendChild(addDelSpan);

//removes element from ul and localStorage after clicking 'x':
    let i;
    for (i = 0; i < closeBtn.length; i++) {
        closeBtn[i].onclick = function() {
        const parentLi = this.parentElement;
        parentLi.style.display = "none";
        console.log(parentLi)
        }};
    };
};

getData();

// listens for enter or click on addBtn and triggers newTask:
inputElement.addEventListener('keydown', (event) => {
    if (event.keyCode == 13) {
        newTask(inputElement.value)
    };
});

btnElement.addEventListener('click', (event) => {
    newTask(inputElement.value);
});