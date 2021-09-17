1. 创建routes文件夹 > index.js + user.js
2. 创建 wn-loader
3. app.js
4. wn.js + app.js

# controller 层的自动加载
5. 创建controller  > home.js 
6. routes > index.js 修改（想要的效果）
7. wn-loader.js 添加  initController（）     wn.js ++1   ++2   wn-loader.js中的initRouter（）中添加 ++3 

# 实现service层
8. 创建service文件夹 > user.js ...
9. routes > user.js 修改
10. 要出现$service , 到wn-loader.js 中添加initService（）， 
11. routes > user.js 修改写法，
12. wn-loader.js 中修改路由 ++4
13. wn.js 中挂载 $service
14. http://localhost:3000/user/detail 查看结果


# 实现model层
15. 创建 config文佳夹  > index.js
16. wn-loader.js 中添加数据库操作步骤， loadConfig()
17. 安装 npm i sequelize
18. 创建 model文件夹 > user.js
19. wn-loader.js 添加  (// 加载模型)
20. wn.js 中调用 loadConfig()
21. 安装 mysql2
22. 实验是否成功 home.js  ++ 5    


# 中间件的加载
先解决遗留问题，wn-loader.js > /// ++ 99999
wn.js /// ++ 99999
23. 创建middleware文件夹 > logger.js
24. wn-loader.js 中添加 ++ 10
25. http://localhost:3000/user  看控制台能看到中间件的加载时间



# 定时任务
26. 创建schdule文件夹 > log.js   user.js
27. https://www.cnblogs.com/cuiqq/p/10961478.html (cron定时任务基本都会用到)
28. wn-loader.js 中添加 ++ 11
29. wn.js 加载 initSchedule  ++ 12
