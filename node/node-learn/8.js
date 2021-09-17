// 异步回调
function interview(callback) {
  setTimeout(() => {
    // callback('success')
    if (Math.random() < 0.8) { // 2
      callback('success')
    } else {
      throw new Error('fail')
    }
  }, 500)
}

// try { // 2
  interview(function() {
    console.log('smile');
  })
// } catch(e) {
//   console.log('cry', e);
// }



// node.js异步编程的回调函数规范
// 第一个参数是error， 后面的参数才是结果

// 2
// 报错，并没有被try catch 抓取到，反而是去到了node全局，在nodejs里面造成全局错误是很严重的事情，会导node的程序直接崩溃
// node中，如果throw new Error('fail')不直接写在try catch里面，就不会被抓取到
// 为什么会这样呢？因为nodejs的事件循环，每次循环都会启动一个全新的调用栈setTimeout是在另一个事件循环里面回调的，一个全新的调用栈，所以错误会抛到全局