'use strict';

const span = document.querySelector('.text-container');
const list = document.querySelector('.list-container');
const main = document.querySelector('.main-container');

document.addEventListener('mouseover', showText);

function showText(e) {
    const text = document.createElement('div');
    text.append(e.target.innerHTML);

}