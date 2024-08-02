import { compareAsc, format } from "date-fns";

class Todo {
  
  constructor(title) {
    this.title = title
    this.description = null
    this.priority = null
    this.list = 'default'
    this.check = false
    this.date = null
  }

  //make setters and getters

  //create separate change attr of date

  changeAttribute(type, value) {
      this[type] = value
  }

}

 export default Todo 