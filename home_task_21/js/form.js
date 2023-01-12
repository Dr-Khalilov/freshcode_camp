'use strict';
const array = [];
const form = document.getElementById('root-form');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const {
//         target,
//         target: { email: emailInput },
//     } = e;

//     console.dir(emailInput.value); // form
//     // target.reset();
// });
const div = document.getElementById('box');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const { target: { email } } = e;
    if (email.value === '') {
        return;
    } else {
        array.push(email.value);
        const p = document.createElement('p');
        const reset = document.createElement('button');
        p.append(email.value);
        p.append(reset);
        div.append(p);
        reset.addEventListener('click', reset);

    };
    target.reset();

});

function reset(event) {
    const { target: { dataset: { element: { parentNode }, }, }, } = event;
}