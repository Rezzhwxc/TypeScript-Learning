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
// 
if (countTask == 0) {
    createButton.style = 'display: flex';
}
else {
    createButton.style = 'display: none';
}
function createTask() {
    console.log('alelelelele');
    const createTaskModal = document.getElementById('inputBox');
    createTaskModal.style.display = 'block';
    requestAnimationFrame(() => {
        createTaskModal.classList.add('inputboxActive');
    });
}
createButton.addEventListener('click', createTask);
