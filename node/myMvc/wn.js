const koa = require('koa')
const { initRouter, initController, initService, loadConfig, initSchedule } = require('./wn-loader') // ++

class wn {
  constructor(conf) {
    this.$app = new koa(conf)
    // 加载配置项
    loadConfig(this)
    this.$service = initService()
    this.$ctrl = initController(this) /// ++ 99999
    this.$router = initRouter(this)
    this.$app.use(this.$router.routes())

    initSchedule() // ++12
    
  }

  start(port) {
    this.$app.listen(port, () => {
      console.log('wn服务启动成功 端口:' + port)
    })
  }
}
module.exports = wn