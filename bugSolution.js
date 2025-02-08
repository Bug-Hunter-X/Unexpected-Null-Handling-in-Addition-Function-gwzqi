function foo(a, b) {
  // Input validation to check for numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Return NaN for invalid input
  }
  if (a === null || b === null) {
    return 0; // Handle null values
  }
  return a + b; // Simple addition
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // 0
console.log(foo(1, null)); // 0
console.log(foo(null, null)); // 0
console.log(foo('a', 2)); // NaN
console.log(foo(1, 'b')); // NaN