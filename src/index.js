import _ from 'lodash';
import './style.css';
import {addTask, loadTasks, tasks} from '../modules/function.mjs';


//DOM Selectors
const addBtn = document.getElementById('add-btn');
const removeBtn = document.querySelectorAll('.remove-btn')
const tasksSection = document.querySelector('.task-section');


window.addEventListener('DOMContentLoaded', loadTasks);
addBtn.addEventListener('click', addTask);

//function to remove the task from the UI
const removeBookUI = (e) => {
        e.parentElement.parentElement.parentElement.remove()
}

//function to remove task
    //updating the LS & the array of tasks
const updateLS = (id) => {
    let updated = JSON.parse(localStorage.getItem('tasks'));
    updated.forEach((task, index) => {
        if(task.id == id) {
            updated.splice(index, 1);
        };
    });
    localStorage.setItem('tasks',JSON.stringify(updated));
    tasks = updated;
}

tasksSection.addEventListener('click', (e) => {
    if(e.target.classList.contains('remove-btn')){
        updateLS(e.target.getAttribute('data-id'));
        console.log(tasks);
        removeBookUI(e.target);
    }
});

//editing function



