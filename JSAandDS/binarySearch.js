const binarySearch = (array, target) => {
  const mid = Math.floor(array.length / 2);
  if (array.length === 1 && array[0] !== target) return -1;
  if (array[mid] === target) {
    return mid;
  } else if (array[mid] < target) {
    return binarySearch(array.slice(mid, array.length-1));
  } else {
    return binarySearch(array.slice(0, mid));
  }
}

const l1 = [1, 2, 3, 5, 7, 9, 12, 15, 17, 21, 25, 30];
const l2 = [-100, -94, -41, -20, -1, 5, 30, 60, 205, 2051];

console.log(binarySearch(l1, 12));
console.log(binarySearch(l1, 3));
console.log(binarySearch(l1, 13));
console.log(binarySearch(l2, 5));