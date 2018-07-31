const inputElement = document.getElementById('in');
const btnElement = document.getElementById('addBtn');
const ulElement = document.getElementById('ul');
const liElement = document.getElementsByTagName('li');
const closeBtn = document.getElementsByClassName('closeBtn');

// create new element on the list and clear the input:
const newTask = () => {
    if (inputElement.value) {
    const addLi = document.createElement('li');    
    let taskIn = document.createTextNode(inputElement.value);
    addLi.appendChild(taskIn);
    ulElement.appendChild(addLi);
    inputElement.value = "";

// add 'x' to every list element:
    const addDelSpan = document.createElement('SPAN');
    const addDelText = document.createTextNode("X");
    addDelSpan.className = "closeBtn";
    addDelSpan.appendChild(addDelText);
    addLi.appendChild(addDelSpan);

//hides element after clicking 'x'

let i;
for (i = 0; i < closeBtn.length; i++) {
    closeBtn[i].onclick = function() {
    const parentLi = this.parentElement;
    parentLi.style.display = "none";
            }
        }
    }
};




inputElement.addEventListener('keydown', function(event){
    if (event.keyCode == 13) {
        newTask()
    }
});

btnElement.addEventListener('click', newTask);
