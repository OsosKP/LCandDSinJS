const combinationSum = (candidates, target) => {
    const result = [];
    const stack = [];
    const start = 0;
    const fixedCandidates = [...new Set(candidates.sort((a, b) => a - b))];

    combinations(fixedCandidates, target, stack, result, start);

    return result;
}

const combinations = (candidates, target, stack, result, start) => {
    // Sum isn't correct
    if (target < 0) return;

    // We hit the target
    else if (target === 0) {
        result.push([...stack]);
    }

    // Keep going
    else {
        // Start at the index we left off at
        for (let i = start; i < candidates.length; i++) {
            // Add the next value to the stack
            stack.push(candidates[i]);
            // Continue down the rabbit hole with that stack
            combinations(candidates, target - candidates[i], stack, result, i);
            // Done exploring, so remove it
            // (It was added to the result above if it worked out)
            stack.pop();
        }
    }
}

const l1 = [2, 3, 3, 6, 7];
const t1 = 7;
const l2 = [2];
const t2 = 1;
const l3 = [1];
const t3 = 1;
const l4 = [1];
const t4 = 2;

console.log(combinationSum(l1, t1));
console.log(combinationSum(l2, t2));
console.log(combinationSum(l3, t3));
console.log(combinationSum(l4, t4));