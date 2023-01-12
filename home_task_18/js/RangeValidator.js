class RangeValidator {
    constructor(from = 0, to = 0) {
        this.#from = from;
        this.#to = to;
    }

    get from() {
        return this.#from;
    }

    set from(v) {
        if (typeof v !== 'number') {
            throw new TypeError('Data must be a number');
        }
        if (v > this.#to) {
            throw new RangeError(`The number must not be more than ${this.#to}`);
        }
        this.#from = v;
    }

    get to() {
        return this.#to;
    }

    set to(v) {
        if (typeof v !== 'number') {
            throw new TypeError('Data must be a number');
        }
        if (v < this.#from) {
            throw new RangeError(`The number have not be less than ${this.#from}`);
        }
        this.#to = v;
    }

    get range() {
        return [this.#from, this.#to];
    }

    validate(number) {
        if (typeof number !== 'number') {
            throw new TypeError('Data must be a number');
        }
        if (number >= this.#from && number <= this.#to) {
            return number;
        }
        throw new RangeError('The number is out of range');
    }

}

const num = new RangeValidator(10, 100);
const someNum = 30;
console.log(num.validate(someNum));