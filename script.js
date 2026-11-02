const taskForm = document.querySelector('#task-form');
const taskInput = document.querySelector('#task-input');
const taskList = document.querySelector('#task-list');

if (taskForm && taskInput && taskList) {
    taskForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const taskText = taskInput.value.trim();
        if (!taskText) {
            taskInput.focus();
            return;
        }

        const item = document.createElement('li');
        item.className = 'task-item';

        const label = document.createElement('span');
        label.className = 'task-text';
        label.textContent = taskText;

        const completeButton = document.createElement('button');
        completeButton.type = 'button';
        completeButton.className = 'complete-task-button';
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', () => {
            const isComplete = item.classList.toggle('completed');
            completeButton.textContent = isComplete ? 'Undo' : 'Complete';
        });

        const deleteButton = document.createElement('button');
        deleteButton.type = 'button';
        deleteButton.className = 'delete-task-button';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => item.remove());

        item.append(label, completeButton, deleteButton);
        taskList.append(item);
        taskInput.value = '';
        taskInput.focus();
    });
}
