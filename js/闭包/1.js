function test() {
  var arr = []
  for (var i = 0; i < 10; i++) {

    (function(j) {
      // j = 0
      arr[j] = function() {
        console.log(j)   // 这里为什么能出现0 1 2 3 4 5 6 7 8 9
      }
    })(i)

  }
  return arr
}

var myArr = test()
// myArr[0]()
// myArr[1]()
// ...

for (var j = 0; j < 10; j++) {
  myArr[j]()
}