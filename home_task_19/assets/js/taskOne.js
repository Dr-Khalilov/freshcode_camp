'use strict';

const btn = document.querySelector('button');
btn.addEventListener('click', clickHandler);

let clicks = 0;
function clickHandler(e) {
    clicks++;
    if (clicks > 1) {
        alert('Double');
        clicks = 0;
    } setTimeout(() => {
        if (clicks === 1) {
            alert('Single');
        }
        clicks = 0;
    }, 400);
}