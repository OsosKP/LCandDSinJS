class Node {
    constructor(val, prev=null, next=null, child=null) {
      this.val = val;
      this.prev = prev;
      this.next = next;
      this.child = child;
    }
  }

  const flattenList = (head) => {
    const list = [head];
    const out = [];
    
    const search = (nodes, out) => {
      if (!nodes.length) return;
      
      const node = nodes.shift();
      
      if (out.length > 0) {
        out[out.length-1].next = node;
        node.prev = out[out.length-1];
      }
      out.push(node);
      
      if (node.next) nodes.unshift(node.next);
      if (node.child) nodes.unshift(node.child);
      node.next = null;
      node.child = null;
      search(nodes, out)
    }
    
    search(list, out);
    return out[0];
  }
  
//   const flattenList = (head) => {
//     if (!head) return [];
    
//     const flatten = (head) => {
//       let curr = head;
//       while (curr.next) {
//         if (curr.child) {
//           // The end of the sublist
//           const childrenTail = flatten(curr.child);
//           // The original next node
//           const oldNext = curr.next;
//           // Point curr.next to child (and child prev)
//           curr.next = curr.child;
//           curr.child.prev = curr;
//           // Point childrenTail to oldNext and vice versa
//           childrenTail.next = oldNext;
//           oldNext.prev = childrenTail;
//           // Remove children and set curr to next (skipping children)
//           curr.child = null;
//           curr = oldNext;
//         } else {
//           curr = curr.next;
//         }
//       }
//       // We're now at the tail, which might have children (but no curr.next)
//       if (curr.child) {
//         flatten(curr.child);
//         curr.next = curr.child;
//         curr.child.prev = curr;
//         curr.child = null;
//       }
//       return curr;
//     }
//     flatten(head);
//     return head;
//   }
  
  const print = (head) => {
    let curr = head;
    while (curr) {
      const prevVal = curr.prev ? curr.prev.val : "_";
      console.log(`[<${prevVal}>, ${curr.val}]`);
      curr = curr.next;
    }
  }
  
  const node1 = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);
  const node4 = new Node(4);
  const node5 = new Node(5);
  const node6 = new Node(6);
  const node7 = new Node(7);
  const node8 = new Node(8);
  const node9 = new Node(9);
  const node10 = new Node(10);
  const node11 = new Node(11);
  const node12 = new Node(12);
  
  node1.next = node2, node2.prev = node1;
  node2.next = node3, node3.prev = node2;
  node3.next = node4, node4.prev = node3;
  node4.next = node5, node5.prev = node4;
  node5.next = node6, node6.prev = node5;
  
  node7.next = node8, node8.prev = node7;
  node8.next = node9, node9.prev = node8;
  node9.next = node10, node10.prev = node9;
  
  node11.next = node12,node12.prev = node11;
  
  node3.child = node7;
  node8.child = node11;
  
  const node = flattenList(node1);
  
  print(node);
  
  
  
  