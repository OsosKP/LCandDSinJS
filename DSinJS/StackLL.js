class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.head = null;
    }

    push(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    pop() {
        if (!this.head) return null;
        const popped = this.head;
        this.head = this.head.next;
        return popped.val;
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