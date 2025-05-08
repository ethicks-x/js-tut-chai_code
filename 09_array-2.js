// ******************** Array (Part-2) ***********************

const marvel_heroes = ["thor", "ironman", "captain america", "spiderman"]
const dc_heroes = ["superman", "aquaman", "flash", "batman"]

// marvel_heroes.push(dc_heroes)
// const new_heroes = marvel_heroes.concat(dc_heroes)
const all_heroes = [...marvel_heroes, ...dc_heroes]             // Spread Operator (...)

console.log(all_heroes)

const an_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_an_aray = an_array.flat(Infinity)

console.log(real_an_aray)


console.log(Array.isArray("Sinchan"))
console.log(Array.from("Sinchan"))                              // will return a array 
console.log(Array.from({name: "Sinchan"}))                      // intersting case


let score1 = 1222
let score2 = 338
let score3 = 82828

console.log(Array.of(score1, score2, score3))
