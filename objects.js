// 1️⃣ Gushyiraho object ya "umuntu"
const umuntu = {
  name: "John Doe",       // Izina ry’umuntu (Name)
  age: 30,                // Imyaka (Age)
  isStudent: false        // Ese ni umunyeshuri? (Is student?)
};

// 2️⃣ Kureba cyangwa gusohora agaciro muri object
console.log("Izina:", umuntu.name);         // Dot notation
console.log("Imyaka:", umuntu["age"]);      // Bracket notation

// 3️⃣ Guhindura (modifying) agaciro ka property
umuntu.age = 35;
umuntu["isStudent"] = true;

console.log("Imyaka nshya:", umuntu.age);
console.log("Is student:", umuntu.isStudent);

// 4️⃣ Kongeramo property nshya
umuntu.gender = "Male";    // Ubonyeho “gender”

console.log("Igitsina:", umuntu.gender);

// 5️⃣ Gusiba property muri object
delete umuntu.isStudent;

console.log("Nyuma yo gusiba isStudent:", umuntu);

// 6️⃣ Kuzenguruka object ukoresheje for...in
console.log("🌀 Kuzenguruka muri object:");
for (let key in umuntu) {
  console.log(key + ":", umuntu[key]);
}

// 7️⃣ Object ifite function (method)
const user = {
  name: "Ami",
  greet: function () {
    console.log("Hello, my name is " + this.name);
  }
};

user.greet(); // Iyi function icapa izina

// 8️⃣ Object irimo indi object (Nested Object)
const student = {
  name: "Sarah",
  marks: {
    math: 90,
    english: 85
  }
};

console.log("Amanota ya Sarah mu math:", student.marks.math);
console.log("Amanota mu cyongereza:", student.marks.english);
