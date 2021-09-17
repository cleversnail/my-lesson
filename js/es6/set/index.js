// const s = new Set() // 类数组 set {}
// const arr = new Array()
// console.log(s)
// let arr = [2, 3, 4, 1, 3, 2, 5]
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i])
// }
// for (let item of arr) {
//   console.log(item)
//   item.name = 'xxx'
// }

// arr.forEach((x) => {
//   s.add(x)
// })
// console.log(s)


// const set = new Set(document.querySelectorAll('div'))
// console.log(set.size)


// 数组去重
let arr = [2, 3, 4, 1, 3, 2, 5]
// console.log(arr.includes(4))

// 字符串去重
// console.log([...new Set('abcdab')])


// const set = new Set()
// set.add(5)
// set.add('5')

// let a = NaN
// let b = NaN
// set.add(a)
// set.add(b)

// set.add({name: '蜗牛'})
// set.add({name: '蜗牛'})
// console.log(set)


// const set = new Set()
// set.add(1).add(2).add(3)
// // set.delete(2)
// set.clear()
// console.log(set)



// Array.from(['a', 'b', 'c']).forEach(e => {
//   console.log(e)
// });
// const set = new Set([1, 2, 3, 4])
// const array = Array.from(set)
// array.forEach(e => {
//   console.log(e)
// })
// 数组去重
// function dedupe(array) {
//   return Array.from(new Set(array))
// }
// console.log(dedupe([1, 2, 2, 3, 3]))


// set遍历
let set = new Set(['red', 'green', 'blue'])
// let set = new Set()
// set.add({ name: 'wn' })
// set.add({ age: '18' })
// set.add({ sex: 'boy' })
// console.log(set) // { 0: { name: 'wn' }, 1: { age: '18' }, 2: { sex: 'boy' } }

// keys()是set结构中返回键名的遍历器
// values()是set结构中返回值的遍历器
// entries()是set结构中返回键值对的遍历器

// for (let item of set.keys()) {
//   console.log(item)
// }
// for (let item of set.values()) {
//   console.log(item)
// }
for (let item of set.entries()) {
  console.log(item)
}

