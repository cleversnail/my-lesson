// const app = new (require('koa'))()
// const { initRouter } = require('./wn-loader')
// app.use(initRouter().routes())

// app.listen(3000)


const wn = require('./wn')
const app = new wn()
app.start(3000)