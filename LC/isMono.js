l1 = [-1, -1, 0, 1, 2, 2, 3, 4, 5];
l2 = [5, 4, 3, 3, 2, 1, 0, 0, 0, -1];
l3 = [-1, 0, 1, 2, 1, 3, 4];
l4 = [5, 4, 3, 2, 1, 2, 1];
l5 = [1];
l6 = [];

const isMonotonic = (list) => {
  let dec = true;
  let inc = true;
  for (let i=0; i<list.length-1; i++) {
    dec = dec && list[i] >= list[i+1];
    inc = inc && list[i] <= list[i+1];
  }
  return dec || inc;
}

console.log(isMonotonic(l1));
console.log(isMonotonic(l2));
console.log(isMonotonic(l3));
console.log(isMonotonic(l4));
console.log(isMonotonic(l5));
console.log(isMonotonic(l6));