"use strict";
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
//Tech elements
const tasks = [];
const createButton = document.getElementById('createTask');
const taskForm = document.getElementById('taskForm');
const inputBox = document.getElementById('inputBox');
const cancelBtn = document.getElementById('cancelBtn');
const taskList = document.getElementById('board');
// 
function updateCreateButton() {
    createButton.style.display = tasks.length === 0 ? 'flex' : 'none';
}
function showModal() {
    inputBox.style.display = 'block';
    inputBox.classList.remove('inputboxInactive');
    requestAnimationFrame(() => {
        inputBox.classList.add('inputboxActive');
    });
}
function hideModal() {
    inputBox.classList.remove('inputboxActive');
    inputBox.classList.add('inputboxInactive');
    function onAnimationEnd() {
        inputBox.style.display = 'none';
        inputBox.classList.remove('inputboxInactive');
        inputBox.removeEventListener('animationend', onAnimationEnd);
    }
    inputBox.addEventListener('animationend', onAnimationEnd);
}
function levelToText(level) {
    switch (level) {
        case 'low':
            return 'Легкая';
        case 'medium':
            return 'Средняя';
        case 'high':
            return 'Высокая';
    }
}
function renderTask(task) {
    const box = document.createElement('div');
    box.className = 'box';
    const editedText = task.createdAt === task.editedAt
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
createButton.addEventListener('click', showModal);
cancelBtn.addEventListener('click', hideModal);
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(taskForm);
    const title = String(formData.get('titleTask') ?? '').trim();
    const status = formData.get('activeTask');
    const level = formData.get('levelTask');
    if (!title)
        return;
    const now = Date.now();
    const newTask = {
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
