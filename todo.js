const addButton = document.getElementById('liveToastBtn');
const inputText = document.getElementById('task');
const todoList = document.getElementById('list');

//functions
addButton.addEventListener('click', addTodo);
todoList.addEventListener('click', clearTodo);


//alerts
const alertWarning = document.querySelector('.alert-warning');


function addTodo(e) {

    e.preventDefault();

    const isEmpty = str => !str.trim().length;

    if (isEmpty(inputText.value)) {
        alertWarning.style.display = 'block';
        setTimeout(() => {
            alertWarning.style.display = 'none';
        }, 1500);
        inputText.value = "";
    }else {
        
    
    const todoDIV = document.createElement('div');
    todoDIV.classList.add('todo');

   
    const todoLi = document.createElement('li');
    todoLi.innerHTML = inputText.value;
    todoDIV.appendChild(todoLi);

    
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('clearButton')
    deleteButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    todoDIV.appendChild(deleteButton);

    
    todoList.appendChild(todoDIV);

    
    inputText.value = "";
    }
}

function clearTodo(e) {
    const item = e.target;
    
    if (item.classList[0] === 'clearButton') {
        const todo = item.parentElement;
        todo.remove();
    }
}