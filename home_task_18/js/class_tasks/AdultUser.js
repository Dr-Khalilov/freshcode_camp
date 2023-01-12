class AdultUser {
    constructor(name, surName, age) {
        this.#name = name;
        this.#surName = surName;
        this.#age = age;
    }

    set fullName(newfullName) {
        if (typeof newfullName !== 'string') {
            throw new TypeError('Data must be a string');
        }
        const nameArray = newfullName.split(' ');

        this.#name = nameArray[0];
        this.#surName = nameArray[1];

    }

    get fullName() {
        return `${this.#name} ${this.#surName}`;
    }

    static isAdult(obj) {
        if (obj instanceof AdultUser) {
            return obj.isAdult
        }
        throw new TypeError('Parameter must be a User');
    }

    static isUser(obj) {
        return obj instanceof AdultUser;
    }

}