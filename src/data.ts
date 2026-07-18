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
  createButton.style.display = tasks.length === 0 ? 'flex' : 'none';
}

function showModal(): void {
  inputBox.style.display = 'block';
  inputBox.classList.remove('inputboxInactive');
  requestAnimationFrame(() => {
    inputBox.classList.add('inputboxActive');
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

function renderTask(task: Task): void {
  const box = document.createElement('div');
  box.className = 'box';

  const editedText =
    task.createdAt === task.editedAt
      ? 'Изменений не было'
      : `Изменено: ${new Date(task.editedAt).toLocaleString()}`;

  box.innerHTML = `
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

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(taskForm);

  const title = String(formData.get('titleTask') ?? '').trim();
  const status = formData.get('activeTask') as TaskStatus;
  const level = formData.get('levelTask') as TaskLevel;

  if (!title) return;

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

updateCreateButton();
