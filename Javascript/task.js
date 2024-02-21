const submit = document.getElementById('submit');
const newTask = document.getElementById('newTask');
const taskList = document.getElementById('taskList');
submit.disabled = true;
newTask.addEventListener('input', function() {
  submit.disabled = !this.value; 
});
document.getElementById('todo-form').addEventListener('submit', function(event) {
  event.preventDefault(); 
  const task = newTask.value; 
  const listItem = document.createElement('li');
  listItem.textContent = task;
  taskList.append(listItem); 
  newTask.value = '';
  submit.disabled = true; 
  return false}); 
