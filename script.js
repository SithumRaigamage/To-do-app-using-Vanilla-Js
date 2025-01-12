// Handle the 'Add' button click event
function handleAddClick() {
    // Get the values from the input fields
    const task = $('#task').val();
    const description = $('#description').val();
    const duration = $('#duration').val();
    const startDate = $('#start-date').val();
    const endDate = $('#end-date').val();

    // Check if all fields are filled in before adding the task
    if (!task || !description || !duration || !startDate || !endDate) {
        alert("Please fill in all fields.");
        return;
    }

    // Create a new table row with the input data
    const newRow = $(`
        <tr>
            <td>${task}</td>
            <td>${description}</td>
            <td>${duration} hours</td>
            <td>${startDate}</td>
            <td>${endDate}</td>
            <td>
                <button class="edit-btn">
                    <i class="fas fa-edit"></i> <!-- Edit icon -->
                </button>
                <button class="delete-btn">
                    <i class="fas fa-trash-alt"></i> <!-- Delete icon -->
                </button>
            </td>
        </tr>
    `);

    // Append the new row to the table body
    $('.table-container tbody').append(newRow);

    // Clear the input fields after adding the task
    $('#task').val('');
    $('#description').val('');
    $('#duration').val('');
    $('#start-date').val('');
    $('#end-date').val('');
}

// Edit the task when 'Edit' button is clicked
$(document).on('click', '.edit-btn', function () {
    const row = $(this).closest('tr');
    const cells = row.children('td');

    // Set the values back to the input fields
    $('#task').val(cells.eq(0).text());
    $('#description').val(cells.eq(1).text());
    $('#duration').val(cells.eq(2).text().replace(" hours", ""));
    $('#start-date').val(cells.eq(3).text());
    $('#end-date').val(cells.eq(4).text());

    // Remove the row
    row.remove();
});

// Delete the task when 'Delete' button is clicked
$(document).on('click', '.delete-btn', function () {
    $(this).closest('tr').remove();
});
