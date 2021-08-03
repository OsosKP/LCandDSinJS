class Node {
    constructor(val) {
        this.value = val;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity = 5) {
        this.capacity = capacity;
        this.cache = {};
        this.head = null;
        this.tail = null;
    }

    insert(val) {
        if (val in this.cache) {
            this.moveToFront(val);
            return false;
        } else {
            const newNode = new Node(val);
            newNode.next = this.head;
            if (this.head) {
                this.head.prev = newNode;
            } else {
                this.tail = newNode;
            }

            this.head = newNode;
            this.cache[val] = newNode;

            // Remove LRU if over capacity
            if (Object.keys(this.cache).length > this.capacity) {
                this.removeLeastRecentlyUsed();
            }

            return true;
        }
    }

    // When calling this we know the val exists in the cache
    moveToFront(val) {
        const node = this.cache[val];
        if (node === this.head) return;
        else if (node === this.tail) {
            this.tail = node.prev;
            this.tail.next = null;
        } else {
            // If not head or tail, should have next and prev
            const prevNode = node.prev;
            const nextNode = node.next;
            prevNode.next = nextNode;
            nextNode.prev = prevNode;
        }
        // Move to the front
        node.next = this.head;
        node.prev = null;
        this.head.prev = node;
        this.head = node;
    }

    get(val) {
        if (!(val in this.cache)) return null;
        this.moveToFront(val);
        return this.cache[val].val;
    }

    removeLeastRecentlyUsed() {
        if (!this.tail) return;
        const removedNode = this.tail;
        delete this.cache[removedNode.value];
        this.tail = this.tail.prev;
        this.tail.next = null;
    }

    remove(val) {
        if (!(val in this.cache)) return null;
        const removedNode = this.cache[val];
        const prevNode = removedNode.prev;
        const nextNode = removedNode.next;
        removedNode.prev = null;
        removedNode.next = null;
        if (removedNode === this.head) {
            if (nextNode) {
                this.head = nextNode;
                nextNode.prev = null;
            } else {
                this.head = null;
                this.tail = null;
            }
        } else if (removedNode === this.tail) {
            if (prevNode) {
                this.tail = prevNode;
                prevNode.next = null;
            } else {
                this.head = null;
                this.tail = null;
            }
        } else {
            prevNode.next = nextNode;
            nextNode.prev = prevNode;
        }
        return removedNode.val;
    }

    print() {
        let output = "";
        let curr = this.head;
        while (curr) {
            output += `[${curr.value}]->`
            curr = curr.next;
        }
        const headVal = (this.head !== null) ? this.head.value : null;
        const tailVal = (this.tail !== null) ? this.tail.value : null;
        console.log(`Head: ${headVal}`);
        console.log(`Tail: ${tailVal}`);
        console.log(output);
        console.log("------------------------");
        console.log(Object.keys(this.cache));
        console.log("------------------------");
        console.log("--------------------------------------------------");
    }

    printReverse() {
        let output = "";
        let curr = this.tail;
        while (curr) {
            output += `[${curr.value}]<-`
            curr = curr.prev;
        }
        const headVal = (this.head !== null) ? this.head.value : null;
        const tailVal = (this.tail !== null) ? this.tail.value : null;
        console.log(`Head: ${headVal}`);
        console.log(`Tail: ${tailVal}`);
        console.log(output);
        console.log("--------------------------------------------------");
    }
}

const lru = new LRUCache(5);
lru.insert(1);
lru.insert(2);
lru.insert(3);
lru.insert(4);
lru.insert(5);
lru.print();
lru.get(1)
lru.insert(6);
lru.print();
lru.insert(7);
lru.print();
lru.insert(8);
lru.print();
lru.insert(9);
lru.print();
lru.insert(10);
lru.print();

lru.printReverse();