const addButton = document.getElementById('add-to-list');
const saveButton = document.querySelector('.save-to-storage');
const clearButton = document.querySelector('.clear-storage');
let input = document.getElementById('input-box');
let display =  document.querySelector('#display-list');

//adding event listener to the addButton
addButton.addEventListener('click', createList);

//adding event listener to the enter key - triggers addButton
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        addButton.click();
    }
});

//exploring alternate way of trigerring keypress. doesn't work at the moment. to be looked into
// input.addEventListener('keyup', function(keyCode){
//     if (keyCode === 13) {
//         createList();
//     }
// });

//save todo list to local storage
saveButton.addEventListener('click', function() {
    localStorage.setItem('todoList', display.innerHTML)
})

//clear list and clear local storage
clearButton.addEventListener('click', function() {
    display.innerHTML = '';
    localStorage.removeItem('todoList',display.innerHTML)
})

//the function that is run when the add button or enter key is clicked
function createList() {
    let newTodo = document.getElementById('input-box').value;
        if (newTodo === '') {
            alert('Write something😉');
        } else {
            addNewTodo(newTodo);
        }
        document.getElementById('input-box').value = '';
}

//function that runs in the createList function. This builds up the html elements.
function addNewTodo(newTodo) {
    let list = document.createElement('li');
    let span = document.createElement('span');
    let spanButton = document.createElement('span');
    let doneButton = document.createElement('button');
    let deleteButton = document.createElement('button');
  
    span.classList.add('text-content');   
    spanButton.classList.add('change-button');
    doneButton.classList.add('done');
    deleteButton.classList.add('delete');
  
    span.textContent = newTodo;
    doneButton.innerHTML = 'Done';
    deleteButton.innerHTML = 'Delete';

    display.appendChild(list)
    list.appendChild(span);
    list.appendChild(spanButton);
    spanButton.appendChild(doneButton);
    spanButton.appendChild(deleteButton);

    remove();

    done();
}

//to mark a task done
function done() {
    let doneButton = document.querySelectorAll('.done');
    doneButton.forEach(item => {
        item.addEventListener('click', event => {
            item.parentElement.parentElement.firstChild.classList.add('clicked');
        });
    });
}

//to delete a task
function remove() {
    let removeButton = document.querySelectorAll('.delete');
    removeButton.forEach(item => {
        item.addEventListener('click', event => {
            item.parentElement.parentElement.remove();  
        });
    });
}

//function runs when page is loaded or reloaded. It is called on line 
function loadTodo() {
    localStorage.getItem('todoList');
    display.innerHTML = localStorage.getItem('todoList');

    remove();

    done();
}

loadTodo();
