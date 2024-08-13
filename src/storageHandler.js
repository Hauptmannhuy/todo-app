
function insertTodo(todo){
  const key = retrievePrimaryKey()
 console.log(localStorage.setItem(key, JSON.stringify({
  todo
}))) 
 incrementPrimaryKey()
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
  localStorage.lists += ` ${name}`
}

function fetchList() {
  if (localStorage.lists == undefined){
    localStorage.lists = 'home'
  }
  return localStorage.lists.split(' ')
}

function fetchTodo(list = 'home'){
  let array = []
  list = list.trim()
  for (let i = 0; i < localStorage.length-2; i++) {
    const item = JSON.parse(localStorage.getItem(i)).todo
    if (item.list == list) {
      array.push(item)
    }
  }
  return array

}

export {insertTodo, createList, fetchList, fetchTodo}