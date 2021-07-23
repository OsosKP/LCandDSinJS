class Node {
  constructor(data = null, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(data) {
    const newNode = new Node(data);
    if (!this.tail) {
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      if (this.head === this.tail) {
        this.tail.prev = newNode;
      }
      this.head.prev = newNode;
    }
    this.head = newNode;
  }

  pop() {
    if (this.tail.prev) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
  }

  getAt(index) {
    let node = this.head;
    let count = 1;
    while(node.next && count < index) {
      count++;
      node = node.next;
    }
    return node;
  }

  insertAt(index, data) {
    const newNode = new Node(data);
    let node = this.getAt(index);
    if (this.tail === node) {
      // In this case we've reached the end of the list
      //  We may be at the appropriate index but we know there's no node.next
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    } else {
      // We're at the appropriate index, so insert here
      //  We're not at the tail so there will be a node.next
      newNode.prev = node;
      newNode.next = node.next;
      node.next.prev = newNode;
      node.next = newNode;
    } 
  }

  removeAt(index) {
    // We're removing the head
    if (index === 0) {
      // See if there's only one node
      if (this.tail === this.head) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
      }
    }
    let node = this.head;
    let count = 0;
    while(node.next && count < index) {
      count++;
      node = node.next;
    }
    // If the index was invalid, don't remove anything
    if (count !== index) return;
    // We're removing the last node, but only if it's the right one
    if (this.tail === node) {
      node.prev.next = null;
      this.tail = node.prev;
    } else {
      // We're removing a node in the middle
      node.next.prev = node.prev;
      node.prev.next = node.next;
    }
  }

  print() {
    let node = this.head;
    let index = 0;
    console.log('--------------------');
    while (node) {
      const nextData = node.next ? node.next.data : null;
      const prevData = node.prev ? node.prev.data : null;
      console.log(`${index}: Data: ${node.data}, Prev: ${prevData}, Next: ${nextData}`);
      node = node.next;
      index++;
    }
    console.log('--------------------');
  }
}

const dll = new DoublyLinkedList();
dll.push(5);
dll.print();
dll.push(4);
dll.print();
dll.push(3);
dll.print();
dll.push(2);
dll.print();
dll.push(1);
dll.print();
dll.insertAt(3, 6);
dll.print();
dll.insertAt(4, 7);
dll.print();
dll.insertAt(6, 8);
dll.print();
dll.insertAt(9, 9);
dll.print();
dll.removeAt(4);
dll.print();
dll.removeAt(0);
dll.print();
dll.removeAt(8);
dll.print()