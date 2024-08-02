
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

export default insertTodo