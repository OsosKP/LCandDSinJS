class ListNode {
    constructor(val) {
        this.val = val;
    }
}

const mergeKLists = (lists) => {
    const heap = [];
    const result = [];

    const heapSwap = (index1, index2) => {
        const temp = heap[index1];
        heap[index1] = heap[index2];
        heap[index2] = temp;
    }

    const insertIntoHeap = (node) => {
        heap.push(node);
        bubbleUp();
    }

    const bubbleUp = () => {
        let index = heap.length - 1;
        let parentIndex = Math.floor((index - 1) / 2);
        while (parentIndex >= 0) {
            if (heap[index].val < heap[parentIndex].val) {
                heapSwap(index, parentIndex);
                index = parentIndex;
                parentIndex = Math.floor((index - 1) / 2);
            } else break;
        }
    }

    const extractMin = () => {
        const minNode = heap[0];
        heap[0] = heap[heap.length - 1];
        heap.pop();
        trickleDown();
        return minNode;
    }

    const trickleDown = () => {
        let index = 0;
        let leftChildIndex, rightChildIndex;
        let swapIndex = -1, swapNode;

        while (true) {
            leftChildIndex = (index * 2) + 1;
            rightChildIndex = (index * 2) + 2;

            // If no children...
            if (leftChildIndex >= heap.length) break;

            // If only left child...
            else if (rightChildIndex >= heap.length) {
                swapIndex = leftChildIndex;
            }

            // If both children, find max value...
            else {
                if (heap[leftChildIndex].val <= heap[rightChildIndex].val) {
                    swapIndex = leftChildIndex;
                } else {
                    swapIndex = rightChildIndex;
                }
            }

            if (swapIndex < 0) break;

            if (heap[index].val > heap[swapIndex].val) {
                heapSwap(index, swapIndex);
                index = swapIndex;
            } else {
                break;
            }

        }
    }

    // Put all nodes in the heap and bubble up when necessary
    for (let i=0; i<lists.length; i++) {
        let node = lists[i];
        while (node) {
            if (node.val !== null) {
                insertIntoHeap(new ListNode(node.val));
            }
            node = node.next;
        }
    }

    // Now extract from the heap until its empty
    let prev = null;
    let head = null;
    let curr = null;
    while (heap.length) {
        curr = extractMin();
        if (!head) head = curr;
        if (prev) prev.next = curr;
        prev = curr;
    }
    return head;
}

const ex1list1node1 = new ListNode(1);
const ex1list1node4 = new ListNode(4);
const ex1list1node5 = new ListNode(5);
ex1list1node1.next = ex1list1node4;
ex1list1node4.next = ex1list1node5;

const ex1list2node1 = new ListNode(1);
const ex1list2node3 = new ListNode(3);
const ex1list2node4 = new ListNode(4);
ex1list2node1.next = ex1list2node3;
ex1list2node3.next = ex1list2node4;

const ex1list3node2 = new ListNode(2);
const ex1list3node6 = new ListNode(6);
ex1list3node2.next = ex1list3node6;

const l1 = [ex1list1node1, ex1list2node1, ex1list3node2];

console.log(mergeKLists(l1));
console.log(mergeKLists([new ListNode(null)]));