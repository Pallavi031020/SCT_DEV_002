document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("task-form");
  const taskInput = document.getElementById("task-input");
  const taskTime = document.getElementById("task-time");
  const taskList = document.getElementById("task-list");

  taskForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const taskText = taskInput.value;
    const taskDateTime = taskTime.value;

    const li = document.createElement("li");
    li.innerHTML = `
      <span>${taskText} - <small>${taskDateTime}</small></span>
      <div>
        <button onclick="completeTask(this)">✅</button>
        <button onclick="deleteTask(this)">❌</button>
      </div>
    `;
    taskList.appendChild(li);
    taskForm.reset();
  });
});

function completeTask(btn) {
  const li = btn.closest("li");
  li.classList.toggle("completed");
}

function deleteTask(btn) {
  const li = btn.closest("li");
  li.remove();
}
