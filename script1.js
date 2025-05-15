function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  // Remove task when clicked
  li.onclick = function() {
    this.remove();
  };

  document.getElementById("taskList").appendChild(li);

  taskInput.value = ""; // Clear input
}
