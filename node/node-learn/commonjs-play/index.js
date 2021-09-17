var playerAction = process.argv[process.argv.length - 1]
const game = require('./lib')

// const result = game(playerAction)
// console.log(result);
// *** 因为游戏结果要统计，进程要长期存在并且让用户输入多次操作

// 获取进程的标准输入
let count = 0
process.stdin.on('data', e => {
  const playerAction = e.toString().trim() //进程的标准输入转化为字符串输出
  const result = game(playerAction)
  console.log(result);

  // 当返回结果为-1的时候要做次数统计
  if (result == -1) {
    count++
  }
  if (count === 3) {
    console.log('你太厉害了，我不玩了');
    process.exit() // 结束进程
  }
})