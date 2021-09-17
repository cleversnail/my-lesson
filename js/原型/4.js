
// Person.prototype.name = 'wn'
// function Person() {
//   // var this = {
//   //   __proto__: Person.prototype
//   // }
// }
// var person = new Person()
// // console.log(person.name)

// var obj = {
//   name: '蜗牛'
// }
// console.log(person.__proto__)  // { name: 'wn' }
// person.__proto__ = obj
// console.log(person.__proto__)





// ????
Person.prototype.name = 'wn'  // a = {name = 'wn'}
function Person() {
  // this = {
  //   __proto__: Person.prototype
  // }
}
var person = new Person()  //  var person = Person.prototype
Person.prototype = {  // 把原型从新赋值  Person.prototype = {xxxx}
  name: 'pipi'
}

console.log(person.name)
