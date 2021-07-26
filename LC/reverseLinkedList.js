class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

const printLinkedList = (head) => {
  let output = "";
  let node = head;
  while (node) {
    output += `(${node.data})->`;
    node = node.next;
  }
  console.log(output);
}

const reverseLinkedList = (head) => {
  let node = head;
  let ptr = node.next;
  while (ptr) {
    const nextNode = ptr.next;
    ptr.next = node
    node = ptr;
    ptr = nextNode;
  }
  head.next = null;
  head = node;
}

const node5 = new Node(5, null);
const node4 = new Node(4, node5);
const node3 = new Node(3, node4);
const node2 = new Node(2, node3);
const node1 = new Node(1, node2);

reverseLinkedList(node1);
printLinkedList(node5);

let thing = [1, 2, 3, 4, 5];
console.log(thing[thing.indexOf(4)]);