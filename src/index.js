

import './assets/popup.css'
import './assets/todo.css'
import './assets/main.css'
import './assets/dropdown.css'
import todoList from "./todo"
import inputTodoHandler from "./inputHandler"
import Todo from "./todo"
import { appendTodo , appendInputField } from "./visualHandler"
import {insertTodo} from './storageHandler'




function toggleModal() {
  const modalDiv = document.querySelector('.popup-modal');
  const backdrop = document.querySelector('.backdrop')
  modalDiv.classList.toggle('show');
  backdrop.classList.toggle('show');
}

// closeButton.addEventListener('click', toggleModal);

const dropdownContainer = document.querySelector(".dropdown-container");
const menuTitle = document.querySelector(".lists");
const dropdownMenu = document.querySelector(".dropdown-lists");


const createTodoBtn = document.getElementById('create-todo')
const closeButton = document.getElementById('close-modal')
const submitTodoBtn = document.getElementById('submit-todo')
const inputTitle = document.getElementById('input-title')
const createListbtn = document.getElementById('create-list')


createTodoBtn.addEventListener('click', toggleModal);


submitTodoBtn.addEventListener('click', () => {
  toggleModal()
  const todo = new Todo(inputTodoHandler(inputTitle.id))
  insertTodo(todo)
  appendTodo(todo)
})

createListbtn.addEventListener('click',(e)=>{
  appendInputField()
})

menuTitle.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    dropdownMenu.classList.toggle("visible");
  }  
})



// localStorage.clear()