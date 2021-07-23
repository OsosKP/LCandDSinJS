const sumZero = (arr) => {
  let lPtr = 0;
  let rPtr = arr.length - 1;

  while (lPtr < rPtr) {
    const sum = arr[lPtr] + arr[rPtr]
    if (sum === 0) {
      return [arr[lPtr], arr[rPtr]];
    } else if (sum < 0) {
      lPtr++;
    } else {
      rPtr--;
    }
  }
  return [];
}

const arrT1 = [-3, -2, -1, 0, 1, 2, 3];
const arrT2 = [-3, -2, -1, 0, 1, 5, 6];
const arrF1 = [1, 2, 3, 4, 5, 6, 7];
const arrF2 = [];
const arrF3 = [1];

console.log(sumZero(arrT1));
console.log(sumZero(arrT2));
console.log(sumZero(arrF1));
console.log(sumZero(arrF2));
console.log(sumZero(arrF3));