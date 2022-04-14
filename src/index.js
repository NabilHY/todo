import _ from 'lodash';
import './style.css';

//DOM Selectors
const tasksSection = document.querySelector('.task-section');

let tasks = [
    {
        description : "Clean Room",
        completed : false,
        index : 1,
    },
    {
        description : "Grocery Shopping",
        completed : false,
        index : 2,
    }
];

// iterate over tasks
let addTask = () => {
    tasks.forEach((task) => {
        tasksSection.innerHTML += `
        <div class="task-row">
        <i class="fa-regular fa-square-full"></i>
        <p>${task.description}</p>
        <i class="fa-regular fa-pen-to-square"></i>
        </div>
        `;
    })
};

    //populate HTML list
   
addTask();