// 获取输入框元素
const inputElement = document.querySelector('.input');
const addBtn = document.querySelector(".topbutton")
const todoList = document.querySelector(".todo-list")

const people = {
  name: 'Tom',
}

addBtn.addEventListener("click",handleClick)

function handleClick(){
  const newItem = document.createElement("li")

  const checkbox = document.createElement("input")
  checkbox.setAttribute("type","checkbox")
  checkbox.setAttribute("name","task")
  
  const label = document.createElement("span")
label.innerHTML = inputElement.value

  const deleteButton = document.createElement("button")
  deleteButton.setAttribute("type","submit")
  deleteButton.innerHTML = "Delete"

  deleteButton.addEventListener("click", handleDelete)

  newItem.appendChild(checkbox)
  newItem.appendChild(label)
  newItem.appendChild(deleteButton)

  console.dir(inputElement)

  todoList.appendChild(newItem)

  function handleDelete(){
    // todoList.removeChild(newItem);
    newItem.remove()
  }
}





