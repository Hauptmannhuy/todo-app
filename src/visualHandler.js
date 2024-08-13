import { createList, fetchList, fetchTodo } from "./storageHandler"
import { cacheListBtns,listenListBtns } from "./index"
const dropdownList = document.querySelector('.dropdown-lists')
const dropdownContainer = document.querySelector('.dropdown-container')
const todoList = document.getElementById('todo-container')

function appendTodo(todo){
  const divTodo = createTodoDiv(todo)  
  todoList.appendChild(divTodo)
}

function createTodoDiv(todo) {
  const div = document.createElement('div')
  div.classList.add('todo')
  const labels = ['title','description','priority','list','check','date']
  for (let i = 0; i < labels.length; i++) {
    const label = labels[i]
    const labelDiv = document.createElement('div')
    labelDiv.innerHTML = `${label}: ${todo[label]}`
    div.appendChild(labelDiv)
  }
  return div
}

function printTodo(list = 'home'){
  todoList.innerHTML = ''
  const array = fetchTodo(list)
  console.log(array)
  for (let i = 0; i < array.length; i++) {
    const element = array[i]
    const todo = createTodoDiv(element)
    todoList.appendChild(todo)
  }
}


  function appendInputField(){
    const div = document.createElement('div')
    div.setAttribute('id','list-name-container')
    div.classList.add('visible')
    const inputField = document.createElement('input')
    inputField.setAttribute('id','input-list')
    const submit = document.createElement('button')
    submit.setAttribute('id','submit-list')
    submit.innerHTML = 'create list'
    div.appendChild(inputField)
    div.appendChild(submit)
    dropdownContainer.appendChild(div)

    submit.addEventListener('click',(e)=>{
      const input = inputField.value
      createList(input)
      printLists()
      const listBtns = cacheListBtns()
      listenListBtns(listBtns)
      div.remove()
    })
  }

  function printLists () {
    dropdownList.innerHTML = ''
    const array = fetchList()

    for (let i = 0; i < array.length; i++) {
      const btn = document.createElement('button')
      btn.classList.add('btn-list')
      if (array[i] == 'home') {
        continue
      }
      btn.innerHTML = array[i]     
      dropdownList.appendChild(btn) 
    }
  }




export {appendTodo, appendInputField, printLists, printTodo}