/* eslint-disable eqeqeq */
import './style.css';
import { addTask, loadTasks } from '../modules/function.mjs';
import { removeBookUI, updateLS } from '../modules/removeFunc.js';
import editUI from '../modules/editFunc.js';

// DOM Selectors
const addBtn = document.getElementById('add-btn');
const tasksSection = document.querySelector('.task-section');

// click Events
window.addEventListener('DOMContentLoaded', loadTasks);
addBtn.addEventListener('click', addTask);

// function to remove the task from the UI

// function to remove task
// updating the LS & the array of tasks

tasksSection.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-btn')) {
    removeBookUI(e.target);
    updateLS(e.target.getAttribute('data-id'));
  }

  //   if (e.target.classList.contains('check')) {
  //     console.log(editUI(e.target));
  //   }

  if (e.target.classList.contains('edit-btn')) {
    editUI(e.target);
  }
});

// editing function
// function to handle UI

// function to update the LS
