const http = require('http')
const fs = require('fs') // 3

http.createServer(function(req, res) {
  if (req.url == '/favicon.ico') { // 2
    res.writeHead(200)
    res.end()
    return 
  }
  // console.log(req.url);
  res.writeHead(200)
  // res.end('hello')
  fs.createReadStream(__dirname + '/index.html').pipe(res) // 把文件直接当作响应返回
})
.listen(3000)