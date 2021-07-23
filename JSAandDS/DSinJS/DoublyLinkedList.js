class Node {
  constructor(val, prev = null, next = null) {
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let curr;
    if (index > this.length / 2) {
      // Looking near the end of the list
      let counter = this.length - 1;
      curr = this.tail;
      while (counter > index) {
        curr = curr.prev;
        counter--;
      }
    } else {
      // Looking near the front of the list
      let counter = 0;
      curr = this.head;
      while (counter < index) {
        curr = curr.next;
        counter++;
      }
    }
    return curr;
  }

  set(index, data) {
    const nodeToSet = this.get(index)
    if (nodeToSet) {
      nodeToSet.val = data;
    }
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return null;

    if (index === 0) return this.unshift(value);

    if (index === this.length) return this.push(value);

    const newNode = new Node(value);
    const beforeNode = this.get(index - 1);
    const afterNode = beforeNode.next;
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    afterNode.prev = newNode;
    newNode.next = afterNode;

    this.length++;
    return this;
  }

  remove(index) {
    if (index < 0 || index > this.length) return null;

    if (index === 0) return this.shift();

    if (index === this.length-1) return this.pop();

    const removedNode = this.get(index);
    const beforeNode = removedNode.prev;
    const afterNode = removedNode.next;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    removedNode.next = null, removedNode.prev = null;

    this.length--;
    return removedNode;
  }

  push(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return null;
    const removedNode = this.tail;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removedNode.prev;
      this.tail.next = null;
      removedNode.prev = null;
    }
    this.length--;
    return removedNode;
  }

  shift() {
    if (!this.head) return null;
    const removedNode = this.head;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedNode.next;
      removedNode.next = null;
      this.head.prev = null;
    }
    this.length--;
    return removedNode;
  }

  unshift(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
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

  printBackwards() {
    console.log("--------------------");
    console.log(`Length: ${this.length}`);
    console.log(`Head: ${this.head ? this.head.val : null}`);
    console.log(`Tail: ${this.tail ? this.tail.val : null}`);
    console.log("----------");
    let output = '';
    let curr = this.tail;
    while (curr) {
      output += `[${curr.val}]<-`;
      curr = curr.prev;
    }
    console.log(output);
    console.log("--------------------");
  }
}

const dll = new DoublyLinkedList();
dll.pop();
dll.push(1);
dll.push(2);
dll.print();
dll.push(3);
dll.push(4);
dll.print();
dll.print();
console.table(dll.shift());
dll.print();
dll.unshift(1);
dll.unshift(0);
dll.print();
console.log(dll.get(-1));
console.log(dll.get(2));
console.log(dll.get(5));
dll.print();
dll.set(2, "TWO");
dll.set(0, "ZERO");
dll.print();
dll.insert(0, "FIRST");
dll.insert(6, "LAST");
console.log("--Should be null: ", dll.insert(40, "WON'T WORK"));
dll.print();
dll.insert(3, 1.5);
dll.print();
// dll.printBackwards();
dll.remove(0);
dll.remove(2);
console.log(dll.remove(5));
console.log("--Should be null: ", dll.remove(40));
dll.print();