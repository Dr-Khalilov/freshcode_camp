class Friend {
    constructor(name, appleAmount, friend = []) {
        this.#name = name;
        this.#appleAmount = appleAmount;
        this.#friend = friend;
    }

    calcAllApples() {
        return this.#appleAmount + [this.#friend.appleAmount];
    }
}
const friend1 = new Friend('John', 5);
const friend2 = new Friend('Tom', 5);
const friend3 = new Friend('Jack', 10)
const arrFriends = [friend1, friend2, friend3];
const friend4 = new Friend('Test', 1, arrFriends)


console.log(friend4.calcAllApples());