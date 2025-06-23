// ===============================
// 1️⃣ Basic Function (Declaration)
// ===============================
function muraho() {
  console.log("Muraho neza!"); // Function itagira parameters, icapa message gusa
}

muraho(); // 👉 Iyi izacapa "Muraho neza!"


// =================================
// 2️⃣ Function ifite parameters
// =================================
function somaIzina(name) {
  console.log("Izina ryawe ni:", name);
}

somaIzina("Ami");
somaIzina("Paradis");


// ================================================
// 3️⃣ Function ibara imyaka (with return & logic)
// ================================================
function ibaraImyaka(umwakaWavukiyeho) {
  const uyuMwaka = new Date().getFullYear(); // Fata umwaka w’ubu
  return uyuMwaka - umwakaWavukiyeho;
}

const imyaka = ibaraImyaka(2002);
console.log("Ufite imyaka:", imyaka);


// ===========================================
// 4️⃣ Function ibara ubuso (with two params)
// ===========================================
function kubaraArea(length, width) {
  return length * width;
}

const area = kubaraArea(5, 10);
console.log("Ubuso ni:", area);


// ======================================
// 5️⃣ Function Expression (stored in var)
// ======================================
const bonjour = function() {
  console.log("Bonjour monde!"); // Function expression ibitswe muri variable
};

bonjour();


// ====================================
// 6️⃣ Arrow Function (modern shortcut)
// ====================================
const somaKubisi = (izina, imyaka) => {
  console.log(`${izina} afite imyaka ${imyaka}`);
};

somaKubisi("Sarah", 24);


// =====================================================
// 7️⃣ Function ikoreshwa muri array method (forEach)
// =====================================================
const amazina = ["Ami", "John", "Doe"];

// Ukoresheje function isanzwe
amazina.forEach(function(name) {
  console.log("Izina:", name);
});

// Ukoresheje arrow function
amazina.forEach((name) => console.log("Izina (arrow):", name));


// =====================================================
// 8️⃣ Bonus: Mini Calculator ukoresha functions
// =====================================================
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return "Ntushobora kugabanya na 0";
  return a / b;
}

function calculator(a, b, operation) {
  if (operation === "add") return add(a, b);
  if (operation === "subtract") return subtract(a, b);
  if (operation === "multiply") return multiply(a, b);
  if (operation === "divide") return divide(a, b);
  return "Unknown operation";
}

console.log("12 + 4 =", calculator(12, 4, "add"));         // 16
console.log("12 - 4 =", calculator(12, 4, "subtract"));    // 8
console.log("12 * 4 =", calculator(12, 4, "multiply"));    // 48
console.log("12 / 4 =", calculator(12, 4, "divide"));      // 3
console.log("12 / 0 =", calculator(12, 0, "divide"));      // Error message
