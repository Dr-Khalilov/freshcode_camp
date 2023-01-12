class Worker {
    constructor(name, surName, numberOfDaysWorked = 0, rate) {
        this.#name = name;
        this.#surName = surName;
        this.#numberOfDaysWorked = numberOfDaysWorked;
        this.#rate = rate;
    }

    getSalary() {
        return this.#numberOfDaysWorked * this.#rate;
    }
}