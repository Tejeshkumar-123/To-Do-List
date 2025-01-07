let taskList = document.getElementById('task-list');
let addTaskBtn = document.getElementById('add-task');

// Function to add task to the list
function addTask(task) {
    let taskElement = document.createElement('li');
    taskElement.classList.add('task');
    taskElement.textContent = task;

    // Add event listener to mark task as completed
    taskElement.addEventListener('click', function() {
        this.classList.toggle('completed');
    });

    taskList.appendChild(taskElement);
}

// Add event listener to add task button
addTaskBtn.addEventListener('click', function() {
    let taskInput = document.getElementById('task');
    let task = taskInput.value.trim();

    if (task !== '') {
        addTask(task);
        taskInput.value = '';
    }
});

