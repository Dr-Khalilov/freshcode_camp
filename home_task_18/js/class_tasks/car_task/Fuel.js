class Fuel {
    constructor(volume, density) {
        this.#volume = volume;
        this.#density = density;
    }

    set volume(v) {
        if (typeof v !== 'number') {
            throw new TypeError('Data must be a number');
        }
        this.#volume = v;
    }

    get volume() {
        return this.#volume;
    }

    set density(v) {
        if (typeof v !== 'number') {
            throw new TypeError('Data must be a number');
        }
        this.#density = v;
    }

    get density() {
        return this.#density;
    }


    getFuelWeight() {
        const res = this.#volume - this.#density;
        if (isNaN(res)) {
            throw new TypeError;
        }
        return this.#volume * this.#density;
    }
}
