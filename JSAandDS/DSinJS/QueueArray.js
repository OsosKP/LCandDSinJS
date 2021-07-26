class Queue {
    constructor() {
        this.data = [];
    }

    push(data) {
        this.data.unshift(data);
    }

    pop() {
        return this.data.pop();
    }
}


const queue = new Queue();
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);

console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());