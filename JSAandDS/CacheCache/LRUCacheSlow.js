class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.data = {};
    this.head = null;
    this.tail = null;
  }

  markAsRecentlyUsed(node) {
    // If already the head, change nothing
    if (this.head === node) return;
    // If tail, set the tail to the previous node
    if (this.tail === node && node.prev !== null) {
      this.tail = node.prev;
    }
    // Otherwise, take it out of the list...
    if (node.prev !== null) node.prev.next = node.next;
    if (node.next !== null) node.next.prev = node.prev;
    // ... And put it at the beginning
    node.next = this.head;
    this.head.prev = node;
    node.prev = null;
    this.head = node;
  }

  isOverCapacity() {
    return Object.keys(this.data).length > this.capacity;
  }

  removeLast() {
    if (this.tail.prev !== null) {
      const key = this.tail.key;
      delete this.data[key];
      const prev = this.tail.prev;
      this.tail.next = null;
      this.tail = prev;
      prev.next = null;
    }
  }

  get(key) {
    if (key in this.data) {
      const node = this.data[key];
      this.markAsRecentlyUsed(node);
      return node.value;
    } else {
      return -1;
    }
  }

  put(key, value) {
    const newNode = new ListNode(key, value, null, this.head);
    if (Object.keys(this.data).length > 0) {
      this.head.prev = newNode;
    } else {
      this.tail = newNode;
    }
    this.data[key] = newNode;
    this.head = newNode;
    if (this.isOverCapacity()) this.removeLast();
  }

  print() {
    let node = this.head;
    console.log("--------------------")
    while (node) {
      console.log(`${node.printNode()}`);
      node = node.next;
    }
    console.log("--------------------")
  }
}

class ListNode {
  constructor(key, value, prev =  null, next = null) {
    this.key = key;
    this.value = value;
    this.prev = prev;
    this.next = next;
  }

  printNode() {
    const prevVal = this.prev ? this.prev.value : "none";
    const nextVal = this.next ? this.next.value : "none";
    return `{ Val: ${this.value}, Prev: ${prevVal}, Next: ${nextVal}}`;
  }
}

const testCache = () => {
  const lru = new LRUCache(3);
  lru.put(1, 1);  // 1
  lru.print();
  lru.put(2, 2);  // 2 1
  lru.print();
  console.log(`Get 1:\t${lru.get(1)}`);     // 1 2
  lru.print();
  lru.put(3, 3);  // 3 1
  lru.print();
  lru.put(4, 4);  // 4 3
  lru.print();
  console.log(`Get 2:\t${lru.get(2)}`);      // 4 3
  lru.print();
  lru.put(5, 5);  // 5 4
  lru.print();
  console.log(`Get 5:\t${lru.get(5)}`);     // 5 4
  console.log(`Get 1:\t${lru.get(1)}`);     // 5 4
  lru.print();
  lru.put(6, 6);  // 6 5
  lru.print();
}

testCache();



// /**
//  * @param {number} capacity
//  */
//  var LRUCache = function(capacity) {
//   this.capacity = capacity;
//   this.cache = new Map();
// };

// /** 
// * @param {number} key
// * @return {number}
// */
// LRUCache.prototype.get = function(key) {
//   if (!this.cache.has(key)) return -1;
//   const value = this.cache.get(key);
//   this.cache.delete(key);
//   this.cache.set(key, value);
//   return this.cache.get(key);
// };

// /** 
// * @param {number} key 
// * @param {number} value
// * @return {void}
// */
// LRUCache.prototype.put = function(key, value) {
//   if (this.cache.has(key)) this.cache.delete(key);
//   this.cache.set(key, value);
//   if (this.cache.size > this.capacity) {
//       const leastRecentlyUsed = this.cache.keys().next().value;
//       this.cache.delete(leastRecentlyUsed);
//   }
// };

// /** 
// * Your LRUCache object will be instantiated and called as such:
// * var obj = new LRUCache(capacity)
// * var param_1 = obj.get(key)
// * obj.put(key,value)
// */