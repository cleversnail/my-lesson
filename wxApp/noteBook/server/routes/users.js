const router = require('koa-router')()
const userService = require('../controllers/mySqlConfig')

router.prefix('/users')

// 定义登录的接口
router.post('/userLogin', async(ctx, next) => {
  // 拿到前端给我的参数 
  let _username = ctx.request.body.username
  let _userpwd = ctx.request.body.userpwd
  // console.log(_username, _userpwd);
  // 去数据库里面匹配
  await userService.userLogin(_username, _userpwd)
  .then(res => {
    // console.log(res);
    let r = '';
    if (res.length) {
      r = 'ok'
      let result = {
        id: res[0].id,
        nickname: res[0].nickname,
        username: res[0].username
      }
      ctx.body = {
        code: 200,
        data: result,
        mess: '登录成功'
      }
    } else {
      r = 'error'
      ctx.body = {
        code: '80004',
        data: r,
        mess: '账号或密码错误'
      }
    }
  })
  .catch(err => {
    ctx.body = {
      code: '80002',
      data: err
    }
  })
})

// 注册
router.post('/userRegister', async (ctx, next) => {
  let _username = ctx.request.body.username
  let _userpwd = ctx.request.body.userpwd
  let _nickname = ctx.request.body.nickname
  // console.log(_username, _userpwd, _nickname);
  if (!_username || !_userpwd || !_nickname) {
    ctx.body = {
      code: '80001',
      mess: '用户名密码和昵称不能为空'
    }
    return
  }
  // 判断当前前端传过来的username是否已经注册过
  await userService.findUser(_username).then(async (res) => {
    // console.log(res);
    if (res.length) {
      ctx.body = {
        code: '80003',
        mess: '账号已存在'
      }
    } else {
      await userService.insertUser([_username, _userpwd, _nickname]).then((res)=>{
        console.log(res);
        let r = ''
        if (res.affectedRows !== 0) {
          r = 'ok'
          ctx.body = {
            code: 200,
            data: r,
            mess: '注册成功'
          }
        } else {
          r = 'error'
          ctx.body = {
            code: '80001',
            data: r,
            mess: '注册失败'
          }
        }
      })
    }
  })

})

// 根据类型查找对应文章列表
router.post('/findNoteListByType', async(ctx, next) => {
  let note_type = ctx.request.body.note_type
  // console.log(note_type);
  await userService.findNoteListByType(note_type).then(res => {
    // console.log(res);
    let r = ''
    if (res.length) {
      r = 'ok'
      ctx.body = {
        code: 200,
        data: res,
        mess: '查找成功'
      }
    } else {
      r = 'error'
      ctx.body = {
        code: '80004',
        data: r,
        mess: '查找失败'
      }
    }
  })
})

// 根据id查找对象的文章详情
router.post('/findNoteDetailById', async(ctx, next) => {
  
})

// 发布笔记
router.post('/publishNote', async(ctx, next) => {
  
  await userService.insertNote()
})

module.exports = router
