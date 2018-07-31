let inputElement = document.getElementById('in');
const spanElement = document.getElementById('addBtn');

const newTask = () => {
    const ulElement = document.getElementById('ul');
    const liElement = document.createElement('li');
    liElement.appendChild(document.createTextNode(inputElement.value));
    ulElement.appendChild(liElement);
    inputElement.value = "";
}

inputElement.addEventListener('keydown', function(event){
    if (event.keyCode == 13) {
        newTask()
    }
});

spanElement.addEventListener('click', newTask);
