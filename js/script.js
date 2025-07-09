var tasks = [];
const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    tasks.push({
      id: tasks.length,
      name: taskText,
      done: false,
    });

    taskInput.value = "";
    renderTasks();
  }
}

function renderTasks() {
  taskList.innerHTML = "";

  for (let index = 0; index < tasks.length; index++) {
    const task = tasks[index];
    const li = document.createElement("li");

    // عنصر لاسم المهمة
    const span = document.createElement("span");
    span.textContent = task.name + " ";
    if (task.done) {
      if (task.done) {
  span.style.textDecoration = "line-through";
  span.style.color = "green"; // ✅ لون مختلف للمهمة المكتملة
}

    }

    // زرار Toggle
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "Toggle";
    toggleBtn.onclick = () => toggleTaskStatus(index);
   

    // زرار Delete
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => deleteTask(index);
   

    // إضافة العناصر إلى <li>
    li.appendChild(span);
    li.appendChild(toggleBtn);
    li.appendChild(deleteBtn);

    // إضافة <li> إلى القائمة
    taskList.appendChild(li);
  }
}

function toggleTaskStatus(index) {
  tasks[index].done = !tasks[index].done;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

setInterval(() => {
  const allDone = tasks.length > 0 && tasks.every((task) => task.done);
  if (allDone) {
    console.log("All tasks done!");
  }
}, 10000);
