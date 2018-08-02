//variables for finding DOM elements:
const inputElement = document.getElementById('in');
const btnElement = document.getElementById('addBtn');
const ulElement = document.getElementById('ul');
const closeBtn = document.getElementsByClassName('closeBtn');

//prepare getting and setting data:
const data = JSON.parse(localStorage.getItem('items'));
let dataArray = data ? data : [];
const setData = () => localStorage.setItem('items', JSON.stringify(dataArray));
const getData = () => data ? data.forEach(item => {newTask(item)}) : [];

//push input to localStorage, create new li element, clear input:
const newTask = (text) => {
    if (text) {
    inputElement.value ? dataArray.push(inputElement.value) : [];
    setData();
    const addLi = document.createElement('li');    
    addLi.textContent = text;
    ulElement.appendChild(addLi);
    inputElement.value = "";

//add 'x' to every list element:
    const addDelSpan = document.createElement('SPAN');
    const addx = document.createTextNode("x");
    addDelSpan.className = "closeBtn";
    addDelSpan.appendChild(addx);
    addLi.appendChild(addDelSpan);
    }
};

getData();

//listens for click on li and add line-through or remove:
ulElement.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked')
    } else if (event.target.className === 'closeBtn') {
        parentText = event.target.parentElement.textContent.slice(0, -1);
        dataArray = dataArray.filter(e => e !== parentText);
        event.target.parentElement.style.display = "none";
        setData();
    }
});

//listens for enter or click on addBtn and triggers newTask:
inputElement.addEventListener('keyup', (event) =>
    event.keyCode == 13 ? newTask(inputElement.value) : []);

btnElement.addEventListener('click', (event) =>
    newTask(inputElement.value));

//cleart storage and loop while removing li:
clearBtn.addEventListener('click', (event) => {
    localStorage.clear();
    while (ulElement.firstChild) {
        ulElement.removeChild(ulElement.firstChild)
    }
});
