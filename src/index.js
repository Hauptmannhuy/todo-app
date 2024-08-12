
import './assets/main.css'
import './assets/panels.css'
import './assets/animations.css'
import './assets/todo.css'

import todoList from "./todo"
import inputTodoHandler from "./inputHandler"
import Todo from "./todo"
import { appendTodo , appendInputField } from "./visualHandler"
import {insertTodo} from './storageHandler'






// closeButton.addEventListener('click', toggleModal);

const dropdownContainer = document.querySelector(".dropdown-container");
const menuTitle = document.querySelector(".lists");
const dropdownMenu = document.querySelector(".dropdown-lists");


const createTodoBtn = document.getElementById('create-todo')
const closeButton = document.getElementById('close-btn')
const createListbtn = document.getElementById('create-list')




createTodoBtn.addEventListener('click', () => {
  const todo = new Todo
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