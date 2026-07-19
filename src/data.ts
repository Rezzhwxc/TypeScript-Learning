// enum VocaloidId{
//     Miku = 1,
//     Teto = 2,
//     Duo = 3
// }
// interface VocaloidInfo{
//     id: VocaloidId,
//     name: string
// }
// interface TrackInfo{
//     readonly id: number,
//     title: string,
//     audioPath: string,
//     coverPath: string,
//     vocaloidId: VocaloidId
// }

type TaskStatus = 'active' | 'done';
type TaskLevel = 'low' | 'medium' | 'high';

interface Task {
    id: string;
    title: string;
    status: TaskStatus;
    level: TaskLevel;
    createdAt: number;
    editedAt: number;
}

//DOM elements
const tasks: Task[] = [];

const createButton = document.getElementById('createTask') as HTMLButtonElement;
const taskForm = document.getElementById('taskForm') as HTMLFormElement;
const inputBox = document.getElementById('inputBox') as HTMLDivElement;
const cancelBtn = document.getElementById('cancelBtn') as HTMLButtonElement;
const taskList = document.getElementById('board') as HTMLDivElement;

// func

function updateCreateButton(): void {
  if (tasks.length === 0) {
    createButton.classList.add('centered');
    createButton.classList.remove('floating');
  } else {
    createButton.classList.remove('centered');
    createButton.classList.add('floating');
  }
  createButton.style.display = 'flex';
}

function showModal(): void {
  inputBox.style.display = 'block';
  inputBox.classList.remove('inputboxInactive');
  requestAnimationFrame(() => {
    inputBox.classList.add('inputboxActive');
    
    const titleInput = taskForm.querySelector('input[name="titleTask"]') as HTMLInputElement;
    if (titleInput) {
      titleInput.focus();
    }
  });
}

function hideModal(): void {
  inputBox.classList.remove('inputboxActive');
  inputBox.classList.add('inputboxInactive');

  function onAnimationEnd() {
    inputBox.style.display = 'none';
    inputBox.classList.remove('inputboxInactive');
    inputBox.removeEventListener('animationend', onAnimationEnd);
  }

  inputBox.addEventListener('animationend', onAnimationEnd);
}

function levelToText(level: TaskLevel): string {
  switch (level) {
    case 'low':
      return 'Легкая';
    case 'medium':
      return 'Средняя';
    case 'high':
      return 'Высокая';
  }
}

function createTaskElement(task: Task): HTMLDivElement {
  const box = document.createElement('div');
  box.className = 'box';
  box.dataset.taskId = task.id;

  const editedText =
    task.createdAt === task.editedAt
      ? 'Изменений не было'
      : `Изменено: ${new Date(task.editedAt).toLocaleString()}`;

  box.innerHTML = `
    <button class="delete-btn" data-tooltip="Delete a task" type="button"><img src="/img/delete.png" alt="Delete"></button>
    <h1 class="zadacha">${task.title}</h1>
    <h1 id="active" class="${task.status === 'active' ? 'trueActive' : 'falseActive'}">
      ${task.status === 'active' ? 'Активное' : 'Неактивное'}
    </h1>
    <p class="level">Сложность - ${levelToText(task.level)}</p>
    <p class="createdAt">Создано: ${new Date(task.createdAt).toLocaleString()}</p>
    <p class="editedAt">${editedText}</p>
    <div class="boxButt">
      <button class="complete" type="button">Готово</button>
      <button class="redakt" type="button">Редактировать</button>
    </div>
  `;
  return box;
}

function renderEditForm(task: Task): string {
  const statusOptions = `
    <option value="active" ${task.status === 'active' ? 'selected' : ''}>Активное</option>
    <option value="done" ${task.status === 'done' ? 'selected' : ''}>Неактивное</option>
  `;
  const levelOptions = `
    <option value="low" ${task.level === 'low' ? 'selected' : ''}>Легкая</option>
    <option value="medium" ${task.level === 'medium' ? 'selected' : ''}>Средняя</option>
    <option value="high" ${task.level === 'high' ? 'selected' : ''}>Высокая</option>
  `;
  return `
    <div class="edit-form">
      <h1>Edit a task</h1>
      <input type="text" class="edit-title" placeholder="Название задачи" value="${task.title}" />
      <select class="edit-status">${statusOptions}</select>
      <select class="edit-level">${levelOptions}</select>
      <button class="redakt save-btn" type="button">Сохранить</button>
    </div>
  `;
}

