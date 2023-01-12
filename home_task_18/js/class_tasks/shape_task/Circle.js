class Circle extends Shape {
    constructor(radius) {
        super('Circle');
        this.#radius = radius;
    }

    getArea() {
        return (this.#radius * this.#radius) * 3, 14;
    }

}

const circle = new Circle(23);

console.log(circle.getArea());