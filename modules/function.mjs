
const tasksSection = document.querySelector('.task-section');

let tasks = [];

class Task {
    constructor(task) {
        this.task = task;
        this.status = false;
        this.id = tasks.length + 1;
    }
}

// Implement a function for adding a new task (add a new element to the array).
//1. Create a function that loads items from local storage

const loadTasks = () => {
    if (localStorage.getItem("tasks") !== null) {
        let storageTasks = JSON.parse(localStorage.getItem('tasks'));
        tasks = storageTasks;
        storageTasks.forEach((task) => {
            tasksSection.innerHTML += `
            <div class="task-row">
                <input type="checkbox" class="status">
                <p>${task.task}</p>
                <div class="buttons">
                    <button class="edit-btn">
                        <i class="fa-regular fa-pen-to-square"></i>
                    </button>
                    <button class="remove-btn" >
                        <i data-id="${task.id}" class="remove-btn fa-solid fa-delete-left"></i>
                    </button>
                </div>
            </div> 
                `;
        });
    }
}



const addTask = (e) => {
    e.preventDefault();
    let taskSelector = document.querySelector('#task-value');
    let taskValue = taskSelector.value;
    let newTask = new Task(taskValue);
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    tasksSection.innerHTML += `
    <div class="task-row">
        <input type="checkbox" class="status">
        <p>${newTask.task}</p>
        <div class="buttons">
            <button class="edit-btn">
                <i class="fa-regular fa-pen-to-square"></i>
            </button>
            <button class="remove-btn">
                <i data-id=${newTask.id} class="fa-solid fa-delete-left"></i>
            </button>
        </div>
    </div> 
    `;
    document.querySelector('#task-value').value = '';
}

export {addTask, loadTasks, tasks};