function renderTask(task: Task): void {
  const box = createTaskElement(task);
  taskList.appendChild(box);
}

createButton.addEventListener('click', (e) => {
  e.stopPropagation();
  showModal();
});
cancelBtn.addEventListener('click', hideModal);

document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  if (inputBox.style.display === 'none') return;
  if (inputBox.contains(target)) return;
  hideModal();
});

let errorTimeout: ReturnType<typeof setTimeout> | null = null;

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(taskForm);
  const title = String(formData.get('titleTask') ?? '').trim();
  const titleInput = taskForm.querySelector('input[name="titleTask"]') as HTMLInputElement;
  const status = formData.get('activeTask') as TaskStatus;
  const level = formData.get('levelTask') as TaskLevel;

  if (!title) {
    if (errorTimeout) {
      clearTimeout(errorTimeout);
      errorTimeout = null;
    }
    titleInput.style.border = '1px solid rgb(194, 63, 63)';
    titleInput.placeholder = 'Введите название задачи!';
    errorTimeout = setTimeout(() => {
      titleInput.style.border = '';
      titleInput.placeholder = 'Название задачи';
      errorTimeout = null;
    }, 2000);
    return;
  }

  if (errorTimeout) {
    clearTimeout(errorTimeout);
    errorTimeout = null;
    titleInput.style.border = '';
    titleInput.placeholder = 'Название задачи';
  }

  const now = Date.now();

  const newTask: Task = {
    id: crypto.randomUUID(),
    title,
    status,
    level,
    createdAt: now,
    editedAt: now,
  };

  tasks.push(newTask);
  renderTask(newTask);
  updateCreateButton();
  taskForm.reset();
  hideModal();
});

// button "Ready"
taskList.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  const completeBtn = target.closest('.complete');
  if (!completeBtn) return;

  const box = completeBtn.closest('.box') as HTMLDivElement;
  if (!box) return;

  box.classList.add('completed');

  setTimeout(() => {
    const taskId = box.dataset.taskId;
    if (taskId) {
      const index = tasks.findIndex(t => t.id === taskId);
      if (index !== -1) {
        tasks.splice(index, 1);
      }
    }
    box.remove();
    updateCreateButton();
  }, 400);
});


// button "Edit"

taskList.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  const redaktBtn = target.closest('.redakt');
  if (!redaktBtn) return;

  const box = redaktBtn.closest('.box') as HTMLDivElement;
  if (!box) return;

  const taskId = box.dataset.taskId;
  if (!taskId) return;

  const task = tasks.find(t => t.id === taskId);
  if (!task) return;

  if (box.classList.contains('editing')) {
    
    const titleInput = box.querySelector('.edit-title') as HTMLInputElement;
    const statusSelect = box.querySelector('.edit-status') as HTMLSelectElement;
    const levelSelect = box.querySelector('.edit-level') as HTMLSelectElement;

    const newTitle = titleInput.value.trim();
    if (!newTitle) {
      titleInput.style.border = '1px solid rgb(182, 72, 72)';
      setTimeout(() => titleInput.style.border = '', 1500);
      return;
    }

    
    task.title = newTitle;
    task.status = statusSelect.value as TaskStatus;
    task.level = levelSelect.value as TaskLevel;
    task.editedAt = Date.now();

    box.classList.remove('editing');

    const newBox = createTaskElement(task);
    box.replaceWith(newBox);

    newBox.classList.add('edited-flash');
    setTimeout(() => {
      newBox.classList.remove('edited-flash');
    }, 1200);

    updateCreateButton();
  } else {
    box.classList.add('editing');
    box.innerHTML = renderEditForm(task);

    const titleInput = box.querySelector('.edit-title') as HTMLInputElement;
    if (titleInput) titleInput.focus();
  }
});

// button "Delete"

taskList.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  const deleteBtn = target.closest('.delete-btn');
  if (!deleteBtn) return;

  const box = deleteBtn.closest('.box') as HTMLDivElement;
  if (!box) return;

  box.classList.add('deleting');

  setTimeout(() => {
    const taskId = box.dataset.taskId;
    if (taskId) {
      const index = tasks.findIndex(t => t.id === taskId);
      if (index !== -1) {
        tasks.splice(index, 1);
      }
    }
    box.remove();
    updateCreateButton();
  }, 400);
});

updateCreateButton();
