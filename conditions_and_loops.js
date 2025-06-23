// ================================
// 1️⃣ CONDITIONAL STATEMENTS
// ================================

// ✔️ if...else
let imyaka = 20;

if (imyaka < 18) {
  console.log("Uri umwana"); // Minor
} else if (imyaka >= 18 && imyaka < 60) {
  console.log("Uri umuntu mukuru"); // Adult
} else {
  console.log("Uri umusaza cyangwa umukecuru"); // Elderly
}


// ✔️ switch statement
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Today is Monday - Ku wa mbere");
    break;
  case "Friday":
    console.log("Today is Friday - Ku wa gatanu");
    break;
  default:
    console.log("Si Monday cyangwa Friday"); // Not Monday or Friday
}


// ✔️ Ternary operator
let isLoggedIn = true;

let message = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(message); // Shortcut ya if...else

// ================================
// 2️⃣ LOOPS
// ================================

// ✔️ for loop - Kuzenguruka imibare
for (let i = 1; i <= 5; i++) {
  console.log("i =", i);
}

// ✔️ while loop - izenguruka kugeza condition ihindutse false
let j = 1;
while (j <= 3) {
  console.log("j =", j);
  j++;
}

// ✔️ do...while loop - ikora byanze bikunze inshuro 1
let k = 5;
do {
  console.log("k =", k);
  k--;
} while (k > 0);

// ✔️ for...of loop - Kuzenguruka array
const amazina = ["Ami", "John", "Sarah"];
for (let izina of amazina) {
  console.log("Izina:", izina);
}

// ✔️ for...in loop - Kuzenguruka object
const umuntu = {
  name: "Ami",
  age: 22,
  gender: "Male"
};

for (let key in umuntu) {
  console.log(key + ":", umuntu[key]);
}
