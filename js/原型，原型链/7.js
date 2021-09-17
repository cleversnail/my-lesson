var num = 123
num.toString()  // '123'  --->  new Number(num).toString()
// 所以其实走了 Number.prototype   它上面有 toString()  方法


Number.prototype.__proto__ = Object.prototype



// 方法重写
// Object.prototype.toString = function() {}


Person.prototype.toString = function() {
  return 'hehe'
}

function Person() {

}
var person = new Person()

console.log(person.toString()) // hehe