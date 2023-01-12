class Squirrel {
    constructor(name) {
        this.#name = name;
    }

    eat() {
        return `${this.#name} is eating`;
    }

    climb() {
        return `${this.#name} is climbing`;
    }
}
const chip = new Squirrel('Chip');