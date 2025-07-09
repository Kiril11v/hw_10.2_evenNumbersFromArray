


const numbers = [50, 49, 48, 47, 46, 45, 44, 120, 144, -138, -11, -33, 0068, -0094, 0, null, undefined, true, 'kek'];

const evenNum = numbers
.filter(num => typeof num === 'number' && Number.isInteger(num)) // only numbers
.filter(num => num % 2 === 0); // only even numbers

console.log(evenNum);
