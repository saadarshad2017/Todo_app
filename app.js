function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
  
    if (taskInput.value.trim() !== "") {
      const taskItem = document.createElement("li");
      taskItem.dataset.taskId = Date.now(); // Assign a unique ID to the task
      taskItem.innerHTML = `
        <span>${taskInput.value}</span>
        <div class="task-buttons">
          <button class="edit-btn" onclick="editTask(this)">Edit</button>
          <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
        </div>
      `;
  
      taskList.appendChild(taskItem);
      taskInput.value = "";
    }
  }
  
  function editTask(button) {
    const taskItem = button.closest("li");
    const taskTextElement = taskItem.querySelector("span");
    const currentText = taskTextElement.textContent;
  
    const taskInput = document.getElementById("taskInput");
    const saveButton = document.getElementById("saveButton");
    const addButton = document.getElementById("addButton");
  
    taskInput.value = currentText;
    saveButton.style.display = "block";
    addButton.style.display = "none";
  
    taskInput.dataset.editingTaskId = taskItem.dataset.taskId;
  
    taskItem.style.display = "none";
  }
  
  function deleteTask(button) {
    const taskItem = button.closest("li");
    taskItem.remove();
  }
  
  function saveTask() {
    const taskInput = document.getElementById("taskInput");
    const taskId = taskInput.dataset.editingTaskId;
  
    const taskItem = document.querySelector(`li[data-task-id="${taskId}"]`);
  
    taskItem.querySelector("span").textContent = taskInput.value;
  
    const saveButton = document.getElementById("saveButton");
    const addButton = document.getElementById("addButton");
  
    saveButton.style.display = "none";
    addButton.style.display = "block";
  
    taskItem.style.display = "flex";
  
    taskInput.value = "";
    taskInput.dataset.editingTaskId = "";
  }
  