const factorial = (num) => {
  return (num === 1) ? 1 : num * factorial(num-1)
}

console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(3));
console.log(factorial(2));
console.log(factorial(1));