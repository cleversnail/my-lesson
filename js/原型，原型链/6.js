var obj = {}   // 对象字面量 有原型吗？

var obj1 = new Object()  // 这两个是一样的，所以都用上面这种
// obj1.__proto__ = ?



// Object.create(原型) 
var obj = {
  name: 'wn',
  age: 18
}

var obj1 = Object.create(obj)
// obj1.__proto__ = ?




// 网易 面试题  
// 所有的对象最终都会继承自 Object.prototype ？？？

// 不是的，有特例
// Object.create() 能产生特例
console.log(Object.create()) // 报错 。。。。 or null

var obj = Object.create(null) // 这个对象就没有原型
// 但是它还是个对象
obj.name = 'wn'

// 那我们可以给它手动定义 __proto__ 吗？
obj.__proto__ = { name: 'wn' }
obj.name // 没有



// 所以 undefined 是没有 toString 方法的， 因为它没有原型，没有原型的属性都没有toString方法  null也没有




