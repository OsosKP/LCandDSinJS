function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

const mergeKLists = (lists) => {
  return getNext([], lists);
}

const getNext = (builder, lists) => {
  if (lists.length === 0) return builder;
  const firsts = lists.map(list => list[0].val);
  const minIndex = firsts.indexOf(Math.min(...firsts));
  builder.push(lists[minIndex].shift());
  if (builder.length > 1) {
    builder[builder.length - 2].next = builder[builder.length - 1];
  }
  if (lists[minIndex].length === 0) lists.splice(minIndex, 1);
  return getNext(builder, lists);
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

const setupTests = () => {
  const applyNexts = (list) => {
    for (let i=0; i<list.length-1; i++) {
      list[i].next = list[i+1];
    }
  }
  
  const l1 = [
    new ListNode(1, null),
    new ListNode(4, null),
    new ListNode(6, null),
    new ListNode(8, null)
  ]

  const l2 = [
    new ListNode(3, null),
    new ListNode(7, null)
  ]
  
  const l3 = [
    new ListNode(2, null),
    new ListNode(5, null),
    new ListNode(9, null)
  ]

  const lists = [l1, l2, l3];
  lists.map(list => applyNexts(list));
  return lists;
}

const lists = setupTests();

console.log(lists);

const getMerged = mergeKLists(lists);
console.log(getMerged);