function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Task cannot be empty!");
        return;
    }

    const listItem = document.createElement('li');
    listItem.className = "list-group-item d-flex justify-content-between align-items-center";

    listItem.innerHTML = `
        ${taskText}
        <div>
            <button class="btn btn-success btn-sm complete-btn">Complete</button>
            <button class="btn btn-danger btn-sm delete-btn">Delete</button>
        </div>
    `;

    taskList.appendChild(listItem);

    taskInput.value = "";

    listItem.querySelector('.complete-btn').addEventListener('click', function () {
        listItem.classList.toggle('completed');
    });

    listItem.querySelector('.delete-btn').addEventListener('click', function () {
        taskList.removeChild(listItem);
    });
}

document.getElementById('addTaskButton').addEventListener('click', addTask);

document.getElementById('taskInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

