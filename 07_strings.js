// *************************** Strings *****************************

const name = "sinchan"                                         // variable declaration is old method 
const repoCount = 10

// console.log(name + " has " + repoCount + " repos.")         // this type of string concate is old method, and shouldn't use anymore

// New Method of String concatnation, should be used from now on.
console.log(`Hello, my name is ${name} and I have a total of ${repoCount} repos in github.`); 

const aboutMe = new String('My name is sinchan gayen')        // new method of variable declaration 

console.log(aboutMe[1]);
console.log(aboutMe.__proto__);

console.log(aboutMe.length);
console.log(aboutMe.toUpperCase());

console.log(aboutMe.charAt(6))
console.log(aboutMe.indexOf('S'))
console.log(aboutMe.indexOf('s'))

console.log(aboutMe.includes('sinchan'))
console.log(aboutMe.includes(' '))

console.log(aboutMe.split(' '))

// More functions to be explored later by own
// Mastering String is great choice to start with JS
