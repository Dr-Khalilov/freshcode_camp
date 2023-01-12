class User {
    constructor(name, surname) {
        this.#name = name;
        this.#surname = surname;
    }

    get name() {
        return this.#name;
    }

    set name(v) {
        if (typeof v !== 'string') {
            throw new TypeError('Name have to a string');
        }
        this.#name = v;
    }

    get surname() {
        return this.#surname;
    }

    set surname(v) {
        if (typeof v !== 'string') {
            throw new TypeError('Surname have to a string');
        }
        this.#surname = v;
    }

    getFullName() {
        return `${this.#name} ${this.#surname}`;
    }
}