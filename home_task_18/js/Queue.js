class Queue {
    constructor(...args) {
        this.#head = 0;
        this.#tail = 0;

        for (const item of args) {
            this.push(item);
        }
    }
    get size() {
        return this.#tail - this.#head;
    }

    push(value) {
        this[this.#tail++] = value;
        return this.size;
    }

    pop() {
        const lastItem = this[this.#head];
        delete this[this.#head++];

        return lastItem;
    }
}

const q1 = new Queue(1, 3, 5);
const q2 = new Queue(2, 4, 6);

/* 
mergeQueues(q1, q2){}
Из двух очередей сделать одну. 
Но в результирующей очереди элементы должны чередоваться.
*/
function mergeQueues(qel1, qel2) {
    const qRes = new Queue();
    let elem1 = qel1;
    let elem2 = qel2;
    while (qel1.size !== 0 || qel2.size !== 0) {
        qRes.push(elem1);
        qRes.push(elem2);
    }
    return qRes;
}
console.log(mergeQueues(q1, q2));