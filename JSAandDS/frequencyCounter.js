const same = (arr1, arr2) => {
  if (!(arr1.length === arr2.length)) return false;

  const counter1 = {};
  const counter2 = {};

  for (let val of arr1) {
    counter1[val] = (counter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    counter2[val] = (counter2[val] || 0) + 1;
  }

  console.log(counter1);
  console.log(counter2);

  for (let key in counter1) {
    if (!(key**2 in counter2)) return false;
    if (counter2[key**2] !== counter1[key]) return false;
  }
  return true;
}

const arr1 = [1, 1, 2, 3, 4, 4];
const arr2 = [4, 16, 9, 1, 16, 1];
const arr3 = [4, 1, 16, 1];
const arr4 = [1, 1, 2, 3, 4, 4];

console.log(same(arr1, arr2));
console.log(same(arr1, arr3));
console.log(same(arr1, arr4));