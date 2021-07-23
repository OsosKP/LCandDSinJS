// Using a helper method
const collectOddValues = (arr) => {
  let result = [];

  const helper = (helperInput) => {
    if (!helperInput.length) return;

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

const collectOddValuesNoHelper = (arr) => {
  let newArr = [];

  if (!arr.length) return newArr;

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  
  newArr = newArr.concat(collectOddValuesNoHelper(arr.slice(1)));
  return newArr;
}

const l1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const l2 = [2, 4, 6, 8];
const l3 = [1, 3, 5, 7, 9, 8];
const l4 = [];

// console.log(collectOddValues(l1));
// console.log(collectOddValues(l2)); 
// console.log(collectOddValues(l3));
// console.log(collectOddValues(l4));

console.log(collectOddValuesNoHelper(l1));
console.log(collectOddValuesNoHelper(l2));
console.log(collectOddValuesNoHelper(l3));
console.log(collectOddValuesNoHelper(l4));