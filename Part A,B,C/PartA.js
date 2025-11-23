/* Q1. Spread Operator Example */
const arr1 = [10, 20, 30];
const arr2 = [40, 50];
const combined = [...arr1, ...arr2];
console.log(combined); // Output: [10, 20, 30, 40, 50]

/* Q2. Spread oprerator with Objects */
const person = { name: "Venu", age: 25 };
const extra = { city: "Bengaluru" };
const profile = { ...person, ...extra };
console.log(profile); // Output: { name: 'Venu', age: 25, city: 'Bengaluru' }

/* Q3. Rest Parameter Example */
function sumAll(...nums) {
  return nums.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumAll(1, 2, 3, 4)); // Output: 10

/* Q4. Destructuring Assignment Example */
const numbers = [10, 20, 30, 40, 50];
const [first, ...rest] = numbers;
console.log(first);
console.log(rest); 

/* Q5. Nested Object Destructuring */
let user = {
  name: "Alice",
  address: {
    city: "Bengaluru",
    pin: 560001,
    geo: { lat: 11.22, lng: 77.33 }
  }
};
const { address: {city, geo: { lat, lng } } } = user;
console.log(city); // Output: Bengaluru
console.log(lat, lng);

/* Q6. Arrow Function Example */
function multiply(a, b) {
  return a * b;
}
const multiplyArrow = (a, b) => a * b;
console.log(multiply(3, 4));

/* Q7. Optional Chaining */
let emp = {
  name: "Prakash", 
  details: {
    department: "IT",
    profile: { role: "Developer" }
  }
};
console.log(emp.details?.profile?.role); // Output: Developer










