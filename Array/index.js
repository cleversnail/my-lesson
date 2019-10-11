// var arr = []
// var arr = new Array()
// var arr = new Array(5)
// arr = [undefined,undefined,undefined,undefined,undefined] 
// var arr = new Array(1,2,3,4,5)


// var arr = Array.of(1,2,3)  // [1,2,3]
// console.log(arr)

// var arr = []
// if (arr instanceof Array) {}
// if (Array.isArray(arr)) {}
// if (Object.prototype.toString.call(arr) ==  '[object Array]') {}
// if (arr.constructor == Array) {}
// console.log(arr.constructor)

// var arr = [1,2,3,4,5]

// Array.from()

// let arrayLike = {
//   0: 'a',
//   1: 'b',
//   2: 'c',
//   length: 3
// }
// let str = 'abc'
// // ['a', 'b', 'c']
// let newArray = Array.from(arrayLike)
// let newArray2 = Array.from(arrayLike, (v) => v+'1')
// let newArray3 = Array.from(str)

// console.log(newArray3)

// var arr = [1,2,3,4,5]
// // '1|2|3|4|5'
// var test = arr.join('')
// console.log(test)

// arr.sort((a, b) => {
//   return a - b
// })
// console.log(arr)

// let test = arr.slice(0,2)
// let test = arr.splice(0,0,6)
// console.log(arr)

// arr.copyWithin(0,3)
// console.log(arr)

// arr.fill(9, 0, 1)
// console.log(arr)

var arr = [1,2,3,4,5]
arr.find((v) => v < 3)
console.log(arr.find((v) => v < 3))


