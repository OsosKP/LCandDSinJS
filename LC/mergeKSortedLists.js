class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

const print = (head) => {
    let curr = head;
    let out = "";
    while (curr) {
        out += curr.val + "->";
        curr = curr.next;
    }
    console.log(out);
}

const mergeKLists = (lists) => {
    if (Array.isArray(lists[0])) lists = lists.flat();
    let head = null;
    let lastNode = null;

    const merge = (lists) => {
        let minIndex = -1;
        const minNode = lists.reduce((min, node, index) => {
            if (node && node.val !== null && (min === null || node.val < min.val)) {
                min = node;
                minIndex = index;
            }
            return min;
        }, null);
        if (minIndex < 0) return;
        const node = new Node(minNode.val);
        if (!head) head = node;
        if (lastNode) lastNode.next = node;
        lastNode = node;
        lists[minIndex] = lists[minIndex].next;
        merge(lists);
    }

    merge(lists);
    return head;
}

//[[1,4,5],[1,3,4],[2,6]]
const list1node1 = new Node(1);
const list1node4 = new Node(4);
const list1node5 = new Node(5);
list1node1.next = list1node4;
list1node4.next = list1node5;

const list2node1 = new Node(1);
const list2node3 = new Node(3);
const list2node4 = new Node(4);
list2node1.next = list2node3;
list2node3.next = list2node4;

const list3node2 = new Node(2);
const list3node6 = new Node(6);
list3node2.next = list3node6;

const list4node0 = new Node(0);
const list4node2 = new Node(2);
const list4node5 = new Node(5);

const data = [list1node1, list2node1, list3node2];
const data2 = [list4node0, list4node2, list4node5];

// console.log(mergeKLists(data));
// console.log(mergeKLists([]));
// console.log(mergeKLists([[]]));
// console.log(mergeKLists([[list1node4]]));
console.log(mergeKLists(data2));

// const node7 = new Node(7);
// const node8 = new Node(8);
// const node9 = new Node(9);
// const node10 = new Node(10);
// const node11 = new Node(11);
// const node12 = new Node(12);