import Todo from "./todo"

function insertTodo(todo){
  const key = retrievePrimaryKey()
  console.log(key)
 localStorage.setItem(key, JSON.stringify({
  todo
}))
 incrementPrimaryKey()
}

function changeTodoRecord(id,todo){
 localStorage.setItem(id, JSON.stringify({
    todo
  }))
}

function retrievePrimaryKey() {
  if (!localStorage.getItem('primaryKey')){
    localStorage.setItem('primaryKey','0')
    return '0'
  }
  else {
   return localStorage.getItem('primaryKey')
  }
}

function incrementPrimaryKey(){
 let int = parseInt(localStorage.getItem('primaryKey'),10)
 localStorage.setItem('primaryKey',(int+1)+'')
}

function createList(name) {
  name = name.split(' ').join('_')
  localStorage.lists += ` ${name}`
}

function fetchList() {
  if (localStorage.lists == undefined){
    localStorage.lists = 'home'
  }
  const output = []
  let arr = localStorage.lists.split(' ')
  for (let i = 0; i < arr.length; i++) {
    let subarr = arr[i].split('')
    let parts = []
    let spaceIndexFound = false
    let j = 0
    while(j < subarr.length) {
      let spaceIndex = subarr.indexOf('_',j)
      if (spaceIndex != -1 && spaceIndexFound == false ) {
        spaceIndexFound = true
        parts.push(subarr.slice(j,spaceIndex).join(''))
        j = spaceIndex+1
        continue
      }
      else if (spaceIndex == -1){
        parts.push(subarr.slice(j,subarr.length).join(''))
        break
      }
      else if (subarr[j] != '_'){
        spaceIndexFound = false
      }
      j++
    }
    output.push(parts.join(' ').trim())
  }
  return output
}

function fetchTodo(list = 'home'){
  let hash = {}
  list = list.trim()
  for (let i = 0; i < localStorage.length-2; i++) {
    const item = JSON.parse(localStorage.getItem(i)).todo
    if (item.list == list) {
      hash[i] = item
    }
  }
  return hash

}

function instantiateTodo(object){
  const values = Object.values(object['todo'])
  console.log(values)
  const todoInstance = new Todo(...values)
  return todoInstance
}

function findTodo(id){
  let object = JSON.parse(localStorage.getItem(id))
  object = instantiateTodo(object)
  return object
}

export {insertTodo, createList, fetchList, fetchTodo, findTodo,changeTodoRecord}