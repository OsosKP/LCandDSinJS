// 282
// String num, int target, int index, long currentValue, long lastDigitValue, String expression, List<String> result
const addOperator = (num, target) => {
    const output = [];

    const dfs = (numString, targetValue, index, currentValue, lastDigitValue, expression, result) => {
        // We've gone through the entire string, so we're done
        if (index === numString.length) {
            // We have reached the target value
            if (currentValue === targetValue) {
                result.push(expression);
            }
            // Once we've added the result, or if we're discarding it, return
            return;
        }

        for (let i = index; i < num.length; i++) {
            // Ignore 0 as single digit value or beginning of longer value
            if (i !== index && num[index] === "0") break;

            // Get the value of the current digit
            const currentDigitValue = Number(numString.substring(index, i + 1));

            // Don't apply an operator with the first digit, since we need two operands
            if (index === 0) {
                dfs(
                    numString,
                    targetValue,
                    i + 1,
                    currentDigitValue,
                    currentDigitValue,
                    expression + currentDigitValue,
                    result
                );
            }

            // Otherwise: try '+', '-' and '*'
            // By this point we have "currentValue" and "lastDigitValue", two operands
            else {
                // +
                dfs(
                    numString,
                    targetValue,
                    i + 1,
                    currentValue + currentDigitValue,
                    currentDigitValue,
                    expression + "+" + currentDigitValue,
                    result
                );
                // -
                dfs(
                    numString,
                    targetValue,
                    i + 1,
                    currentValue - currentDigitValue,
                    -currentDigitValue,
                    expression + "-" + currentDigitValue,
                    result
                );

                // *
                dfs(
                    numString,
                    targetValue,
                    i + 1,
                    currentValue - lastDigitValue + (lastDigitValue * currentDigitValue),
                    lastDigitValue * currentDigitValue,
                    expression + "*" + currentDigitValue,
                    result
                );
            }
        }
    }

    dfs(num, target, 0, 0, 0, "", output);
    return output;
}

console.log(addOperator("123", 6));
console.log(addOperator("105", 5));