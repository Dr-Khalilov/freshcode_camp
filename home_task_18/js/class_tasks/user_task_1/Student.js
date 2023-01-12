class Student extends User {
    constructor(name, surname, yearOfAdmission) {
        super(name, surname);
        this.#yearOfAdmission = yearOfAdmission;
    }

    get year() {
        return this.#yearOfAdmission;
    }

    set year(v) {
        if (typeof v !== 'number') {
            throw new TypeError('Year have to a number');
        }
        if (v < 2016) {
            throw new RangeError('You are not a student)))');
        }
        this.#yearOfAdmission = v;
    }

    getCourse() {
        const course = new Date();
        return `${course.getFullYear() - this.#yearOfAdmission} курс`;
    }
}

const stud = new Student('Test', 'Testovna', 2016);
console.log(stud.getFullName());
console.log(stud.getCourse());