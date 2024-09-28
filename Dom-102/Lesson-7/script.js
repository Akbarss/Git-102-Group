// Get references to elements
const todoInput = document.getElementById("todo-input");
const addTodoBtn = document.getElementById("add-todo");
const todoList = document.getElementById("todo-list");

// Load todos from localStorage
const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
storedTodos.forEach((todo) => addTodoItem(todo));

// Add new todo on button click
addTodoBtn.addEventListener("click", function () {
  const todoText = todoInput.value.trim();
  if (todoText !== "") {
    addTodoItem(todoText);
    saveTodoToLocalStorage(todoText);
    todoInput.value = "";
  }
});

// Function to add todo item to the list
function addTodoItem(todoText) {
  const li = document.createElement("li");
  li.innerHTML = `
        <span>${todoText}</span>
        <span class="delete-btn">❌</span>
    `;
  todoList.appendChild(li);

  // Add event listener for delete button
  li.querySelector(".delete-btn").addEventListener("click", function () {
    li.remove();
    removeTodoFromLocalStorage(todoText);
  });
}

// Save todo to localStorage
function saveTodoToLocalStorage(todoText) {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.push(todoText);
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Remove todo from localStorage
function removeTodoFromLocalStorage(todoText) {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos = todos.filter((todo) => todo !== todoText);
  localStorage.setItem("todos", JSON.stringify(todos));
}
