const addButton = document.getElementById('add-to-list');

addButton.addEventListener('click', function() {
    let newTodo = document.getElementById('input-box').value;
        if (newTodo === '') {
        alert('Write something😉');
    } else {
        addNewTodo(newTodo);
    }
    document.getElementById('input-box').value = '';
});

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
