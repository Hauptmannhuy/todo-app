

import './assets/popup.css'
import './assets/todo.css'
import todoList from "./todo"
import inputTodoHandler from "./inputHandler"
import Todo from "./todo"
import appendTodo from "./visualHandler"
import insertTodo from './storageHandler'




function toggleModal() {
  const modalDiv = document.querySelector('.popup-modal');
  const backdrop = document.querySelector('.backdrop')
  modalDiv.classList.toggle('show');
  backdrop.classList.toggle('show');
}

// closeButton.addEventListener('click', toggleModal);

const createTodoBtn = document.getElementById('create-todo')
const closeButton = document.getElementById('close-modal')
const submitTodoBtn = document.getElementById('submit-todo')
const inputTitle = document.getElementById('input-title')



createTodoBtn.addEventListener('click', toggleModal);


submitTodoBtn.addEventListener('click', () => {
  toggleModal()
  const todo = new Todo(inputTodoHandler(inputTitle.id))
  insertTodo(todo)
  appendTodo(todo)
})

// localStorage.clear()