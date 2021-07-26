l1 = [2, 1, 2, 2, 3, 4, 4, 5, 2, 1];
l2 = [1, 2, 2, 3];
l3 = [1, 3, 1, 4, 5, 4, 3, 1];
l4 = [];
l5 = [1];
l6 = [2];

const moverReduce = (list, toMove) => {
  return list.reduce((newList, element) => {
    if (element === toMove) {
      newList.push(element);
    } else {
      newList.unshift(element);
    }
    return newList;
  }, [])
}

const moverSort = (list, toMove) => {
  return list.sort((a, b) => {
    if (a === toMove) return 1;
    if (b === toMove) return -1;
    return 0;
  })
}

console.log(moverSort(l1, 2));
console.log(moverSort(l2, 2));
console.log(moverSort(l3, 2));
console.log(moverSort(l4, 2));
console.log(moverSort(l5, 2));
console.log(moverSort(l6, 2));