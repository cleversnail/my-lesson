
Car.prototype.height = 1400
Car.prototype.lang = 4900
Car.prototype.carName = 'BMW'

// Car.prototype = {
//   height: 1400,
//   lang: 4900,
//   carName: 'BMW'
// }

// 1
function Car(color, owner) {
  this.owner = owner
  this.color = color
  // this.height = 1400  // 每次创建对象都要执行，耦合高，现在可以把它们提取出来
  // this.lang = 4900
  // this.carName = 'BMW'
}

var car = new Car('red', 'zichen')
var car1 = new Car('green', 'yangyang')

console.log(car.carName)
console.log(car1)

