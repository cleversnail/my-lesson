const fs = require('fs')
const path = require('path')
const Router = require('koa-router')

// 读取目录和文件
function load(dir, cb) {
  // 获取绝对路径
  const url = path.resolve(__dirname, dir)
  // 读取目录
  const files = fs.readdirSync(url)
  // 遍历
  files.forEach((fileName) => {
    // 去掉扩展名
    fileName = fileName.replace('.js', '')
    const file = require(url + '/' + fileName)
    cb(fileName, file)
  })
}


// 加载路由
function initRouter(app) {
  const router = new Router()
  load('routes', (fileName, routes) => {
    const prefix = fileName === 'index' ? '' : `/${fileName}`
    routes = typeof routes === 'function' ? routes(app) : routes // ++3
    // console.log(routes, '--------')
    Object.keys(routes).forEach(key => {
      const [method, path] = key.split(' ')
      // console.log(method, path, '--------------')
      console.log(`正在映射地址:${method.toLocaleUpperCase()} ${prefix} ${path}`)

      // 注册路由
      // app.get('/', ctx => {})
      // router[method](prefix + path, routes[key]) ++ 4
      router[method](prefix + path, async ctx => { // ++ 4
        app.ctx = ctx
        await routes[key](app)
      })
      // console.log(routes[key])
    })
  })
  return router
}


function initController(app) { // /// ++ 99999
  const controllers = {};
  // 读取控制器目录
  load("controller", (filename, controller) => {
    // 添加路由
    controllers[filename] = controller(app); // 合成到一起 /// ++ 99999
  });
  // console.log(controllers)
  return controllers;
}

function initService() {
  const services = {};
  // 读取控制器目录
  load("service", (filename, service) => {
    // 添加路由
    services[filename] = service;
  });
  return services;
}


const Sequelize = require("sequelize");
function loadConfig(app) {
  load("config", (filename, conf) => {
    if (conf.db) {
      app.$db = new Sequelize(conf.db); //初始化db操作

      // 加载模型
      app.$model = {};
      load("model", (filename, { schema, options }) => {
        app.$model[filename] = app.$db.define(filename, schema, options); //将sequlize的一个个模型全部加载起来
      });
      app.$db.sync(); // 使用sync做一个模块的同步
    }

    if (conf.middleware) { // ++10
      conf.middleware.forEach(mid => {
        const midPath = path.resolve(__dirname, 'middleware', mid)
        app.$app.use(require(midPath))
      })
    }
  });
}

const schedule = require('node-schedule')
function initSchedule() {
  load('schedule', (filename, scheduleConfig) => {
    schedule.scheduleJob(scheduleConfig.interval, scheduleConfig.handler)
  })
}

module.exports = {
  initRouter,
  initController,
  initService,
  loadConfig,
  initSchedule
}



// 测试
// load('routes', fileName => console.log('routes:' + fileName))
// initRouter()
// initController()