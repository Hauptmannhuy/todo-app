


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

export default appendTodo