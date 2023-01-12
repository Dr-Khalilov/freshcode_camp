'use strict';

const [div] = document.getElementsByTagName('div');
div.addEventListener('click', showAlert);

function showAlert() {
    alert('Click on div');
};

const addNum = (n) => (m) => n += m;

const summator = addNum(10);

const process = ({ target: { textContent } }) => {
    console.group('Handler');
    console.dir(textContent);
    console.groupEnd();
}

const button = document.querySelector('#btn');
button.addEventListener('click', process);