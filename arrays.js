// 1️⃣ Gushyiraho array y’amazina (names)
const amazina = ["Ami", "John", "Sarah", "Habayimana"];

// 2️⃣ Kureba elements za array
console.log("Izina rya mbere:", amazina[0]); // Amazina atangira kuri index 0
console.log("Izina rya nyuma:", amazina[amazina.length - 1]); // Izina rya nyuma muri array

// 3️⃣ Guhindura agaciro ka element muri array
amazina[1] = "Doe";  // Hindura "John" aba "Doe"
console.log("Array nyuma yo guhindura:", amazina);

// 4️⃣ Kongeramo element nshya muri array
amazina.push("Grace"); // Ongeramo "Grace" ku mpera y’array
console.log("Array nyuma yo kongeramo:", amazina);

// 5️⃣ Gusiba element (ukoresha splice)
amazina.splice(2, 1); // Siba element ya index 2 ("Sarah")
console.log("Array nyuma yo gusiba:", amazina);

// 6️⃣ Kuzenguruka muri array (looping)
console.log("🌀 Kuzenguruka muri array:");
for (let i = 0; i < amazina.length; i++) {
  console.log("Index " + i + ":", amazina[i]);
}

// 7️⃣ Array irimo objects
const abanyeshuri = [
  { name: "Ami", age: 22 },
  { name: "John", age: 30 },
  { name: "Sarah", age: 25 }
];

// 8️⃣ Kureba ibintu biri muri array ifite objects
console.log("Izina ry’umunyeshuri wa mbere:", abanyeshuri[0].name);
console.log("Imyaka y’umunyeshuri wa kabiri:", abanyeshuri[1].age);

// 9️⃣ Kuzenguruka array ifite objects
console.log("🌀 Kuzenguruka abanyeshuri:");
for (let i = 0; i < abanyeshuri.length; i++) {
  console.log(
    abanyeshuri[i].name + " afite imyaka: " + abanyeshuri[i].age
  );
}
