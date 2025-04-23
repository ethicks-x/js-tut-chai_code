// ********************************* Number ************************************

const numberOne = new Number(200)           // new method (explicit way)
const numberTwo = 400                       // old method (implicit way)

console.log(numberOne);
console.log(numberTwo);

const numberThree = new Number(123.547)
console.log(numberThree.toPrecision(4))
console.log(numberThree.toFixed(2))
console.log(numberThree.toString().length)
console.log(numberThree.toString())

const hundred = new Number(10000000000)
console.log(hundred.toLocaleString());
console.log(hundred.toLocaleString('en-IN'));

// ********************************* Maths ***********************************

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.8));
console.log(Math.max(4,2,5,7));
console.log(Math.min(4,2,5,7));

console.log(Math.random());                     // Always returns between range 0-1
console.log(Math.random() * 10 + 1);

/*
 * #Tricks--
 *
 * How to get random numbers between some ranges?
 *   
 */

const max = 20 
const min = 10 

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

