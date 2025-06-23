let names = "John Doe";
const age = 30;
var salary = 7000;

// accessing variables
console.log("Name:", names);
console.log("Age:", age);
console.log("Salary:", salary);

// updating variables
names = "Habayimana";
age = 25;
salary = 8000;

// accessing updated variables
console.log("Updated Name:", names);
console.log("Updated Age:", age); // will give errors , variable 'age' is a constant
console.log("Updated Salary:", salary);
