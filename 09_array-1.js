// ******************* Array *********************
const myArr = [1, 2, 3, 4]

const myArr2 = new Array(0, 1, 2, 3)

console.log(myArr)
console.log(myArr2[2])


// ******************* Array Methods *********************

// myArr.push(7)
// myArr.push(8)
// myArr.pop()

// myArr.unshift(2)
// myArr.shift()

// console.log(myArr.indexOf(2))
// console.log(myArr.includes(9))

console.log(myArr2.slice(1, 3))                 // Doesn't effect original array, doesn't include range
console.log(myArr.splice(1, 3))                 // Does effect original array, also include range

console.log(myArr)
