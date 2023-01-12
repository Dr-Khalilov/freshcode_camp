'use strict';

/* Создаём прототип для MyArray(тут будет храниться логика) */
function MyArrayProto() {
    /* Уже создан пустой новый объект (this) */
    this.push = function push() {
        for (let i = 0; i < arguments.length; i++) {
            this[this.length] = arguments[i];
            ++this.length;
        }
        return this.length;
    };

    this.pop = function pop() {
        if (this.length <= 0) {
            return;
        }
        const lastItem = this[this.length - 1];
        delete this[--this.length];
        return lastItem;
    };

    this.forEach = function forEach(cb) {
        for (let i = 0; i < this.length; i++) {
            cb(this[i], i, this);
        }
    };

    this.map = function map(cb) {
        const result = new MyArray();
        debugger;
        for (let i = 0; i < this.length; i++) {
            result.push(cb(this[i], i, this));
        }
        return result;
    };

    this.reverse = function reverse() {
        const copy = new MyArray();
        for (let i = 0; i < this.length; i++) {
            copy.push(this[i]);
        }
        for (let i = 0; i < this.length; i++) {
            this[i] = copy.pop();
        }
        return this
    };

    this.concat = function concat(myArrayInstance) {
        const result = new MyArray();

        for (let i = 0; i < this.length; i++) {
            result.push(this[i]);
        }

        for (let i = 0; i < myArrayInstance.length; i++) {
            result.push(myArrayInstance[i]);
        }

        return result;
    };

    this.some = function some(checkFunction) {
        for (let i = 0; i < this.length; i++) {
            if (checkFunction(this[i], i, this)) {
                return true;
            }
        }
        return false;
    };

    this.every = function every(checkFunc) {
        for (let i = 0; i < this.length; i++) {
            if (!checkFunc(this[i], i, this)) {
                return false;
            }
        }
        return true;
    };

    this.filter = function filter(checkFunc) {
        const result = new MyArray();

        for (let i = 0; i < this.length; i++) {
            if (checkFunc(this[i], i, this)) {
                result.push(this[i]);
            }
        }

        return result;
    };
}

/* Создаем MyArray */
function MyArray() {
    this.length = 0;
    for (let i = 0; i < arguments.length; i++) {
        this.push(arguments[i]);
    }
}

MyArray.isMyArray = function (obj) {
    return obj instanceof MyArray;
};

MyArray.prototype = new MyArrayProto(); // создаём связь между объектами(Наследование)

// this - ссылка на объект, который вызывает метод.
const userArray = new MyArray({ test: 1, test1: 2 }, { test: 1, test1: 2 });