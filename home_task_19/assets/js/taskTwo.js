'use strict';
const btn = document.getElementById('btn');
const div = document.querySelector('.squareContainer');
btn.addEventListener('click', clickHandler);
div.addEventListener('click', squareClickHandler);

function squareClickHandler({ target }) {
    if (target.parentNode === div) {
        console.log(target.style.backgroundColor);
    }
}

function clickHandler() {
    div.appendChild(createSquare())
}

function createSquare() {
    const randomColor = '#' + ('00' + Math.floor(Math.random() * 16777215).toString(16)).substring(-6);
    let square = document.createElement('div');
    square.style.backgroundColor = randomColor;
    return square;
}