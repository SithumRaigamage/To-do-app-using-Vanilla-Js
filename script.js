const taskListDiv = document.getElementById('task-list');

function addTask() {
    const taskSelect = document.getElementById('task-select').value;
    const taskDesc = document.getElementById('task-desc').value;
    const taskHours = document.getElementById('task-hours').value;

    if (!taskDesc && !taskSelect) {
        alert('Please select or enter a task description!');
        return;
    }

    if (!taskHours) {
        alert('Please enter the estimated hours!');
        return;
    }

    const task = taskSelect || taskDesc; // Use selected task if provided, otherwise user input

    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';
    taskDiv.innerHTML = `
        <span><strong>Task:</strong> ${task} <strong>Hours:</strong> ${taskHours}</span>
        <button onclick="removeTask(this)">Remove</button>
    `;

    taskListDiv.appendChild(taskDiv);

    // Clear inputs
    document.getElementById('task-select').value = "";
    document.getElementById('task-desc').value = "";
    document.getElementById('task-hours').value = "";
}

function removeTask(button) {
    const taskDiv = button.parentElement;
    taskListDiv.removeChild(taskDiv);
}
