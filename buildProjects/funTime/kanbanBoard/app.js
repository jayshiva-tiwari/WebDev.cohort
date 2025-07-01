// alert('hello world');
const addTaskBtn = document.getElementById('addTaskButton');

const taskList = document.getElementById('taskList');
addTaskBtn.addEventListener('click', function() {
    const input =prompt('Add a new Board');
    if (!input) {
        console.log(input);
        
        alert('Please enter a task');
        return;
    }
    const taskCard = document.createElement('div');

    taskCard.classList.add('task', 'bg-gray-300/50', 'hover:bg-gray-200', 'cursor-pointer', 'transition-colors', 'duration-300', 'p-2', 'rounded', 'flex', 'justify-between', 'items-center');
    taskCard.setAttribute('draggable', 'true');
    const taskText = document.createElement('span');
    taskText.textContent = input;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('deleteTaskButton', 'bg-red-500/70', 'cursor-pointer', 'text-white', 'p-1', 'rounded');

    deleteBtn.addEventListener('click', ()=>{
        taskCard.remove();
    })

    taskCard.appendChild(taskText);
    taskCard.appendChild(deleteBtn);
    
    taskList.appendChild(taskCard);
});


const allBoards = document.querySelectorAll('.board');
const allTasks = document.querySelectorAll('.task');
allTasks.forEach(task=> {
    task.addEventListener('dragstart', () => {
        task.classList.add('dragging');
    });
    task.addEventListener('dragend', () => {
        task.classList.remove('dragging');
    });
});

allBoards.forEach((board) => {
    board.addEventListener('dragover', () => {
        const draggingTask = document.querySelector('.dragging');
        board.appendChild(draggingTask);
        console.log(board, "Drag over board", draggingTask);
        
    }); 
})