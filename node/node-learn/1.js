console.log('hello world');

console.log(Date);
console.log(Math);

console.log(setTimeout);
console.log(setInterval);
// console.log(requestAnimationFrame);  // 浏览器运行的下一帧，因为不是浏览器环境，所以不存在
console.log(setImmediate);

// 做文件操作时非常有用
console.log(__filename);  // 当前所运行的脚本所在位置
console.log(__dirname);   // 当前所运行的脚本所在目录位置

// 进程对象
console.log(process); // 当前运行的这个进程的详细信息  例如： version: node版本  
// platform: 运行环境的操作系统  hrtime: 运行时间  env：node运行的环境的环境变量  
// argv：用户在启动这个node进程的时候使用的命令（可以设置）