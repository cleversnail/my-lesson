# 核心打包原理
1. 读到入口文件里的所有内容
2. 分析入口文件，递归的去读取所依赖的模块，生成AST
3. 根据AST，生成浏览器能运行的代码


# 细节
1. 获取模版内容
2. 分析模块 -- @babel/parser
3. 处理模块内容
  - @babel/traverse （遍历AST收集依赖）
  - @babel/core 和 @babel/preset-env （将es6装es5）
4. 递归所有模块
5. 生成代码

` 参考 https://mp.weixin.qq.com/s?__biz=MzU5NDM5MDg1Mw==&mid=2247488134&idx=1&sn=618d7f3664e06478614c3aa1887ba23e&chksm=fe00a8acc97721ba7bf25e28cf4456ba5567383d7be38fb44ee765d53d6d672bee5ca49987bd&scene=178&cur_album_id=1452359350504538119#rd`