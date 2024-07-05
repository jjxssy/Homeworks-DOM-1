'use strict'
// task 1
function changeClass() {
    const paragraph = document.getElementById('paragraph');
    const elem = document.getElementById('box').value;
    paragraph.classList.add(elem);
}
// task 2
function toggle(elem) {
    const paragraph = document.getElementById(elem);
    if (paragraph.classList.contains('visible')) {
        paragraph.classList.remove('visible');
        paragraph.classList.add('hidden');
    } else {
        paragraph.classList.remove('hidden');
        paragraph.classList.add('visible');
    }
}
// task 3
'use strict'
function clicking() {
    const elem = document.getElementById('myButton');
    elem.textContent = 'Clicked!';
    elem.classList.add('disable');
}
