'use strict';

function count(num) {
    setTimeout(() => {
        if (num <= 20) {
            console.log(num++);
            count(num);
        }
        else if (num >= 20) {
            console.timeEnd('1');
        }
        return;
    }, 100)
}

console.time('1');
count(1);