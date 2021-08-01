const letterCombinations = (digits) => {
    if (!digits.length) return [];
    const mapping = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    }
    const result = [];

    const traverse = (index, digits, mapping, string="") => {
        if (string.length === digits.length) {
            result.push(string);
            return;
        }
        const choices = mapping[digits[index]];
        for (let char of choices) {
            traverse(index+1, digits, mapping, string + char);
        }
    }

    traverse(0, digits, mapping, "");
    return result;
}

console.log(letterCombinations("23"));
console.log("-----");
console.log(letterCombinations(""));
console.log("-----");
console.log(letterCombinations("2"));
console.log("-----");
console.log(letterCombinations("23456"));