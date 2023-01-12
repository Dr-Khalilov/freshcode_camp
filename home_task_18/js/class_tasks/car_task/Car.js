class Car {
    constructor(model, weight, fuel = new Fuel(50, 1.2)) {
        this.#model = model;
        this.#ownWeight = weight;
        this.#fuel = fuel;
    }
    getCarWeight() {
        const res = this.#ownWeight - this.#fuel.getFuelWeight();
        if (isNaN(res)) {
            throw new TypeError();
        }

        return this.#ownWeight + this.#fuel.getFuelWeight();
    }
}
const car1 = new Car('Aston Martin', 1500);
console.log(car1.getCarWeight());
