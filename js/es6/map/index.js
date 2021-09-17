let obj = {
  name: '明国',
  age: 18,
  sex: 'man'
}
obj.height = '175cm'
// console.log(obj)

const m = new Map()
// console.log(m) // Map {}
m.set(obj, 'content')
// { { name: '明国', age: 18, sex: 'man' }: 'content' }

// console.log(m.get(obj))

// console.log(m.has(obj))
m.delete(obj)
// console.log(m.has(obj))



// const map = new Map([  // { name: '祥祥', age: '20' }
//   ['name', '祥祥'],
//   ['age', '20']
// ])
// console.log(map.size) 
// console.log(map.has('name'))
// console.log(map.get('name'))


// const items = [
//   ['name', '祥祥'],
//   ['age', '20']
// ]
// const map = new Map()
// items.forEach(([key, value]) => {
//   map.set(key, value)
// })

// const set = new Set([ // Set { [ 'foo', 1 ], [ 'bar', 2 ] }
//   ['foo', 1],
//   ['bar', 2]
// ])
// const m1 = new Map(set)
// console.log(m1)


// const map = new Map()
// const k1 = ['a']
// const k2 = ['a']

// map.set(k1, 111).set(k2, 222) // k1，k2值相同，在Map中也被认为是两个键
// console.log(map)

// map.set(-0, 123)  // 0, -0 默认就是一个键 
// map.set(+0, 123)

// map.set(true, 1)
// map.set('true', 2)

// map.set(undefined, 3)
// map.set(null, 4)

// map.set(NaN, 5) // NaN 默认就是一个键 
// map.set(NaN, 6)
// map.clear()
// console.log(map)


const map = new Map([
  ['foo', 'no'],
  ['bar', 'yes']
])
// keys() 返回键名的遍历器
// values() 返回键值的遍历器
// entries() 返回成员的遍历器
for (let key of map.keys()) {
  // console.log(key)
}
for (let key of map.values()) {
  // console.log(key)
}
for (let key of map.entries()) {
  // console.log(key)
}
// map.forEach((e) => {
//   console.log(e)
// })
let k = [...map.keys()]
let val = [...map.values()]
let m2 = [...map.entries()]
console.log(m2)
