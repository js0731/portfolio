const add_input = document.querySelector(".add_input");
const add_btn = document.querySelector(".add_btn");
const todolist = document.querySelector(".todolist");
let data = JSON.parse(localStorage.getItem("todolist")) || [];

todolist.addEventListener("click", removeTodo);
todolist.addEventListener("click", todoEvent);
add_btn.addEventListener("click", addTodo);
add_input.addEventListener("keydown", addTodo);
updataTodoList();

function addTodo(e) {
  if (!add_input.value.trim()) return;
  if (e.keyCode === 13 || e.target.className === "add_btn") {
    data.push({
      todo: add_input.value,
      done: false,
    });
    localStorage.setItem("todolist", JSON.stringify(data));
    updataTodoList();
    add_input.value = "";
  }
}

function updataTodoList() {
  let str = "";
  for (let i = 0; i < data.length; i++) {
    str += `
        <li class="todo">
            <input type="checkbox" id="todo_${i}"
             ${data[i].done ? "checked" : ""} >
            <label  data-index="${i}" for="todo_${i}">
                <span class="checkBox" data-index="${i}"></span>${data[i].todo}
            </label>
            <a class="remove" data-index="${i}" href="#"></a>
        </li>
        `;
  }
  todolist.innerHTML = str;
}

function removeTodo(e) {
  if (e.target.nodeName === "LABEL" || e.target.nodeName === "SPAN") {
  }
  // 更新列表

  if (e.target.className === "remove") {
    index = e.target.dataset.index;
    data.splice(index, 1);
    localStorage.setItem("todolist", JSON.stringify(data));
    updataTodoList();
  }
}
function todoEvent(e) {
  if (e.target.nodeName === "LABEL" || e.target.nodeName === "SPAN") {
    index = e.target.dataset.index;
    data[index].done = !data[index].done;
    localStorage.setItem("todolist", JSON.stringify(data));
  }
}
