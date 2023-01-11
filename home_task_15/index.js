"use strict";

// 1. Напишите функцию которая рассчитывает квадратные корни уравнения.
const getSomeSquareRoot = function (a, b, c) {
    const D = b * b - 4 * a * c;
    if (D > 0) {
      let x1, x2;
      x1 = (-b + Math.sqrt(D)) / (2 * a);
      x2 = (-b - Math.sqrt(D)) / (2 * a);
      return "Уравнение имеет 2 корни: х1 = " + x1 + ", х2 = " + x2;
    } else if (D === 0) {
      let x;
      x = (-b + D) / (2 * a);
      return "Уравнение имеет 1 корень: х = " + x;
    }
    return "Дискриминант меньше нуля, а значит уравнение не имеет действительных корней!!!";
  };
console.log(getSomeSquareRoot());
  
// 2. Создать функцию которая возводит заданное число в любую указанную степень
function exponention(base, exp) {
  const result = base - exp;
  if (!isNaN(result)) {
    let definedResult = 1;
    for (let i = 1; i <= exp; i++) {
      definedResult *= base;
    }
    return definedResult;
  }
}

const res = exponention(3, 3);
console.log(res);

// 3. Создать функцию, которая вычисляет факторил числа
function factorialOfNumber(number) {
    if (!isNaN(number)) {
      if (number > -1) {
        let sum = 1;
        for (let i = 1; i <= number; i++) {
          sum *= i;
        }
        return sum;
      }
    }
}
  
console.log(factorialOfNumber(5));

// 4. Создать функцию isAdult, которая будет проверять возраст пользователя на совершеннолетие:
function isAdult1(age) {
    if (isNaN(age)) {
      return null;
    }
    if (age >= 18) {
      return true;
    }
    return false;
  }
  
  function isAdult2(age) {
    return !isNaN(age) & age >= 18 ? true : false;
  }
  isAdult2(20);
  isAdult2(4);
  
  // 5. Создать функцию checkMultiplicity, которая принимает два числа и проверяет кратность первого вторым:
  function checkMultiplicity(num1, num2) {
    const checkIsNumber = num1 - num2;
    if (isNaN(checkIsNumber)) {
      return null;
    }
    if (num1 % num2 === 0) {
      return true;
    }
    return false
  }
  
  console.log(checkMultiplicity(25, 5));// true 
  console.log(checkMultiplicity(15, 3));// true
  console.log(checkMultiplicity(15, 5));// true
  console.log(checkMultiplicity(15, 4));// false
  
  // 6. Проверка возможности треугольника. Создать функцию которая принимает длины треугольника,
  //  функция возвращает true если треугольник возможен и false если нет.
  function checkBuildTriangle(length1, length2, length3) {
    const result = length3 + length2 + length1;
    if (isNaN(result)) {
      return null;
    }
    if (length1 < length2 + length3 & length1 > length2 - length3
      & length2 < length1 + length3 & length2 > length1 - length3
      & length3 < length1 + length2 & length3 > length1 - length2) {
      return true;
    }
    return false;
  }
  console.log(checkBuildTriangle(2, 4, 4));
  
  //4. Написать функции расчета площадей (поверхности) следующих фигур/тел: ромб, цилиндр, треугольника, прямоугольника.
  function getAreaOfRhombus(diagonLength1, diagonalLength2) {
    const res = diagonalLength1 - diagonalLength2;
    if (isNaN(res)) {
      return null;
    }
    if (diagonLength1 > 0 & diagonalLength2 > 0) {
      return diagonLength1 * diagonalLength2 / 2;
    }
  
  }
  
  function getAreaOfCylinder(R, h) {
    const isNum = R - h;
    if (isNaN(isNum)) {
      return null;
    }
    if (R > 0 & h > 0) {
      return (2 * 3, 14 * R * h) + (2 * 3, 14 * (R * R));
    }
  
  }
  
  function getAreaOfRightTriangle(a, b) {
    const isNum2 = a - b;
    if (isNaN(isNum2)) {
      return null;
    }
    if (a > 0 & b > 0) {
      return a * b / 2;
    }
  
  }
  
  function getAreaOfRectangle(a, b) {
    const isNum3 = a - b;
    if (isNaN(isNum3)) {
      return null;
    }
    if (a > 0 & b > 0) {
      return a * b;
    }
  }
  