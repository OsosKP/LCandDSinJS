class Node {
  constructor(data = null, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(data = null) {
    this.head = new Node(data);
  }

  getAt(index) {
    let count = 0;
    let node = this.head;
    while (node.next && count < index) {
      node = node.next;
      count++;
    }
    return count === index ? node : null;
  }

  insertAt(data, index) {
    let count = 1;
    let node = this.head;
    while (node.next && count < index) {
      node = node.next;
      count++;
    }
    const newNode = new Node(data, node.next);
    node.next = newNode;
  }

  removeAt(index) {
    let count = 1;
    let node = this.head;
    while (node.next && count < index) {
      node = node.next;
      count++;
    }
    if (count === index) {
      node.next = node.next.next;
    }
  }

  print() {
    let node = this.head;
    console.log('--------------------');
    while (node) {
      const nextData = node.next ? node.next.data : null;
      console.log(`Data: ${node.data}, Next: ${nextData}`);
      node = node.next;
    }
    console.log('--------------------');
  }
}

const ll = new LinkedList(0);
ll.insertAt(1, 1)
ll.insertAt(2, 2)
ll.insertAt(3, 3)
ll.insertAt(5, 5)
ll.print();
ll.insertAt(4, 4)
ll.print();
ll.removeAt(1);
ll.print()