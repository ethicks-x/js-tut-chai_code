// **************************** Comparisons ***************************
console.log(2 == 1);
console.log(2 > 1);
console.log(2 < 1);
console.log(2 >= 1);
console.log(2 != 1);

console.log("2" > 1);               // true
console.log("02" > 1);              // true

console.log(null > 0);              // false
console.log(null == 0);             // false
console.log(null >= 0);             // true

/*
 * The main reason is that an equality check == and
 * comparisons <, >, >=, <= work differently.
 *
 * Comparisons convert null to a number, treating it as 0.
 * That's why (3) null >= 0 is true and (1) null > 0 is false.
 */

console.log(undefined == 0);        // false
console.log(undefined > 0);         // false
console.log(undefined < 0);         // false

// undefined means no value at all, that's why every comparison results in false
// Never do this type of type conversion, as it raises bad practice

// Strict Checking ===
console.log("2" == 2);              // true             // does type conversion
console.log("2" === 2);             // false            // doesn't type conversion
