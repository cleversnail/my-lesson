# node.js是一个基于chrome v8引擎的一个js运行环境
# node.js使用一个事件驱动，非阻塞式的IO模型使其轻量又高效

1. 认识node中的api    --1.js

2. node实现石头剪刀布游戏   --2.js

3. CommonJS      --commonjs
  - 通常<script/> 有src属性，浏览器会加载src，如果没有src属性，浏览器会自动执行这段js
  - 脚本变多，需要手动管理加载顺序
  - 不同脚本之间通信，需要通过全局变量的方式（全局变量终将越来越多）
  - 如果没有html文件怎么办？node中没有html，不得不需要一个模块管理的机制（commonjs）

  1) require
  2) exports
  3) exports导出的应用跟index.js里面的lib是同一个引用
  4) module.exports

4. 通过commonjs来改造石头剪刀布的游戏   --commonjs-play
让电脑有点情绪，要是连续输给我们3次，它就杀死当前的进程
  - 改造游戏加 return
  把游戏逻辑封装到子模块里面去，更方便的对游戏的主逻辑进行扩展


5. npm 是什么   -- npm
    - node.js的包管理工具

  包是什么
    - 别人写的node.js模块

  创建npm目录，npm init, 
  先安装npm install glob
  再删除node_modules
  再npm install
  不想要某个包  npm uninstall glob
  cnpm

6. node.js内置模块 

7. Node.js 非阻塞I/O

 ---- 食堂吃饭，餐厅吃饭

 - I/O 即 Input/Output, 一个系统的输入和输出
 - 阻塞I/O 和 非阻塞I/O 的区别就在于系统接收输入再到输出的期间，还能不能接收其他输入
 - 系统 = 食堂阿姨/服务生， 输入=点菜， 输出=端菜
 - 饭堂阿姨只能一份一份打 --> 阻塞I/O
 - 服务生点完菜之后还可以服务其他客人  --> 非阻塞I/O

 ---- 小芳洗衣服20分钟，扫地10分钟，整理书桌10分钟，晾衣服5分钟，多久能出门？

    代码里面体现 非阻塞I/O  -- IO
    npm install glob
    

<!-- 8. 异步编程之callback -->

19. 简单实现一个http服务
