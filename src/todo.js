import { compareAsc, format } from "date-fns";

class Todo {
  constructor(
    description = "description",
    list = "home",
    check = false,
    date = "date",
  ) {
    this.description = description;
    this.list = list;
    this.check = check;
    this.date = date;
  }

  changeAttribute(type, value) {
    console.log(`type:${type} value:${value}`);
    this[type] = value;
  }
}

export default Todo;
