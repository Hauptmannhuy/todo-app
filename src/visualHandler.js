import {
  createList,
  fetchList,
  fetchTodo,
  findTodo,
  changeTodoRecord,
  listDuplicated
} from "./storageHandler";
import { cacheListBtns, listenListBtns, currentList } from "./index";
import { editInputHandler } from "./inputHandler";

const dropdownList = document.querySelector(".dropdown-lists");
const dropdownContainer = document.querySelector(".dropdown-container");
const todoList = document.getElementById("todo-container");

function createTodoDiv(todo, key) {
  const div = document.createElement("div");
  div.setAttribute("id", key);
  div.classList.add("todo");
  setTodoValues(todo, div);

  return div;
}

function setTodoValues(todo, div) {
  const labels = ["check", "description", "list", "date"];
  for (let i = 0; i < labels.length; i++) {
    if (i == 0) {
      const radioBtn = document.createElement("input");
      radioBtn.setAttribute("type", "checkbox");
      div.appendChild(radioBtn);
      continue;
    }
    const valueDiv = document.createElement("div");
    valueDiv.innerHTML = todo[labels[i]];
    div.append(valueDiv);
  }
  const editBtn = addTodoEditBtn();
  div.appendChild(editBtn);
}

function addTodoEditBtn() {
  const editBtn = document.createElement("button");
  editBtn.innerHTML = "edit";
  editBtn.classList.add("edit-todo");
  return editBtn;
}

function printTodo(list = "home") {
  todoList.innerHTML = "";
  const hash = fetchTodo(list);
  const keys = Object.keys(hash);
  for (let i = 0; i <= keys.length - 1; i++) {
    const key = keys[i];
    const item = hash[key];
    const todo = createTodoDiv(item, key);
    cacheEditBtnListener(todo);
    todoList.appendChild(todo);
  }
}

function appendInputField() {
  const div = document.createElement("div");
  div.setAttribute("id", "list-name-container");
  div.classList.add("visible");
  const inputField = document.createElement("input");
  inputField.setAttribute("id", "input-list");
  const submit = document.createElement("button");
  submit.setAttribute("id", "submit-list");
  submit.innerHTML = "create list";
  div.appendChild(inputField);
  div.appendChild(submit);
  dropdownContainer.appendChild(div);

  submit.addEventListener("click", (e) => {
    const input = inputField.value;
    if(listDuplicated(input.toLowerCase())){
      prompt(`${input} list is already exists!`)
      return;
    }
    createList(input);
    printLists();
    const listBtns = cacheListBtns();
    listenListBtns(listBtns);
    div.remove();
  });
}

function printLists() {
  dropdownList.innerHTML = "";
  const array = fetchList();

  for (let i = 0; i < array.length; i++) {
    const btn = document.createElement("button");
    btn.classList.add("btn-list");
    if (array[i] == "home") {
      continue;
    }
    btn.innerHTML = array[i];
    dropdownList.appendChild(btn);
  }
}

function createEditForm(div) {
  const length = div.children.length - 1;
  const nodeArray = div.children;
  for (let i = length; i >= 1; i--) {
    const element = nodeArray[i];
    element.remove();
  }
  for (let i = 0; i < length - 1; i++) {
    let input = document.createElement("input");
    if (i == 1) {
      input = document.createElement("select");
      const lists = fetchList();
      lists.forEach((list) => {
        const option = document.createElement("option");
        option.innerHTML = list;
        option.setAttribute("value", list);
        input.appendChild(option);
      });
    } else if (i == 2) {
      input.setAttribute("type", "date");
    }
    div.appendChild(input);
  }
  verificationButtons(div);
}

function verificationButtons(div) {
  const submit = document.createElement("button");
  submit.innerHTML = "ok";
  const cancel = document.createElement("button");
  cancel.innerHTML = "cancel";
  const arr = [submit, cancel];
  arr.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = div.id;
      if (e.target.innerHTML == "ok") {
        processEdit(id);
        printTodo(currentList);
      } else {
        processEdit(id);
        printTodo(currentList);
      }
    });
  });
  div.append(submit, cancel);
}

function processEdit(id) {
  const todo = findTodo(id);
  const values = editInputHandler(id);
  const labels = ["description", "list", "date"];
  console.log(values);
  console.log(todo);
  for (let i = 0; i < 3; i++) {
    if (values[i] == "") {
      continue;
    }
    todo.changeAttribute(labels[i], values[i]);
  }
  changeTodoRecord(id, todo);
}

function cacheEditBtnListener(div) {
  div.lastChild.addEventListener("click", (e) => {
    createEditForm(div);
  });
}

export { appendInputField, printLists, printTodo };
