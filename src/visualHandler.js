import { createList, fetchList } from "./storageHandler"

const dropdownList = document.querySelector('.dropdown-lists')


function appendTodo(todo){
  const todoList = document.getElementById('list-container')
  const divTodo = createTodoDiv(todo)  
  todoList.appendChild(divTodo)
}


function createTodoDiv(todo) {
  const div = document.createElement('div')
  div.classList.add('todo')
  const labels = ['title','description','priority','list','check','date']
  for (let i = 0; i < labels.length; i++) {
    const label = labels[i];
    const labelDiv = document.createElement('div')
    labelDiv.innerHTML = `${label}: ${todo[label]}`
    div.appendChild(labelDiv)
  }
  return div
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
    dropdownList.appendChild(div)

    submit.addEventListener('click',(e)=>{
      const input = inputField.value
      createList(input)
      printLists()
      div.remove()
    })
  }

  function printLists () {
    dropdownList.innerHTML = ''
    const ul = document.createElement('ul')
    const array = fetchList()

    for (let i = 0; i < array.length; i++) {
      const li = document.createElement('li')
      li.innerHTML = array[i]     
      ul.appendChild(li) 
    }
    dropdownList.appendChild(ul)
  }

  printLists()

export {appendTodo, appendInputField}