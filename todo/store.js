let todoList = []
export const addToLocal = (todo,date) =>{
	let todoObject = {
		Name : todo,
		dueDate : date,
		completeStatus : false,
	}
	todoList.push(todoObject);
    localStorage.setItem( "todo",JSON.stringify(todoList));
    renderTodos();
};

export const renderTodos = () => {
	var data = JSON.parse(window.localStorage.getItem('todo'));
	//var list = document.getElementById("todoList");
	//var item = document.createElement("li");
	//item.textContent = window.localStorage.getItem('todo');
	let ul = document.querySelector('ul');
    let li = document.createElement('li');
    data && data.map((item) => {
	    li.innerHTML = `
	        <span class="todo-item">${item.Name

	    	}</span>
	        <button name="checkButton"><i class="fas fa-check-square"></i></button>
	        <button name="deleteButton" ><i class="fas fa-trash"></i></button>
    `;
	});
    li.classList.add('todo-list-item');
    ul.appendChild(li);
	//list.appendChild(item);
	console.log("date here", data);

}


