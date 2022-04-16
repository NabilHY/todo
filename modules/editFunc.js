const editUI = (e) => {
  const field = e.parentElement.parentElement.previousElementSibling;
  field.setAttribute('value', '');
  field.removeAttribute('readonly');
  field.focus();
  // e.removeAttribute("class");
  e.setAttribute('class', 'fa-solid fa-check check');
  field.addEventListener('keydown', (ev) => {
    if (ev.key === 'Enter') {
      field.setAttribute('readonly', 'readonly');
      e.setAttribute('class', 'edit-btn fa-regular fa-pen-to-square');
      const index = e.getAttribute('data-id');
      const arr = JSON.parse(localStorage.getItem('tasks'));
      arr.forEach((task) => {
        // eslint-disable-next-line eqeqeq
        if (task.id == index) {
          task.task = field.value;
        }
      });
      localStorage.setItem('tasks', JSON.stringify(arr));
    }
  });
};

export default editUI;