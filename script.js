const addButton = document.getElementById('add-to-list');
const saveButton = document.querySelector('.save-to-storage');
const clearButton = document.querySelector('.clear-storage');
let display =  document.querySelector('#display-list');

addButton.addEventListener('click', function() {
    let newTodo = document.getElementById('input-box').value;
        if (newTodo === '') {
        alert('Write something😉');
    } else {
        addNewTodo(newTodo);
    }
    document.getElementById('input-box').value = '';
});

saveButton.addEventListener('click', function() {
    localStorage.setItem('todoList', display.innerHTML)
})

clearButton.addEventListener('click', function() {
    display.innerHTML = '';
    localStorage.removeItem('todoList',display.innerHTML)
})

function addNewTodo(newTodo) {
    let display =  document.querySelector('#display-list');
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

    doneButton.addEventListener('click', function() {
        done(span);
    });

    deleteButton.addEventListener('click', function() {
        remove(list);
    });
}
  
function done(span) {
    span.classList.add('clicked');
}

function remove(list) {
    document.querySelector('#display-list').removeChild(list);
}

function loadTodo() {
    if(localStorage.getItem('todoList')) {
        display.innerHTML = localStorage.getItem('todoList');
        remove();
    }
}

loadTodo();



// // var input = document.getElementById("myInput");

// newTodo.addEventListener("keyup", function(event) {
//   if (event.keyCode === 13) {
//     // Cancel the default action, if needed
//     event.preventDefault();
//     // Trigger the button element with a click
//     document.getElementById("add-to-list").click();
//   }
// });