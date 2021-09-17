const router = require('koa-router')()
const jwt = require('../utils/jwt')

router.post('/user/signin', (ctx) => {
  let user = ctx.request.body
  // 模拟数据库检验
  if (1) {
    console.log(user);
    let jwtToken = jwt.sign({id: '1023', username: ctx.request.body.username, admin: true})
    console.log(jwtToken);
    ctx.body = {
      code: 0,
      data: 'success',
      token: jwtToken
    }
  } else {
    ctx.body = {
      code: 1,
      data: '用户名或密码错误'
    }
  }
})

router.post('/user/home', jwt.verify() , (ctx) => {
  try {
    ctx.body = {
      code: 0,
      data: "got home page"
    }
  } catch (error) {
    ctx.body = {
      code: 1,
      data: error
    }
  }
})

module.exports = router