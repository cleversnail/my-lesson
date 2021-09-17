const delay = (data, tick) => new Promise(resolve => { // 测试 2
  setTimeout(() => {
    resolve(data)
  }, tick)
})

module.exports = {
  getName() { // 模拟异步方法 1
    return delay('jerry', 1000)
  },
  getAge() { // 模拟同步方法 3
    return 20
  }
}