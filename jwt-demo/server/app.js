const Koa = require('koa')
const userRouter = require('./routes/user')
const cors = require('koa2-cors')
const bodyParser = require('koa-bodyparser');

const app = new Koa()
app.use(bodyParser());

app.use(cors({
  origin: function (ctx) {
    if (ctx.url === '/test') {
      return false;
    }
    return 'http://localhost:3000';
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));
app.use(userRouter.routes(), userRouter.allowedMethods())

app.listen(3001, () => console.log('服务已在3001端口启动'))

