// 包装类

// 首先， 原始值是不能有属性和方法的，属性和方法只有对象才能有，这是对象独有的东西
// var num = 123
// num.abc = 'aaa'

// var num = new Number(123)
// num.abc = 'aaa'
// console.log(num.abc)
// console.log(num*2)
// num 参与运算后又变回数字了，不参与运算它还能当作对象来使，能有属性能有方法，同理字符串布尔也一样
// 但是undifined和null不行



// ？ 
var str = 'abcd'
// str.length ? 为什么？？？？说好的。。。。。

// 再看
var num = 4
num.len = 3
console.log(num.len) // 既然不能有，就应该报错，为什么不报错？不能用属性还硬能加属性，这是为什么



// 包装类
// 在原始值调用属性的时候，首先它自己不能有，但是他会隐式的发生一个过程
var num = 4

num.len = 3
// new Number(4).len = 3  // 先建一个数字对象，用数字对象来弥补当前的不足，紧接着电脑一看不对劲，你是原始值，赶紧又delete 掉len

// 电脑看到这个num.len的时候它又心软了又去执行 new Number(4).len
console.log(num.len) 


// 以上这个隐式的过程就叫做包装类


// 考点
var arr = [1, 2, 3, 4, 5]
arr.length = 2
console.log(arr) // [1, 2]
var str = 'abcd'
// 其实str是没有length属性的但是系统回隐式的包装类
// new String('abcd').length = 2;  delete
str.length = 2

console.log(str) // abcd 为什么？
// 那么
console.log(str.length) // 4 ????
// new String('abcd').length  这是字符串对象，它就是有length属性的



// 面试题
var str = 'abc'
str += 1    // 'abc1'
var test = typeof(str)  // "String"
if (test.length == 6) { // 能走进来
  test.sign = 'typeOf的返回结果可能为String' // test上面被附一个sign的值，但是
  // new String(test).sign = 'xxx'   delete
}
// 访问的时候又 new String(test).sign  没有值
console.log(test.sign) 