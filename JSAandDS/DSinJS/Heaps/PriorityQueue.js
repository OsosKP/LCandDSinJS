class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(node) {
        this.queue.push(node);
        this.bubbleUp(this.queue.length - 1);
        return this.queue;
    }

    dequeue() {
        const node = this.queue[0];
        const lastNode = this.queue.pop();
        if (this.queue.length) {
            this.queue[0] = lastNode;
            this.bubbleDown(0);
        }
        return node;
    }

    bubbleDown(index) {
        const node = this.queue[index];
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;
        let leftChild, rightChild;
        let swapIndex = -1;
        // No children
        if (leftChildIndex >= this.queue.length) return;
        leftChild = this.queue[leftChildIndex];
        // Only left child
        if (rightChildIndex >= this.queue.length) {
            swapIndex = leftChildIndex;
        } else {
            // Both children
            rightChild = this.queue[rightChildIndex];
            if (leftChild.priority <= rightChild.priority) swapIndex = leftChildIndex;
            else swapIndex = rightChildIndex;
        }
        if (swapIndex < 0) return;
        const swapNode = this.queue[swapIndex];
        // Swap if needed
        if (node.priority > swapNode.priority) {
            this.queue[index] = swapNode;
            this.queue[swapIndex] = node;
            this.bubbleDown[swapIndex];
        }
    }

    bubbleUp(index) {
        const node = this.queue[index];
        const parentIndex = Math.floor((index - 1) / 2);
        if (parentIndex < 0) return;
        const parent = this.queue[parentIndex];
        if (node.priority < parent.priority) {
            this.queue[parentIndex] = node;
            this.queue[index] = parent;
            this.bubbleUp(parentIndex);
        }
    }
}

const pq = new PriorityQueue();

console.log(pq.enqueue({value: "Ten", priority: 10}));
console.log("-----");
console.log(pq.enqueue({value: "Five", priority: 5}));
console.log("-----");
console.log(pq.enqueue({value: "Twelve", priority: 12}));
console.log("-----");
console.log(pq.enqueue({value: "Thirteen", priority: 13}));
console.log("-----");
console.log(pq.enqueue({value: "Three", priority: 3}));
console.log("-----");
console.log(pq.enqueue({value: "One", priority: 1}));

console.log("--------------------------------------------------");
console.log(pq.dequeue());
console.log("-----");
console.log(pq.dequeue());
console.log("-----");
console.log(pq.dequeue());
console.log("-----");
console.log(pq.dequeue());
console.log("-----");
console.log(pq.dequeue());
console.log("-----");
console.log(pq.dequeue());
console.log("-----");
console.log(pq.dequeue());