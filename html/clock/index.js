// 获取到秒针的dom结构
const secondHand = document.querySelector('.second-hand')
const minsHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

// console.log(secondHand, minsHand, hourHand);
function setDate() {
  const now = new Date()

  // 获取到当前的秒
  const seconds = now.getSeconds()  // 30
  const secondsDegrees = ((seconds / 60) * 360) + 90
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`

  // 获取到当前的分
  const mins = now.getMinutes() // 10
  const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`

  // 获取到当前的时
  
}

setInterval(setDate, 1000) // 每隔一秒重新调用一次setDate

setDate()