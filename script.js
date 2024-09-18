document.addEventListener('DOMContentLoaded', function () {
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskTitleInput = document.getElementById('task-title');
    const taskDateInput = document.getElementById('task-date');
    const taskPriorityInput = document.getElementById('task-priority');
    const todoList = document.getElementById('todo').querySelector('.task-list');

    // Load tasks from localStorage on page load
    loadTasksFromLocalStorage();

    // Add task functionality
    addTaskBtn.addEventListener('click', function () {
        const taskTitle = taskTitleInput.value;
        const taskDate = taskDateInput.value;
        const taskPriority = taskPriorityInput.value;

        if (taskTitle === '' || taskDate === '') {
            alert('Please provide both task title and due date.');
            return;
        }

        const task = createTaskElement(taskTitle, taskDate, taskPriority);
        todoList.appendChild(task);

        // Save to localStorage
        saveTaskToLocalStorage('todo', taskTitle, taskDate, taskPriority);

        // Clear input fields
        taskTitleInput.value = '';
        taskDateInput.value = '';
    });

    function createTaskElement(title, date, priority) {
        const task = document.createElement('div');
        task.classList.add('task');
        task.draggable = true;

        task.innerHTML = `
            <strong>${title}</strong>
            <p>Due: ${date}</p>
            <p>Priority: ${priority}</p>
            <button onclick="deleteTask(this)">Delete</button>
        `;

        task.addEventListener('dragstart', function () {
            task.classList.add('dragging');
        });

        task.addEventListener('dragend', function () {
            task.classList.remove('dragging');
        });

        return task;
    }

    // Drag-and-drop events
    window.allowDrop = function (ev) {
        ev.preventDefault();
    }

    window.drop = function (ev) {
        ev.preventDefault();
        const draggingTask = document.querySelector('.dragging');
        const targetBoard = ev.target.closest('.board');
        const targetBoardId = targetBoard.id;

        if (targetBoardId === 'in-progress') {
            draggingTask.style.backgroundColor = '#fff9e6';
            draggingTask.style.border = '1px solid #f0e6a8';
        } else if (targetBoardId === 'done') {
            draggingTask.style.backgroundColor = '#e6ffec';
            draggingTask.style.border = '1px solid #c3e9d6';
        } else {
            draggingTask.style.backgroundColor = '#fffae6';
            draggingTask.style.border = '1px solid #ffeeba';
        }

        targetBoard.querySelector('.task-list').appendChild(draggingTask);

        // Update localStorage with the new task position
        saveAllTasks();
    }

    window.deleteTask = function (btn) {
        btn.parentElement.remove();
        saveAllTasks();
    }

    function saveTaskToLocalStorage(boardId, title, date, priority) {
        const tasks = JSON.parse(localStorage.getItem(boardId)) || [];
        tasks.push({ title, date, priority });
        localStorage.setItem(boardId, JSON.stringify(tasks));
    }

    function loadTasksFromLocalStorage() {
        ['todo', 'in-progress', 'done'].forEach(boardId => {
            const tasks = JSON.parse(localStorage.getItem(boardId)) || [];
            const boardList = document.getElementById(boardId).querySelector('.task-list');
            tasks.forEach(task => {
                const taskElement = createTaskElement(task.title, task.date, task.priority);
                boardList.appendChild(taskElement);
            });
        });
    }

    function saveAllTasks() {
        ['todo', 'in-progress', 'done'].forEach(boardId => {
            const tasks = [];
            const taskElements = document.getElementById(boardId).querySelectorAll('.task');
            taskElements.forEach(task => {
                const title = task.querySelector('strong').innerText;
                const date = task.querySelector('p:nth-child(2)').innerText.replace('Due: ', '');
                const priority = task.querySelector('p:nth-child(3)').innerText.replace('Priority: ', '');
                tasks.push({ title, date, priority });
            });
            localStorage.setItem(boardId, JSON.stringify(tasks));
        });
    }
});
