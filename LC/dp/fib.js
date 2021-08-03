
const fibonacci = (n) => {
// Fast, iterative
    // let a = 0;
    // let b = 1;

    // let count = 1;
    // while (count < n) {
    //     const c = a + b;
    //     a = b;
    //     b = c;
    //     count++;
    // }
    // return b;

// Slow, recursive
    // if (n <= 2) return 1;
    // return fibonacci(n-1) + fibonacci(n-2)

// Faster recursion with memoization
    const memo = [0, 1, 1];

    const fib = (n) => {
        if (!(n in memo)) {
            memo[n] = fib(n-1) + fib(n-2);
        }
        return memo[n];
    }

    return fib(n);

// Bottom-up iterative
    // const table = [0, 1, 1];

    // for (let i=3; i<=n; i++) {
    //     table[i] = table[i-1] + table[i-2];
    // }
    // return table[n];
}

console.log(fibonacci(1000));