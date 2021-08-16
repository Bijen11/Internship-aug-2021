/* document.querySelector('form').addEventListener('submit', handleSubmitForm);
document.querySelector('ul').addEventListener('click', handleClickDeleteOrCheck);
document.getElementById('clearAll').addEventListener('click', handleClearAll);

function handleSubmitForm(e) {
    e.preventDefault();
    let input = document.querySelector('input');
    if (input.value != '')
        addTodo(input.value);
    input.value = '';
}

function handleClickDeleteOrCheck(e) {
    if (e.target.name == 'checkButton')
        checkTodo(e);

    if (e.target.name == 'deleteButton')
        deleteTodo(e);
}

function handleClearAll(e) {
    document.querySelector('ul').innerHTML = '';
}


function addTodo(todo) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = `
        <span class="todo-item">${todo}</span>
        <button name="checkButton"><i class="fas fa-check-square"></i></button>
        <button name="deleteButton" ><i class="fas fa-trash"></i></button>
    `;
    li.classList.add('todo-list-item');
    ul.appendChild(li);
}
function checkTodo(e) {
    let item = e.target.parentNode;
    if (item.style.textDecoration == 'line-through')
        item.style.textDecoration = 'none';
    else
        item.style.textDecoration = 'line-through';
}

function deleteTodo(e) {
    let item = e.target.parentNode;
    
    item.addEventListener('transitionend', function () {
        item.remove(); 
    });

    item.classList.add('todo-list-item-fall');
} */

import {renderTodos} from './store.js';
import {addTodo, deleteTodo ,markTodo,sortsTodo} from './actions.js';
const itemInput = document.getElementById("itemInput");
const addtodo = document.getElementById("addTodo");
const ul = document.querySelector("ul");
const clearAll = document.getElementById("clearAll");
const sortTodo = document.getElementById("sortTodoBtn");
let todo = "";

itemInput.addEventListener("input", (e) => {
    todo = e.target.value;
  });
  
addtodo.addEventListener("click",(e) =>{
    e.preventDefault();
    addTodo(todo);  
})

ul.addEventListener("click", (e) => {
  deleteTodo(e);
  console.log(e.target.id)
  markTodo(e);
});


clearAll.addEventListener("click", () => {
  localStorage.removeItem("todo");
  location.reload();
  renderTodos();

});

sortTodo.addEventListener("click", () => {
  sortsTodo();

});

