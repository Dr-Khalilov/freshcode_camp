class FlyingSquirrel extends Squirrel {
    constructor(name, maxDistance) {
        super(name);
        this.#maxDistance = maxDistance;
    }

    fly(name) {
        if (name === this.name) {
            return `${this.name} ${this.#maxDistance} meters`;
        }
    }

}
const dale = new FlyingSquirrel('Dale', 50);
console.log(dale.fly());