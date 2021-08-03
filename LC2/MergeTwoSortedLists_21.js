class ListNode {
    constructor(val) {
        this.val = val;
    }
}

const mergeTwoLists = (l1, l2) => {
    let last = null;
    let head = null;
    let nextNode = null;
    let print = [];
    
    while (l1 || l2) {
        if (!l2 || (l1 && l2 && l1.val <= l2.val)) {
            nextNode = new ListNode(l1.val);
            l1 = l1.next;
        } else if (!l1 || (l1 && l2 && l2.val < l1.val)) {
            nextNode = new ListNode(l2.val);
            l2 = l2.next;
        }
        print.push(nextNode.val);
        if (!head) head = nextNode;
        if (last) last.next = nextNode;
        last = nextNode;
    }
    console.log(print);
    return head;
}

const ex1list1node1 = new ListNode(1);
const ex1list1node2 = new ListNode(2);
const ex1list1node4 = new ListNode(4);
ex1list1node1.next = ex1list1node2;
ex1list1node2.next = ex1list1node4;

const ex1list2node1 = new ListNode(1);
const ex1list2node3 = new ListNode(3);
const ex1list2node4 = new ListNode(4);
ex1list2node1.next = ex1list2node3;
ex1list2node3.next = ex1list2node4;

console.log(mergeTwoLists(ex1list1node1, ex1list2node1));
console.log(mergeTwoLists(null, null));
console.log(mergeTwoLists(null, new ListNode(0)));
console.log(mergeTwoLists(ex1list1node1, null));
