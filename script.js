const input = document.getElementById("new-task");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

addBtn.addEventListener("click", function () {
  const taskText = input.value;
  if (!taskText) return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.className = "deelte-btn";
  li.appendChild(deleteBtn);

  taskList.appendChild(li);

  input.value = "";
});

taskList.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("done");
  }

  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
  }
});
