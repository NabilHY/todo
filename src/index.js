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
    for(let i = 0 ;i < updated.length; i++){
        updated[i].id = i + 1;
    }
    localStorage.setItem('tasks',JSON.stringify(updated));
    tasks = updated;
}

tasksSection.addEventListener('click', (e) => {
    if(e.target.classList.contains('remove-btn')){
        removeBookUI(e.target);
        updateLS(e.target.getAttribute('data-id'));
        updateIndex();
    }

    if(e.target.classList.contains('check')){
        console.log(editUI(e.target))
    }

    if(e.target.classList.contains('edit-btn')){
        editUI(e.target);
        console.log(e.target.parentElement.parentElement.previousElementSibling);
    }
});

let fieldValue;

//editing function
// function to handle UI 
    const editUI = (e) => {
    let field = e.parentElement.parentElement.previousElementSibling;
        field.setAttribute("value","");
        field.removeAttribute("readonly");
        field.focus();
        // e.removeAttribute("class");
        e.setAttribute("class","fa-solid fa-check check");
        field.addEventListener('keydown', (ev) => {
            if(ev.key === "Enter") {
                field.setAttribute("readonly","readonly");
                e.setAttribute("class", "edit-btn fa-regular fa-pen-to-square");
                let index = e.getAttribute('data-id');
                let arr = JSON.parse(localStorage.getItem('tasks'));
                arr.forEach((task) => {
                    if(task.id == index){
                        task.task = field.value;
                    }
                });
                localStorage.setItem('tasks', JSON.stringify(arr));
            }
        });
    }

// function to update the LS


