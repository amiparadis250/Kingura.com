// 1️⃣ Function yo kongera (Addition)
function add(a, b) {
  return a + b; // a + b ni igisubizo cyo guteranya
}

console.log("5 + 3 =", add(5, 3)); // 8


// 2️⃣ Function yo gukuramo (Subtraction)
function subtract(a, b) {
  return a - b; // a - b ni igisubizo cyo gukuramo
}

console.log("10 - 4 =", subtract(10, 4)); // 6


// 3️⃣ Function yo gukuba (Multiplication)
function multiply(a, b) {
  return a * b; // a * b ni igisubizo cyo gukuba
}

console.log("6 * 7 =", multiply(6, 7)); // 42


// 4️⃣ Function yo kugabanya (Division)
function divide(a, b) {
  if (b === 0) {
    return "Ntushobora kugabanya na 0"; // Division by zero is not allowed
  }
  return a / b; // a / b ni igisubizo cyo kugabanya
}

console.log("20 / 5 =", divide(20, 5)); // 4
console.log("20 / 0 =", divide(20, 0)); // Error message


// 5️⃣ Function ivanga ibintu byose hamwe (calculator)
function calculator(a, b, operation) {
  if (operation === "add") {
    return add(a, b);
  } else if (operation === "subtract") {
    return subtract(a, b);
  } else if (operation === "multiply") {
    return multiply(a, b);
  } else if (operation === "divide") {
    return divide(a, b);
  } else {
    return "Unknown operation"; // Iyo operation utayizi
  }
}

console.log("Calculator (12, 4, 'multiply') =", calculator(12, 4, "multiply")); // 48
