'use strict';
// 1 Вычислить сумму первых N элементов последовательности, параметр N задает пользователь (например n=4, 1+2+3+4)
function calcSumSequence1(num) {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum += i;
    };
    return sum;
};

const calcSumSequence2 = (num) => num === 1 ? num : num + calcSumSequence2(num - 1);

// 2.2 Создать объект, который содержит свойства, о факультете и кафедре.
class EducationalInstitution {
    constructor(faculty, cathedra) {
        this.faculty = faculty;
        this.cathedra = cathedra;
    };
}

// 2.1 Создать объект Student который содержит следующие свойства: имя, фамилию, пол, контактные данные.
// 2.3 Связать объекты между собой. т.е. прописать данные об факультете и кафедре для студента
class Student extends EducationalInstitution {
    constructor(faculty, cathedra, name, surname, isMale, dataContact) {
        super(faculty, cathedra)
        this.name = name;
        this.surname = surname;
        this.isMale = isMale;
        this.dataContact = dataContact;
    };
}

const student = new Student('Medical', 'Pediatric', 'John', 'Doe', true, '248734872');

// 2.4 Реализовать функцию выводит на экран всю информацию о студенте
function getDatesAboutStudent1(obj) {
    for (let value of Object.entries(obj)) {
        let string;
        value.forEach(() => {
            string = value.join(': ');
        });
        console.log(string);
    };
};

function getDatesAboutStudent2(obj) {
    return Object.entries(obj).map(value => value.join(': ')).join('\n');
};

getDatesAboutStudent1(student);

console.log(getDatesAboutStudent2(student));

// 3.1 Создать числовой массив и проинициализировать его из 25 элементов.
// 3.1*Инициализация с помощью случайных чисел
function createArray(quantity) {
    const arrNums = [];
    for (let i = 0; i < quantity; i++) {
        arrNums.push(Math.round(Math.random() * i));
    };
    return arrNums;
};

const array = createArray(25);
console.log(array);

// 3.2 Вывести элементы с четными индексами
function getEvenIndex(arrOfNums) {
    let result = [];
    for (let i = 0; i < arrOfNums.length; i++) {
        if (i % 2 === 0) {
            result.push(i);
        };
    }
    return result;
};

const evenIndex = getEvenIndex(array);
console.log(evenIndex);

// 3.3 Вывести только четные элементы (четные числа делятся на 2 без остатка)
function getEvenNums(arrOfNums) {
    let result = [];
    for (let i = 0; i < arrOfNums.length; i++) {
        if (arrOfNums[i] % 2 === 0) {
            result.push(arrOfNums[i]);
        };
    }
    return result;
};

const evenNums = getEvenNums(array);
console.log(evenNums);

// 3.4 Вывести индексы нулевых элементов (элемент равен нулю)
function getIndexNullElements(arrOfNums) {
    let result = [];
    for (let i = 0; i < arrOfNums.length; i++) {
        if (arrOfNums[i] === 0) {
            result.push(arrOfNums[i]);
        }
    }
    return result;
};

const nullElem = getIndexNullElements(array);
console.log(nullElem);

// 3.5 Подсчитать количество нулевых элементов
function calcQuantityNullElements(arrOfNums) {
    let count = 0;
    for (let i = 0; i < arrOfNums.length; i++) {
        if (arrOfNums[i] === 0) {
            count++;
        };
    }
    return count;
};

const countNullsElem = calcQuantityNullElements(array);
console.log(countNullsElem);

// 4 Создать классы:
// - Книга (автор, название, год издания, издательство)
class Book {
    constructor(author, name, yearOfPublishing, publisher) {
        this.author = author;
        this.name = name;
        this.yearOfPublishing = yearOfPublishing;
        this.publisher = publisher;
    }
}

// - Электронная версия книги (автор, название, год издания, издательство, формат, электронный номер)
class Ebook extends Book {
    constructor(author, name, yearOfPublishing, publisher, format, eNumber) {
        super(author, name, yearOfPublishing, publisher);
        this.format = format;
        this.eNumber = eNumber;
    }
}

// 5 Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число,
// которая функция принимает в качестве параметра, с такими условиями:
// вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
// вывод fizz вместо чисел, кратных 3;
// вывод buzz вместо чисел, кратных 5;
function getOutputNumbersOnConsole(num) {
    const arrFizzBuzz = [];
    let index = 1;
    while (index <= num) {
        arrFizzBuzz.push(index);
        if (index % 3 === 0) {
            arrFizzBuzz.pop();
            arrFizzBuzz.push('Fizz');
        }
        if (index % 5 === 0) {
            arrFizzBuzz.pop();
            arrFizzBuzz.push('Buzz');
        }
        if (index % 3 === 0 && index % 5 === 0) {
            arrFizzBuzz.pop();
            arrFizzBuzz.push('FizzBuzz');
        }
        index++;
    }
    return arrFizzBuzz.join('\n');
};

const fizzBuzz = getOutputNumbersOnConsole(15);
console.log(fizzBuzz);