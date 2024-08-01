import { compareAsc, format } from "date-fns";

class Todo {
  
  constructor(title,description,list,priority) {
    this.title = title
    this.description = description
    this.priority = priority
    this.list = list
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