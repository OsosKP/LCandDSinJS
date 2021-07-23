class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  };

  reverse() {
    // Swap head and tail
    let node = this.head; // Initialize node to (original) head
    this.head = this.tail;
    this.tail = node;
    // Create variables next and prev
    let prev = null;  // Needs to be null so the end of the list (tail.next) is null
    let next = null;
    // Loop through list
    while (node) {
      // Next variable becomes node.next
      next = node.next;
      // Set node.next = prev
      node.next = prev;
      // Set prev = node
      prev = node;
      // Set node = next
      node = next;
    }
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let curr = this.head;
    let counter = 0;
    // Don't need to check curr because we know counter is within range
    while (counter < index) {
      curr = curr.next;
      counter++;
    }
    return (counter === index) ? curr : null;
  }

  set(index, data) {
    if (index === this.length) return this.push(data);
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = data;
      return true;
    }
    return false;
  }

  push(val) {
    const newNode = new Node(val);
    // If the list is empty, new node becomes head and tail
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Otherwise just reset the tail
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    // If no elements in the list...
    if (!this.head) return null;
    // Otherwise traverse the list
    let curr = this.head;
    let prev = this.head;
    while (curr.next) {
      prev = curr;
      curr = curr.next;
    }
    this.tail = prev;
    prev.next = null;

    this.length--;
    this.resetIfEmpty();
    return curr;
  }

  shift() {
    if (!this.head) return null;
    const removedNode = this.head;
    this.head = this.head.next;
    
    this.length--;
    this.resetIfEmpty();
    return removedNode;
  }

  unshift(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.tail = newNode;
    } else {
      newNode.next = this.head;
    }
    this.head = newNode;

    this.length++;
    return this;
  }

  insertAt(index, data) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      return !!this.unshift(data);
    } else if (index === this.length) {
      return !!this.push(data);
    } else {
      const newNode = new Node(data);
      const prevNode = this.get(index-1);
      newNode.next = prevNode.next;
      prevNode.next = newNode;
    }
    this.length++;
    return true;
  }

  removeAt(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length-1) return this.pop();
    const prevNode = this.get(index-1);
    const removedNode = prevNode.next;
    prevNode.next = removedNode.next;

    this.length--;
    return removedNode;
  }

  resetIfEmpty() {
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
  }

  traverse() {
    let curr = this.head;
    while (curr) {
      curr = curr.next;
    }
  }

  print() {
    console.log("--------------------");
    console.log(`Length: ${this.length}`);
    console.log(`Head: ${this.head ? this.head.val : null}`);
    console.log(`Tail: ${this.tail ? this.tail.val : null}`);
    console.log("----------");
    let output = '';
    let curr = this.head;
    while (curr) {
      output += `[${curr.val}]->`;
      curr = curr.next;
    }
    console.log(output);
    console.log("--------------------");
  }
}

const list = new SinglyLinkedList();
list.push("OLLEH");
list.push("EYBDOOG");
list.push("THE");
list.push("BEATLES");
list.print();
console.log(list.shift());
list.print();
console.log(list.shift());
list.print();
list.unshift("GOODBYE");
list.unshift("HELLO");
list.print();
console.log(list.pop());
list.print();
console.log(list.pop());
list.print();
list.push("THE");
list.push("BEATLES");
list.print();
console.log(list.get(0));
console.log(list.get(1));
console.log(list.get(2));
list.set(2, "MOTORHEAD");
console.log(list.get(2));
list.set(4, "END");
list.print();
console.log('insertAt(4, "BEFORE_END") ', list.insertAt(4, "BEFORE_END"));
list.print();
console.log('insertAt(0, "HEAD") ', list.insertAt(0, "HEAD"));
console.log('insertAt(7, "REAL_END") ', list.insertAt(7, "REAL_END"));
list.print();
console.log(list.removeAt(1));
list.print();
console.log(list.removeAt(5));
list.print();
console.log(list.removeAt(0));
list.print();
list.reverse();
list.print();
list.reverse();
list.print();