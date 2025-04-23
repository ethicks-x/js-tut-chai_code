// Stack and Heap Memory Discussion


// Stack (Primitive)
let name1 = "SINCHAN"                               // Assigning a variable
let name2 = name1                                   // new var got a copy of old var 

name2 = "Sinchan"                                   // new var value change

console.log(name1)                                  // change in new var doesn't effect
console.log(name2)                                  // old var value 

// Heap (Non-Primitive)
let user1 = {                                       // variable declared
    email: "isinchan@gmail.com",
    upi: "38121782198@ypl"
}

let user2 = user1                                   // new var declared with reference of 
                                                    // old var, remember not the copy rather direct reference 

console.log(user1)                                  // Both the var have same data / value
console.log(user2)

user2.email = "sinchangayen@gmail.com"              // Did some changes in new var 

console.log(user1)                                  // Changing in new var does 
console.log(user2)                                  // affect on old var value / data
