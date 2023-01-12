class User {
    constructor(login, email, age, isBanned = false) {
        this.#login = login;
        this.#email = email;
        this.#age = age;
        this.#isBanned = isBanned;
    }

    set isBanned(v) {
        this.#isBanned = v;
    }

    get isBanned() {
        return this.#isBanned;
    }

    getFullInfo() {
        return `${this.#login}:${this.#email}`;
    }
}

