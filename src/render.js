// array of todos
let myTodos = JSON.parse(localStorage.getItem('todo')) || [];

function ToDo(name, completed) {
  this.name = name;
  this.completed = completed || false;
}
// function to render todos
function renderTodos() {

  const todosContainer = document.querySelector('.todos-container');
  todosContainer.innerHTML = "";

  const mainEmpty = document.querySelector('.main-empty');
  let name = document.querySelector('#name');

  myTodos.forEach(function (todo, index) {
    let todoEl = document.createElement("div");
    todoEl.classList.add("container");
    todoEl.innerHTML = `
    <img src="images/icon-green.png" alt="icon" class="green" data-index="${index}">
    <img src="images/icon-red.png" alt="icon" class="red" data-index="${index}">
    <h2 class="todo ${todo.completed ? "completed" : ""}">${todo.name}</h2>
    <div class="button-container">
      <img src="images/delete-button.png" alt="delete" class="delete-todo">
      <img src="images/edit-button.png" alt="edit" class="todo-btn">
    </div>
  `;
    todosContainer.appendChild(todoEl);
    setTimeout(() => {
      name.value = "";
    }, 500);
    todosContainer.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    mainEmpty.style.display = 'none';

    // delete todo button
    const deleteTodo = todoEl.querySelector('.delete-todo');

    deleteTodo.addEventListener('click', () =>{
      const index = myTodos.indexOf(todo);
      myTodos.splice(index, 1);

      if (myTodos.length === 0) {
        mainEmpty.style.display = 'flex';
        todosContainer.style.backgroundColor = 'transparent';
      }
      renderTodos();
      setTimeout(() => {
        alert('Your todo has been deleted!');
      }, 500);
      console.log('Your todo has been deleted!');
      saveTodos();
    });

    // each todo, green and red icons
    const todoElement = todoEl.querySelector('.todo');
    const greenIcon = todoEl.querySelector(`.green[data-index="${index}"]`);
    const redIcon = todoEl.querySelector(`.red[data-index="${index}"]`);

    todoElement.addEventListener("click", function () {
      if (greenIcon && redIcon) {
        if (greenIcon.style.display !== "none") {
          greenIcon.style.display = "none";
          redIcon.style.display = "block";
          todo.completed = true;
          setTimeout(() => {
            alert("Todo has been marked as completed")
          }, 500);
        } else {
          greenIcon.style.display = "block";
          redIcon.style.display = "none";
          todo.completed = false;
          setTimeout(() => {
            alert("Todo has been marked as not completed")
          }, 500);
        }
      } else {
        todo.completed = !todo.completed;
      }

      todoElement.classList.toggle("completed");
      saveTodos();
    });

    greenIcon.addEventListener("click", function () {
      todo.completed = !todo.completed;
      greenIcon.style.display = "none";
      redIcon.style.display = "block";
      todoElement.classList.toggle("completed");
      setTimeout(() => {
        alert("Todo has been marked as completed")
      }, 500);
      saveTodos();
    });

    redIcon.addEventListener("click", function () {
      todo.completed = !todo.completed;
      greenIcon.style.display = "block";
      redIcon.style.display = "none";
      todoElement.classList.toggle("completed");
      setTimeout(() => {
        alert("Todo has been marked as not completed")
      }, 500);
      saveTodos();
    });

    // edit button
    const editBtn = todoEl.querySelector('.todo-btn');

    editBtn.addEventListener('click', function () {
      editTodoText(todo, todoElement, editBtn, `#add-back-btn-${index}`)
    });

    greenIcon.style.display = todo.completed ? "none" : "block";
    redIcon.style.display = todo.completed ? "block" : "none";
  });
}

// function for editting todos and displaying edited ones
function editTodoText(todo, todoElement, editBtn, addBackBtnId) {
const buttonContainer = todoElement.nextElementSibling;

const addBackBtn = document.createElement('img');
addBackBtn.src = './images/add-btn.png';
addBackBtn.id = addBackBtnId;
addBackBtn.classList.add('add-back-btn');

editBtn.style.display = 'none';
buttonContainer.appendChild(addBackBtn);

const input = document.createElement('input');
input.type = 'text';
input.classList.add('input-add');
input.value = todo.name;

todoElement.replaceWith(input);
input.focus();

addBackBtn.addEventListener('click', function() {
  todo.name = input.value;
  editBtn.style.display = 'block';
  addBackBtn.style.display = 'none';

  todoElement.textContent = todo.name;
  input.replaceWith(todoElement);
  setTimeout(() => {
    alert('Your todo has been edited');
    console.log('Your todo has been edited');
  }, 500);

  todoElement.addEventListener("click", function () {
    toggleTodoCompletion(todo, todoElement);
  });
  saveTodos();
});
}

function toggleTodoCompletion(todo, todoElement) {
  todo.completed = !todo.completed;
  todoElement.classList.toggle("completed");
  saveTodos();
}


  // function for displaying todos after rendering them
  function addTodos() {
    let name = document.querySelector("#name").value;
  
    if (name) {
      let newTodo = new ToDo(name);
      myTodos.push(newTodo);
      renderTodos();
      setTimeout(() => {
        alert('Your todo has been added!');
      }, 500);
      saveTodos();
      console.log("Your todo has been added!");
    }
  }

  function saveTodos() {
    localStorage.setItem('todo', JSON.stringify(myTodos));
  }

  // export default addTodos;
  export { myTodos, addTodos, renderTodos };