// 构造函数
function Student(name, age, sex) {
  // var this = {
        // name: '',
        // age: ''
  // }
  this.name = name
  this.age = age
  this.sex = sex
  this.grade = 2017
  return []
  // return this
}

var student = new Student('jiahao', 22, 'boy')
// console.log(student)



function Person(name, age) {
  var that = {}
  that.name = name
  that.age = age
  return 123
}

var person = Person('wn', 18)
console.log(person)