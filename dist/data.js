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
const countTask = 0;
const now = Date.now();
// HTML elements
const createButton = document.getElementById('createTask');
const confirmModal = document.getElementById('conf');
const backModal = document.getElementById('cancelBtn');
// 
if (countTask == 0) {
    createButton.style = 'display: flex';
}
else {
    createButton.style = 'display: none';
}
function showModal() {
    const createTaskModal = document.getElementById('inputBox');
    requestAnimationFrame(() => {
        createTaskModal.classList.add('inputboxActive');
    });
}
// function hideModal(): void{
//     const createTaskModal: HTMLElement = document.getElementById('inputBox') as HTMLElement;
//     requestAnimationFrame(() => {
//     createTaskModal.classList.remove('inputboxActive');
//         createTaskModal.classList.add('inputboxInactive');
//         createTaskModal.style.display = 'block';
//     })
// }
// //
createButton.addEventListener('click', showModal);
// confirmModal.addEventListener('click', hideModal);
// backModal.addEventListener('click', hideModal);
