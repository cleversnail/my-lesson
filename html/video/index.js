// 监听鼠标在speed容器上的移动
// 获取到鼠标在y轴上的移动距离

var speed = document.querySelector('.speed')
var bar = document.querySelector('.speed-bar')
var video = document.querySelector('.flex')

// console.log(speed);

speed.addEventListener('mousemove', function(e) {
  // console.log(speed.offsetHeight); // offsetTop获取某dom结构到浏览器顶部的距离
  // console.log(e.pageY);
  var y = e.pageY - speed.offsetTop
  var percent = y / speed.offsetHeight // offsetHeight获取某dom结构自身的高度
  var height = Math.round(percent * 100) + '%'
  var min = 0.4
  var max = 4
  var playbackRate = percent * (max - min) + min

  // 设置speed-bar的高度
  bar.style.height = height
  bar.textContent = playbackRate.toFixed(2) + 'x'

  // 控制视频播放速度
  video.playbackRate = playbackRate
})