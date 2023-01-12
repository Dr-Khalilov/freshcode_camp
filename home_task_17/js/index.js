'use strict';

// 1
/**
 * @param {function} howToSay
 * @param {string} whatToSay
 * @return {void}
 */
function saySomething(howToSay, whatToSay) {
    howToSay(whatToSay); //=== alert(whatToSay);
}
saySomething(alert, 'Welcome!!');

// 2
function sum(a, b) {
    return a + b;
}

function withLog(func) {
    return function (...args) {
        const result = func(...args);
        console.log(result);
        return result;
    };
}

const sumWithLog = withLog(sum);

sumWithLog(2, 8);

const newsPaper = {
    title: 'NY Times',
    articles: ['String1', 'News1', 'Test1', 'Headiubng1'],

    showArticles() {
        // this.articles.forEach(function (currentArticle, index) {
        //     console.log(this) // undefined
        //     console.log(`${this.title} ${index + 1}: ${currentArticle}`);
        // });
        this.articles.forEach((currentArticle, index) => {
            console.log(this); // newsPaper
            console.log(`${this.title} ${index + 1}: ${currentArticle}`);
        });
    },
};

newsPaper.showArticles();

const newsPaper2 = {
    title: 'NY Times',
    articles: ['String1', 'News1', 'Test1', 'Headiubng1'],

    showArticles() {
        const that = this;
        // сохраняем сслыку на этот контекст

        this.articles.map(function (value) {
            console.log(`${that.title}: ${value}`);
        });
    },
};

newsPaper2.showArticles();

function logItem(value) {
    console.log(`${this.title}: ${value}`);
}

const newsPaper3 = {
    title: 'NY Times',
    articles: ['String1', 'News1', 'Test1', 'Headiubng1'],

    showArticles() {
        this.articles.map(logItem.bind(this));
    },
};

/*
Стрелочная функция суммирования 
бесконечного кол-ва чисел 
*/
const sum = (...args) => {
    // let res = null;

    // args.forEach((number) => {
    //     res += number;
    // });

    return args.reduce((result, value) => result + value);

    // return res;
};

function countDown(startValue) {
    // debugger;
    console.log(startValue);
    if (startValue > 0) {
        countDown(startValue - 1); // рекурсия
    }
    return true; // база 
}

function power(num, exp) {
    debugger;
    if (exp === 1) {
        return num;
    }

    return num * power(num, exp - 1);
}

/* Залогировать все числа от 1 до N */

function logNum(n) {
    if (n === 1) {
        return 1; //basis
    }
    return `${logNum(n - 1)} ${n}`;
}

/* Факториал числа */

function factorial(n) {
    if (n === 1) {
        return 1; // basis
    }

    return n * factorial(n - 1); //recursion
}

/*
  parenthsis(5);
 '((((()))))' 
 */

function par(n) {
    if (n === 1) {
        return '()';
    }
    return `(${par(n - 1)})`;
}

function toUpperCase(str) {
    let newStr = '';

    for (let i = 0; i < str.length; i++) {
        newStr += str[i].toUpperCase();
    }

    return newStr;
}

function toJadenCase(str) {
    return str
        .split(' ')
        .map((word) => {
            const letterArr = [...word];
            letterArr[0] = letterArr[0].toUpperCase();
            return letterArr.join('');
        })
        .join(' ')
}

/* 
Посчитать кол-во гласных, которые содержаться в строке
Из функции вернуть их кол-во 
Гласными являются «a», «e», «i», «o», «u».
*/
function countVowelsOne(string) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return string.split('').filter((char) => vowels.includes(char)).length;
}

const countVowelsTwo = (string) =>
    string
        .split('')
        .filter((char) => ['a', 'e', 'i', 'o', 'u'].includes(char))
        .length;