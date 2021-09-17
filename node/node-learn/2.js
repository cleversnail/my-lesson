// 石头剪刀布游戏

// 当我在终端输入 node 2.js rock  (我出石头)    电脑也会自动随机的出一个， 并且输出我们的对战结果

// 1.  console.log(process.argv);  // 输入 node 2.js rock 可以看到打印的数组中有rock


var playerAction = process.argv[process.argv.length - 1]
// console.log(playerAction);

// 电脑随机生成  3个
var random = Math.random() * 3
if (random < 1) {
  var computerAction = 'rock'
} else if (random > 2) {
  var computerAction = 'scissor'  // 剪刀
} else {
  var computerAction = 'paper'
}

// 进行比较
if (computerAction === playerAction) {
  console.log('平局');
} else if ((computerAction === 'rock' && playerAction === 'paper') || (computerAction === 'scissor' && playerAction === 'rock') || (computerAction === 'paper' && playerAction === 'scissor')) {
  console.log('你赢了');
} else {
  console.log('你输了');
}