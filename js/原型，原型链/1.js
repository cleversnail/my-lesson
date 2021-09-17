// Person.prototype  -- 原型 
// Person.prototype = {}   // 函数被定义出来天生具备 prototype 属性 是祖先

Person.prototype.name = '蜗牛'
Person.prototype.say = function() {
  console.log('hahahaha')
}




// 1
function Person() {
  // this.name = 'wn'
}
var person = new Person()
console.log(person) // {}
console.log(person.name) // {}




//他定义了构造函数制造出的对象的公共祖先
var person1 = new Person()
console.log(person1.name)





// 往原型上添加方法试试
person.say()
// 此时当前的对象person并不具备以上的属性和方法，这些属性和方法都是继承来的
// 当对象自己有这个属性的时候，就取自己的
