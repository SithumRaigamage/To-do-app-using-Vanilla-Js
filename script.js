// Handle the 'Add' button click event
function handleAddClick() {
    // Get the values from the input fields
    const task = document.getElementById('task').value;
    const description = document.getElementById('description').value;
    const duration = document.getElementById('duration').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;

    // Check if all fields are filled in before adding the task
    if (!task || !description || !duration || !startDate || !endDate) {
        alert("Please fill in all fields.");
        return;
    }

    // Create a new table row with the input data
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td>${task}</td>
        <td>${description}</td>
        <td>${duration} hours</td>
        <td>${startDate}</td>
        <td>${endDate}</td>
        <td>
            <button onclick="editTask(this)">
                <i class="fas fa-edit"></i> <!-- Edit icon -->
            </button>
            <button onclick="deleteTask(this)">
                <i class="fas fa-trash-alt"></i> <!-- Delete icon -->
            </button>
        </td>
    `;

    // Append the new row to the table body
    const tableBody = document.querySelector('.table-container tbody');
    tableBody.appendChild(newRow);

    // Clear the input fields after adding the task
    document.getElementById('task').value = '';
    document.getElementById('description').value = '';
    document.getElementById('duration').value = '';
    document.getElementById('start-date').value = '';
    document.getElementById('end-date').value = '';
}

// Edit the task when 'Edit' button is clicked
function editTask(button) {
    const row = button.closest('tr');
    const cells = row.querySelectorAll('td');

    // Set the values back to the input fields
    document.getElementById('task').value = cells[0].textContent;
    document.getElementById('description').value = cells[1].textContent;
    document.getElementById('duration').value = cells[2].textContent.replace(" hours", "");
    document.getElementById('start-date').value = cells[3].textContent;
    document.getElementById('end-date').value = cells[4].textContent;

    // Remove the row
    row.remove();
}

// Delete the task when 'Delete' button is clicked
function deleteTask(button) {
    const row = button.closest('tr');
    row.remove();
}
