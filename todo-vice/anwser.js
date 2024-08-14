// 获取输入框元素
const inputElement = document.querySelector(".input");
const addBtn = document.querySelector(".topbutton");
const todoList = document.querySelector(".todo-list");
const completedList = document.querySelector(".completed-list");
const todoinput = document.querySelector(".todolistinput");
const people = {
  name: "Tom",
};

addBtn.addEventListener("click", handleClick);

function handleClick() {
  const newItem = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("name", "task");
  checkbox.addEventListener("change", handleChange);
  function handleChange() {
    if (checkbox.checked) {
      completedList.appendChild(newItem);
    } else {
      todoList.appendChild(newItem);
    }
  }

  const label = document.createElement("span");
  label.innerHTML = inputElement.value;

  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("type", "submit");
  deleteButton.innerHTML = "Delete";
  deleteButton.addEventListener("click", handleDelete);

  newItem.appendChild(checkbox);
  newItem.appendChild(label);
  newItem.appendChild(deleteButton);

  console.dir(inputElement);

  todoList.appendChild(newItem);

  function handleDelete() {
    // todoList.removeChild(newItem);
    newItem.remove();
  }
}

const toDoListUl = document.querySelector(".todo-list");

todoinput.addEventListener("input", handleInput);

function handleInput() {
  const displayArray = [];
  const keyword = todoinput.value;
  for (let item of toDoListUl.children) {
    console.dir(item);
    const span = item.querySelector("span");
    const todoText = span.textContent;

    console.log({
      todoText,
      keyword,
    });

    if (todoText.includes(keyword)) {
      displayArray.push(item);
    }
  }

  toDoListUl.innerHTML = "";

  for (const item of displayArray) {
    toDoListUl.appendChild(item);
  }

  console.dir(displayArray);
}
