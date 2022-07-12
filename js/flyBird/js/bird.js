var bird = {
  flyTimer: null, // 小鸟下落的定时器
  wingTimer: null, // 煽动翅膀的定时器

  div: document.createElement('div'),
  showBird: function(parentObj) {
    this.div.style.width = '40px'
    this.div.style.height = '28px'
    this.div.style.backgroundImage = 'url(img/bird0.png)'
    this.div.style.backgroundRepeat = 'no-repeat'
    this.div.style.position = 'absolute'
    this.div.style.left = '50px'
    this.div.style.top = '200px'
    this.div.style.zIndex = '1'
    
    parentObj.appendChild(this.div)
  },
  fallSpeed: 0, // 小鸟下落的速度
  flyBird: function() {

    bird.flyTimer = setInterval(fly, 60)

    function fly() {
      bird.div.style.top = bird.div.offsetTop + bird.fallSpeed++ + 'px'
      if (bird.div.offsetTop >= 395) {
        clearInterval(bird.flyTimer)
        clearInterval(bird.wingTimer)
        bird.fallSpeed = 0
      }
      if (bird.fallSpeed > 12) {
        bird.fallSpeed = 12
      }
      if (bird.div.offsetTop <= 0) {
        bird.div.style.top = '0px'
        bird.fallSpeed = 2
      }

    }

  },
  wingWave: function() { // 控制翅膀摆动
    var up = ['url(img/up_bird0.png)', 'url(img/up_bird1.png)']
    var down = ['url(img/down_bird0.png)', 'url(img/down_bird1.png)']
    var i = 0, j = 0;
    bird.wingTimer = setInterval(wing, 120)
    function wing() {
      if (bird.fallSpeed > 0) { // 下落
        bird.div.style.backgroundImage = down[i++]
        if (i === 2) { i = 0 } 
      }
      if (bird.fallSpeed < 0) { // 上升
        bird.div.style.backgroundImage = up[j++]
        if (j === 2) { j = 0 } 
      }
    }
  }
}


