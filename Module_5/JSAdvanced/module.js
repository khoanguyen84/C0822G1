// import sum, * as myMath from "./libraries.js";
import { sum, times, power } from "./libraries.js";

let numbers = [4, 2, 2, 4, 5, 6, 6, 6, 6];

console.log(sum(...numbers));
console.log(times(...numbers));
console.log(power(10, 2));