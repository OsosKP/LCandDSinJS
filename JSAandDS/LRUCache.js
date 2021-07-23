class Node {
  constructor(val, prev=null, next=null) {
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.head = null;
    this.tail = null;
    this.cache = {};
  }

  size() {
    return Object.keys(this.cache).length;
  }

  get(value) {
    if (!(value in this.cache)) return null;
    const node = this.cache[value];
    const prevNode = node.prev;
    const nextNode = node.next;
    // See if we're moving the tail
    if (this.tail === node) {
      this.tail = prevNode;
    }
    // Close the gap
    if (prevNode) prevNode.next = nextNode;
    if (nextNode) nextNode.prev = prevNode;
    // Detach the node and add it to the beginning
    node.prev = null;
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
    return node;
  }

  add(data) {
    if (data in this.cache) {
      console.log(`Value ${data} already in cache.`);
      return this.get(data);
    }

    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.cache[data] = newNode;

    // At capacity - pop LRU node
    if (this.size() > this.capacity) {
      return this.pop();
    }
  }

  pop() {
    if (!this.tail) return null;
    const removedNode = this.tail;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removedNode.prev;
      this.tail.next = null;
    }
    removedNode.prev = null;
    removedNode.next = null;
    // Remove from cache
    delete this.cache[removedNode.val];
    return removedNode;
  }

  print() {
    let curr = this.head;
    let result = "";
    console.log("------------------------------");
    console.log(`HEAD: ${this.head.val}\tTAIL: ${this.tail.val}`);
    while (curr) {
      const nextVal = (curr.next) ? curr.next.val : "_";
      const prevVal = (curr.prev) ? curr.prev.val : "_";
      result += `[<${prevVal}>-${curr.val}-<${nextVal}>]`
      curr = curr.next;
    }
    console.log(result);
    console.log("------------------------------");
  }
}

const lru = new LRUCache(5);
lru.add(1);
lru.add(2);
lru.add(3);
lru.add(4);
lru.add(5);
lru.get(1);
lru.print();
lru.get(4);
lru.get(3);
lru.add(10);
lru.add(2);
lru.print();
lru.add(11);
lru.print();