const taskList = document.getElementById('ul');
const taskInput = document.getElementById('in');
const newTaskButton = document.getElementById('addBtn');
const xButton = document.getElementsByClassName('xButton');

class Task{
    constructor(title, priority) {
        this.title = title;
        this.priority = priority;
        this.isChecked = false;
    }
    check(){
        this.isChecked = true
    }
};

taskInput.addEventListener('keyup', (event) =>
    event.keyCode == 13 ? newTask(taskInput.value) : []);
    
newTaskButton.addEventListener('click', (event) =>
    newTask(taskInput.value));
    
    const setToLocal = function(taskItem) {
        if(taskItem) {
            itemsArray.push(taskItem);
            localStorage.setItem('items', JSON.stringify(itemsArray));
        } else {
            localStorage.setItem('items', JSON.stringify(itemsArray));
        }
    };

    const newTask = function(title, priority) {
        if (title) {
            setOnList(new Task (title, priority));
            setToLocal(new Task (title, priority));
        }
    };
    
    const setOnList = function(taskItem){
        let li = document.createElement('li');
        li.textContent = taskItem.title;
        taskList.appendChild(li);
        taskInput.value = "";
        const xButton = document.createElement('SPAN');
        xButton.className = "xButton";
        xButton.appendChild(document.createTextNode("x"));
        li.appendChild(xButton);
    };
    const localStorageItems = JSON.parse(localStorage.getItem('items'));
    let itemsArray = localStorageItems ? localStorageItems : [];
    
    const useLocalItems = () => {
        localStorageItems ? localStorageItems.forEach( item => { setOnList(item) }) : [];
    }
    useLocalItems();

    function removeByTitle(array, params){
        array.some(function(item, index) {
          return (array[index][params.key] === params.value) ? !!(array.splice(index, 1)) : false;
        });
        return array;
      }

      function checkByTitle(params){
        itemsArray.some(function(item, index) {
          return (itemsArray[index][params.key] === params.value) ? item.check() : false;
        });
        return itemsArray;
      }

      function dupa(item) {
        debugger;
        console.log('ELO', item)
        item.check()
      }

      taskList.addEventListener('click', (event) => {
            if (event.target.tagName === 'LI') {
                let parentText = event.target.parentElement.textContent.slice(0, -1);
                checkByTitle({
                    key: 'title',
                    value: parentText
                })
            } else if (event.target.className === 'xButton') {
                let parentText = event.target.parentElement.textContent.slice(0, -1);
                event.target.parentElement.style.display = "none";
                    removeByTitle({
                        key: 'title',
                        value: parentText
                    });
                setToLocal();
            }
        });
