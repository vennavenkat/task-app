let editMode = false;
let taskToEdit = null;

document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        if (editMode) {
            updateTask(taskText);
        } else {
            addTask(taskText);
        }
        taskInput.value = "";
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('task-list');

    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';

    const taskName = document.createElement('span');
    taskName.className = 'task-name';
    taskName.textContent = taskText;

    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'actions';

    const editButton = document.createElement('button');
    editButton.className = 'edit';
    editButton.innerHTML = '<i class="fas fa-edit"></i>';
    editButton.addEventListener('click', () => editTask(taskDiv, taskName));

    const doneButton = document.createElement('button');
    doneButton.className = 'done';
    doneButton.innerHTML = '<i class="fas fa-check-circle"></i>'; // Changed icon
    doneButton.addEventListener('click', () => toggleDone(taskDiv));

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete';
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.addEventListener('click', () => deleteTask(taskDiv));

    actionsDiv.appendChild(editButton);
    actionsDiv.appendChild(doneButton);
    actionsDiv.appendChild(deleteButton);

    taskDiv.appendChild(taskName);
    taskDiv.appendChild(actionsDiv);

    taskList.appendChild(taskDiv);
}

function editTask(taskDiv, taskName) {
    const taskInput = document.getElementById('new-task');
    taskInput.value = taskName.textContent;
    editMode = true;
    taskToEdit = { taskDiv, taskName };
    document.getElementById('add-task').textContent = 'Update Task';
}

function updateTask(newTaskText) {
    if (taskToEdit) {
        taskToEdit.taskName.textContent = newTaskText;
        taskToEdit = null;
    }
    editMode = false;
    document.getElementById('add-task').textContent = 'Add Task';
}

function toggleDone(taskDiv) {
    taskDiv.classList.toggle('done');
}

function deleteTask(taskDiv) {
    taskDiv.remove();
}
