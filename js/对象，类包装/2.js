// 构造函数 (三段式)
function Student(name, age, sex) {
  // var this = {   // new 带来的这效果   这时候AO: {this: {name: 'jiahao',...}}
        // name: '',
        // age: 
  // }     
  this.name = name
  this.age = age
  this.sex = sex
  this.grade = 2017
  // return this
}

var student = new Student('jiahao', 20, 'boy')
console.log(student)

// 构造函数内部原理：(当被new的时候)
// 1. 在函数体最前面隐式的加上 this = {}
// 2. 执行 this.xxx = xxx
// 3. 隐式的返回this



function Person(name, height) {
  // var this = {}
  this.name = name;
  this.height = height;
  this.say = function() {
    console.log(this.name) // 
  }
  // return this
}

// 当发生 new 时, 就会走隐式三部曲，必须是有 new 的时候才会这样，没new就是正常的函数执行
console.log(new Person('ziChen', 180).name)




// // 那要是这样说的话我们自己创建一个模拟一个构造函数是不是也行？
// function myPerson(name, age) {
//   var that = {}
//   that.name = name;
//   that.age = age
//   return that
// }

// var persion1 = myPerson('wn', 18)
// var persion2 = myPerson('ziChen', 20)
// console.log(persion1, persion2) // 也行！！！但是我们不这样做，因为构造函数还有更深层的东西




// 当构造函数内部显示的 return 出来东西的话，空对象就会影响原正常的隐式return，但是原始值就不会