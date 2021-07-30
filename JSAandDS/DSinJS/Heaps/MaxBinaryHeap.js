class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(value) {
        this.values.push(value);
        this.bubbleUp(this.values.length - 1);
        console.log(this.values);
    }

    extract() {
        const maxNode = this.values[0];
        // Replace the first node with the last IF there are more than 1 node
        const lastNode = this.values.pop();
        if (this.values.length) {
            this.values[0] = lastNode;
            this.recurseDown(0);
            // this.sinkDown();
            // this.bubbleDown();
        }
        console.log(this.values);
        return maxNode;
    }

    bubbleUp(index) {
        let parentIndex = Math.floor((index - 1) / 2);
        while (this.values[index] > this.values[parentIndex]) {
            const temp = this.values[parentIndex];
            this.values[parentIndex] = this.values[index];
            this.values[index] = temp;
            index = parentIndex;
            parentIndex = Math.floor((parentIndex - 1) / 2);
        }
    }

    recurseDown(index) {
        const value = this.values[index];
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;
        // This is only set if there is at least one child
        let swapIndex = null;

        if (leftChildIndex >= this.values.length) return;
        const leftChild = this.values[leftChildIndex];
        // If there's no right child
        if (rightChildIndex >= this.values.length) {
            swapIndex = leftChildIndex;
        } else {
            // If both, get the max child value
            const rightChild = this.values[rightChildIndex];
            if (leftChild >= rightChild) {
                swapIndex = leftChildIndex;
            } else swapIndex = rightChildIndex;
        }
        // If no children, we're done
        if (swapIndex === null) return;
        const swapValue = this.values[swapIndex];
        // Swap if needed
        if (swapValue > value) {
            this.values[index] = swapValue;
            this.values[swapIndex] = value;
            this.recurseDown(swapIndex);
        }
    }

    sinkDown() {
        let index = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];
                if (leftChild > element) {
                    swap = leftChildIndex;
                }
            }
            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                if (
                    swap === null && rightChild > element ||
                    swap !== null && rightChild > leftChild
                ) {
                    swap = rightChildIndex;
                }
            }
            if (swap === null) break;
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }
    }

    bubbleDown() {
        let index = 0;

        while (index < this.values.length) {
            // Move top down until order is restored
            const length = this.values.length;
            let value = this.values[index];
            let leftChildIndex = (2 * index) + 1;
            let leftChild;
            let rightChildIndex = (2 * index) + 2;
            let rightChild;
            // No children
            if (leftChildIndex >= length) break;

            // Only left child
            leftChild = this.values[leftChildIndex];
            if (rightChildIndex >= length) {
                if (value >= leftChild) {
                    this.swap(index, leftChildIndex);
                    index = leftChildIndex;
                } else break;
            } else {
                // Both children
                rightChild = this.values[rightChildIndex];
                if (value < leftChild || value < rightChild) {
                    if (leftChild > rightChild) {
                        this.swap(index, leftChildIndex);
                        index = leftChildIndex;
                    } else {
                        this.swap(index, rightChildIndex);
                        index = rightChildIndex;
                    }
                } else break;
            }
            leftChildIndex = (2 * index) + 1;
            rightChildIndex = (2 * index) + 2;
        }
    }

    swap(parentIndex, childIndex) {
        const temp = this.values[parentIndex];
        this.values[parentIndex] = this.values[childIndex];
        this.values[childIndex] = temp;
    }
}

const mbh = new MaxBinaryHeap();
mbh.insert(50);
mbh.insert(12);
mbh.insert(41);
mbh.insert(1);
mbh.insert(51);
mbh.insert(75);
mbh.insert(865);
mbh.insert(13);

console.log(mbh.extract());
console.log(mbh.extract());
console.log(mbh.extract());
console.log(mbh.extract());
console.log(mbh.extract());
console.log(mbh.extract());
console.log(mbh.extract());
console.log(mbh.extract());