const jwt = require('jsonwebtoken')

function sign(option) {
  return jwt.sign(option, '666', {
    expiresIn: 60
  })
}

let verify = (isAdmin) => (ctx, next) => {
  let jwtToken = ctx.req.headers.authorization
  if (jwtToken) {
    jwt.verify(jwtToken, '666', function(err, decoded) {
      if (err) {
        ctx.body = {
          status: 401,
          message: 'token失效'
        }
      } else {
        if (isAdmin) {
          let { admin } = decoded
          if (admin) {
            next()
          } else {
            ctx.body = {
              status: 401,
              message: '你不是管理员!权限不够!'
            }
          }
        } else {
          next()
        }
      }
    });
  } else {
    ctx.body = {
      status: 401,
      message: '请提供token'
    }
  }
}

module.exports = {
  sign,
  verify
}