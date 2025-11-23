/* Q8.  Inbuilt HOF – map, filter, reduce, sort */
let nums = [10, 3, 7, 20, 13, 2];
let sruares = nums.map((n) => n * n);
function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    const limit = Math.floor(Math.sqrt(n));
    for (let i = 3; i <= limit; i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}
let primes = nums.filter(isPrime);
let sumAll = nums.reduce((acc, curr) => acc + curr, 0);
let sortedDesc = nums.slice().sort((a, b) => b - a);
console.log(sruares); // Output: [100, 9, 49, 400, 169, 4]
console.log(primes); // Output: [3, 7, 13, 2]
console.log(sumAll); // Output: 55
console.log(sortedDesc); // Output: [20, 13, 10, 7, 3, 2]

/* Q9. Callback Function Question 
displayCar()
displayTruck()
displayBike()
vehicleInfo(vehicleCategory, callbackFn)
vehicleInfo("Car", displayCar)
vehicleInfo("Truck", displayTruck)
vehicleInfo("Bike", displayBike) */
function displayCar() {
    console.log("Displaying Car: Car - Model X, Year 2020");
}
function displayTruck() {
    console.log("Displaying Truck - Truck - Model Y, Year 2018");
}
function displayBike() {
    console.log("Displaying Bike - Bike - Model Z, Year 2021");
}
function vehicleInfo(vehicleCategory, callbackFn) {
    console.log(`Vehicle Category: ${vehicleCategory}`);
    callbackFn();
}
vehicleInfo("Car", displayCar);
vehicleInfo("Truck", displayTruck);
vehicleInfo("Bike", displayBike);


