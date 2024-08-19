import "./assets/main.css";
import "./assets/panels.css";
import "./assets/animations.css";
import "./assets/todo.css";

import Todo from "./todo";
import { appendInputField, printLists, printTodo } from "./visualHandler";
import { insertTodo } from "./storageHandler";

printLists();
printTodo();

let listButtons = cacheListBtns();
listenListBtns(listButtons);

let currentList = "home";

const dropdownContainer = document.querySelector(".dropdown-container");
const menuTitle = document.querySelector(".lists");
const dropdownMenu = document.querySelector(".dropdown-lists");

const createTodoBtn = document.getElementById("create-todo");
const closeButton = document.getElementById("close-btn");
const createListbtn = document.getElementById("create-list");

createTodoBtn.addEventListener("click", () => {
  const todo = new Todo("description_name", currentList);
  insertTodo(todo);
  printTodo(currentList);
});

createListbtn.addEventListener("click", (e) => {
  appendInputField();
});

menuTitle.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    dropdownMenu.classList.toggle("visible");
  }
});

// localStorage.clear()

function listenListBtns(arr) {
  arr.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      console.log("click");
      const listName = e.target.innerHTML.toLowerCase();
      currentList = listName;
      printTodo(currentList);
    });
  });
}

function cacheListBtns() {
  return document.querySelectorAll(".btn-list");
}


export { cacheListBtns, listenListBtns, currentList };
