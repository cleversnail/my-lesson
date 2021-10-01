# plugin 是什么？
1. 一个具名函数
2. 会在webpack的某一个生命周期执行
3. 它原型上有一个apply方法
4. 


compiler   webpack编译的上下文

hooks   钩子

常见的生命周期钩子：
entryOption：webpack读取完entry（入口文件）后调用
afterPlugins：设置完初始化内部插件之后
compilation：编译这件事被创建时，生成文件前
done：编译完成之后
emit：生成资源到output目录之前


webpack提供三种触发钩子的方法：
tap：以同步的方式触发钩子
tapAsync：以异步的方式触发钩子
tapPromise：以异步的方式触发钩子，返回Promise
