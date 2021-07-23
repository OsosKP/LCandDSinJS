const maxSubrraySum = (arr, num) => {
  if (num > arr.length) return 0;
  let maxSum = 0;
  let tempSum = 0;

  for (let i=0; i<num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i=num; i<arr.length; i++) {
    // i - num = current index - the window size, gets the last index that left the window
    tempSum = tempSum - arr[i-num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

const l1 = [1, 2, 3, 200, 7, 8, 9, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 1, 4, 55];
const l2 = [1, 1, 1, 1, 1, 1];
const l3 = [1, 1, 1, 2, 2, 1, 1];
const l4 = [1];
const l5 = [];

console.log(maxSubrraySum(l1, 3));
console.log(maxSubrraySum(l2, 3));
console.log(maxSubrraySum(l3, 3));
console.log(maxSubrraySum(l4, 3));
console.log(maxSubrraySum(l5, 3));