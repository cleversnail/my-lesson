// 对象
var mrLei = {
  name: 'LeiLei',
  age: 20,
  sex: 'boy',
  somke: function() {
    console.log('I am smoking! cool!')
    // mrLei.health--
    this.health--
  },
  drink: function() {
    console.log('I am drink')
    // mrLei.health++
    this.health++
  },
  health: 100
}
// mrLei.health++ // 可读可写
// console.log(mrLei.health)


// mrLei.somke()
// mrLei.drink()
// mrLei.drink()
// console.log(mrLei.health)


// mrLei.health--  一般说话不会这么说，会用第一人称


// 增
// mrLei.boyFirend = 'zhiHong'

// 查
// console.log(mrLei.sex)

// 修改
// mrLei.sex = 'girl'
// console.log(mrLei.sex)

// 删除 !!!
delete mrLei.name
delete mrLei.sex
console.log(mrLei.sex) // undefined ?? 
// 当一个访问一个不存在的变量会报错，当访问一个对象中不存在的属性就为undefined (记住这个问题)





// 对象的创建方法
// 1. var obj = {}   plainObject   对象字面量/对象直接量
// 2. 构造函数
          // 1） 系统自带的构造函数  Object()
          // 2) 自定义
    

// 1）
// Object() // 系统自带的工厂，可以批量的生产对象，每一个对象都是独立且一样（就像模具生产工艺品）

// 用一个变量来接受这个工厂生产的对象
// var obj = new Object()  // var obj = {}  // 没有区别
// obj.name = 'wn'
// obj.sex = 'boy'

// 2)
// 重点来了

function Car(color) { // 大驼峰式的命名规则
  this.name = 'BMW' // 让每一个台车一样的名字
  this.height = '1400'
  this.lang = '4900'
  this.weight = 1000

  this.health = 100
  this.run = function() {
    this.health-- // 除了this还能用啥？ 没有
  }
  this.color = color
}
var car = new Car('back')
var car1 = new Car('white')

car.name = '红旗'
car1.name = '劳斯莱斯'

car.run()
console.log(car)
console.log(car1)


// 让用户自己选配颜色   上参数 color
        
