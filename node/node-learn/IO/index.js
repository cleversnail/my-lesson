const glob = require('glob')  // glob 可以把我们目录下所有的文件递归的获取到

// // 阻塞I/O的调用方式
// var result = null

// // console.time('glob')
// result = glob.sync(__dirname + '/**/*') // /**/*目录通配符
// // console.timeEnd('glob') // 12ms,不能忍受

// console.log(result); // 这个过程的node是干不了别的事的



// 非阻塞I/O的调用方式
var result = null
console.time('glob')
glob(__dirname + '/**/*', function(err, res) {
  result = res;
  // console.log(result);
  console.log('got result');
})
console.timeEnd('glob')
console.log(1 + 1);


