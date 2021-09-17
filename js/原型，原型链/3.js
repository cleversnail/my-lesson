
Person.prototype.lastName = 'Yu'
function Person(name) {
  this.name = name
}

var person = new Person('jinlong')
// console.log(person.lastName) // Yu



// person.lastName = 'Pi'
// console.log(person.lastName) // 自己这个对象里面增加lastName，并不能修改原型上的属性



// 想要修改原型上的属性
// Person.prototype.lastName = "Pi"
// console.log(person.lastName)



// 删除原型上的属性(不行)
delete person.lastName
// console.log(person.lastName)




// function Bus() {  // 2

// }
// Car.prototype = {
//   constructor: Bus
// }

function Car() {

}


var car = new Car()

console.log(car.constructor) // function Car() {}  哪来的？ 自己没有， 那就是从原型上继承来的？
// 看一眼
console.log(Car.prototype) // 能看到浅紫色的constructor，系统自带的
// constructor 指向的是 Car() ，目的是让这Car() 构造出的所有的对象想找他的构造器的时候能找得到
// car.constructor 用来找到我是哪个工厂产出的



// 修改指向   // 2
console.log(car.constructor) // 变了 虽然是系统生成的但我们能改 现在car再找是谁生产的我，就会找错了