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
//DOM elements
const tasks = [];
const createButton = document.getElementById('createTask');
const taskForm = document.getElementById('taskForm');
const inputBox = document.getElementById('inputBox');
const cancelBtn = document.getElementById('cancelBtn');
const taskList = document.getElementById('board');
// func
function updateCreateButton() {
    if (tasks.length === 0) {
        createButton.classList.add('centered');
        createButton.classList.remove('floating');
    }
    else {
        createButton.classList.remove('centered');
        createButton.classList.add('floating');
    }
    createButton.style.display = 'flex';
}
function showModal() {
    inputBox.style.display = 'block';
    inputBox.classList.remove('inputboxInactive');
    requestAnimationFrame(() => {
        inputBox.classList.add('inputboxActive');
        const titleInput = taskForm.querySelector('input[name="titleTask"]');
        if (titleInput) {
            titleInput.focus();
        }
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
function createTaskElement(task) {
    const box = document.createElement('div');
    box.className = 'box';
    box.dataset.taskId = task.id;
    const editedText = task.createdAt === task.editedAt
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
function renderEditForm(task) {
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
function renderTask(task) {
    const box = createTaskElement(task);
    taskList.appendChild(box);
}
createButton.addEventListener('click', (e) => {
    e.stopPropagation();
    showModal();
});
cancelBtn.addEventListener('click', hideModal);
document.addEventListener('click', (e) => {
    const target = e.target;
    if (inputBox.style.display === 'none')
        return;
    if (inputBox.contains(target))
        return;
    hideModal();
});
let errorTimeout = null;
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(taskForm);
    const title = String(formData.get('titleTask') ?? '').trim();
    const titleInput = taskForm.querySelector('input[name="titleTask"]');
    const status = formData.get('activeTask');
    const level = formData.get('levelTask');
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
// button "Ready"
taskList.addEventListener('click', (e) => {
    const target = e.target;
    const completeBtn = target.closest('.complete');
    if (!completeBtn)
        return;
    const box = completeBtn.closest('.box');
    if (!box)
        return;
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
taskList.addEventListener('click', (e) => {
    const target = e.target;
    const redaktBtn = target.closest('.redakt');
    if (!redaktBtn)
        return;
    const box = redaktBtn.closest('.box');
    if (!box)
        return;
    const taskId = box.dataset.taskId;
    if (!taskId)
        return;
    const task = tasks.find(t => t.id === taskId);
    if (!task)
        return;
    if (box.classList.contains('editing')) {
        const titleInput = box.querySelector('.edit-title');
        const statusSelect = box.querySelector('.edit-status');
        const levelSelect = box.querySelector('.edit-level');
        const newTitle = titleInput.value.trim();
        if (!newTitle) {
            titleInput.style.border = '1px solid rgb(182, 72, 72)';
            setTimeout(() => titleInput.style.border = '', 1500);
            return;
        }
        task.title = newTitle;
        task.status = statusSelect.value;
        task.level = levelSelect.value;
        task.editedAt = Date.now();
        box.classList.remove('editing');
        const newBox = createTaskElement(task);
        box.replaceWith(newBox);
        newBox.classList.add('edited-flash');
        setTimeout(() => {
            newBox.classList.remove('edited-flash');
        }, 1200);
        updateCreateButton();
    }
    else {
        box.classList.add('editing');
        box.innerHTML = renderEditForm(task);
        const titleInput = box.querySelector('.edit-title');
        if (titleInput)
            titleInput.focus();
    }
});
updateCreateButton();
