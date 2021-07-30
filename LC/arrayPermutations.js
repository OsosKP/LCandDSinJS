const permute = (nums, set = [], answers = []) => {
    if (!nums.length) {
        answers.push([...set]);
        return;
    }

    for (let i = 0; i < nums.length; i++) {
        const newNums = nums.filter((_, index) => index !== i);
        set.push(nums[i]);
        permute(newNums, set, answers);
        set.pop();
    }

    return answers;
}

console.log(permute([1, 2, 3]));