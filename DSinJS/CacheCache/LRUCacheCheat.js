class LRUCache {
  constructor(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
  }

  get(key) {
    // If not found, return -1
    if (!this.cache.has(key)) return -1;
    // Store the value so we can delete the key
    const value = this.cache.get(key);
    // Delete and reinsert to update insertion order
    this.cache.delete(key);
    // Put the key, value pair back in the Map and return it
    return this.cache.set(key, value);
  }

  put(key, value) {
    // If the key is already in the cache, delete it
    //  and add it again to update it to recently used
    if (this.cache.has(key)) this.cache.delete(key);
    this.cache.set(key, value);
    // If at capacity, the Map's first element is the least recently used
    //  So that's what we remove
    if (this.cache.size > this.capacity) {
      const leastRecentlyUsed = this.cache.keys().next().value;
      this.cache.delete(leastRecentlyUsed);
    }
  }

  print() {
    let stringBuilder = [];
    console.log("----------");
    this.cache.forEach((value, key) => {
      stringBuilder.unshift(`(${key}: ${value})`);
    });
    if (this.cache.size === this.capacity) {
      stringBuilder[stringBuilder.length-1] += "\tLeast Recently Used";
    }
    console.log(stringBuilder.join("\n"));
    console.log("----------");
  }
}

const lru = new LRUCache(3);
console.log("Put 0");
lru.put(0, 'A');
lru.print();
console.log("Put 1");
lru.put(1, 'B');
lru.print();
console.log("Put 2");
lru.put(2, 'C');
lru.print();
console.log("Get 0");
lru.get(0)
lru.print();
console.log("Put 3");
lru.put(3, 'D');
lru.print();
console.log("Get 2");
lru.get(2)
lru.print();
console.log("Put 4");
lru.put(4, 'E');
lru.print();
console.log("Put 5");
lru.put(5, 'F');
lru.print();
