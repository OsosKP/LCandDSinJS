function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

const nineNode = new ListNode(9, null);
const eightNode = new ListNode(8, nineNode);
const sevenNode = new ListNode(7, eightNode);
const sixNode = new ListNode(6, sevenNode);
const fiveNode = new ListNode(5, sixNode);
const fourNode = new ListNode(4, fiveNode);
const threeNode = new ListNode(3, fourNode);
const twoNode = new ListNode(2, threeNode);
const oneNode = new ListNode(1, twoNode);

var swapPairs = function(head) {
    if (!head || !head.next) return head;
    let node1 = head;
    let node2 = head.next;
    let node3 = node2.next;
    node2.next = node1;
    node1.next = swapPairs(node3);
};