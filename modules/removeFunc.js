// function to remove task
// updating the LS & the array of tasks
// function to remove the task from the UI

const removeBookUI = (e) => {
  e.parentElement.parentElement.parentElement.remove();
};

const updateLS = (id) => {
  const updated = JSON.parse(localStorage.getItem('tasks'));
  updated.forEach((task, index) => {
    // eslint-disable-next-line eqeqeq
    if (task.id == id) {
      updated.splice(index, 1);
    }
  });
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < updated.length; i++) {
    updated[i].id = i + 1;
  }
  localStorage.setItem('tasks', JSON.stringify(updated));
};

export { removeBookUI, updateLS };