const todo = document.querySelector("#todo");
const todoInput = document.querySelector("#todo input");
const todoList = document.querySelector("#todoList");

const todoKey = "todo";
const todoInfo = localStorage.getItem(todoKey);

let storage = [];

function getTodo(event) {
    if (storage.length < 7) {
      event.preventDefault();
      const value = todoInput.value;
      todoInput.value = "";
      const newObj = {
        id: new Date().getTime(),
        text: value,
      };
      storage.push(newObj);
      showTodo(newObj);
      saveTodo();
    } else {
        alert("List is full!");
    }
    
}

function showTodo(value) {
    const li = document.createElement("li");
    const button = document.createElement("button");
    const span = document.createElement("span");
    button.innerText = "✔";
    span.innerText = value.text;
    li.appendChild(button);
    li.appendChild(span);
    li.id = value.id;
    todoList.appendChild(li);
    button.addEventListener("click", deleteTodo);
}

function saveTodo() {
    const newData = JSON.stringify(storage);
    localStorage.setItem(todoKey, newData);
}

function deleteTodo(event) {
    event.preventDefault();
    localStorage.removeItem(todoKey);
    console.log(storage);
    for(let i = 0; i < storage.length; i++) {
        if(storage[i].id == event.target.parentElement.id) {
            storage.splice(i, 1);
        }
    }
    saveTodo();
    todoList.innerHTML = "";
    storage.forEach(element => {showTodo(element)});
}

todo.addEventListener("submit", getTodo);

if(todoInfo !== null) {
    storage = JSON.parse(todoInfo);
    storage.forEach(element => {showTodo(element)});
}