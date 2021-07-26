const combinationSum = (candidates, target) => {
    const result = [];
    const stack = [];
    const start = 0;

    combinations(candidates.sort((a, b) => a - b), target, result, stack, start);
    return result;
}

const combinations = (candidates, target, result, stack, start) => {
    if (target < 0) return;

    if (target === 0) {
        result.push([...stack]);
    }

    else {
        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] === candidates[i-1]) continue;
            stack.push(candidates[i]);
            combinations(candidates, target - candidates[i], result, stack, i + 1);
            stack.pop();
        }
    }
}


const l1 = [2, 3, 6, 7];
const t1 = 7;
const l2 = [2];
const t2 = 1;
const l3 = [1];
const t3 = 1;
const l4 = [1];
const t4 = 2;
const l5 = [10, 1, 2, 7, 6, 1, 5];
const t5 = 8;
const l6 = [2, 5, 2, 1, 2];
const t6 = 5;

// console.log(combinationSum(l1, t1));
// console.log(combinationSum(l2, t2));
// console.log(combinationSum(l3, t3));
// console.log(combinationSum(l4, t4));
console.log(combinationSum(l5, t5));
console.log(combinationSum(l6, t6));