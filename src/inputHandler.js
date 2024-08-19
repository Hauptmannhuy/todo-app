function inputTodoHandler(id) {
  return document.getElementById(id).value;
}

function editInputHandler(id) {
  const div = document.getElementById(id);
  const nodeArray = div.children;
  const values = [];
  for (let i = 1; i < 4; i++) {
    values.push(nodeArray[i].value);
  }
  return values;
}

export { inputTodoHandler, editInputHandler };
