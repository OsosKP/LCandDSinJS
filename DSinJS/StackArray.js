class Stack {
    constructor() {
        this.data = [];
    }

    push(data) {
        this.data.push(data);
    }

    pop() {
        return this.data.pop();
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());