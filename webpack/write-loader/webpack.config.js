const path = require('path');
//path是node.js的一个模块，提供了一些用于处理文件路劲的小工具
module.exports = {
  mode: 'development',
  entry: {
    main: "./index.js"//入口起点(entry point)指示 webpack 应该使用哪个模块，来作为构建其内部依赖图的开始。进入入口起点后，webpack 会找出有哪些模块和库是入口起点（直接和间接）依赖的
  },
  resolve: {
  },
  module: {
    rules: [
      {
        test: /\.js$/,//通过loader来预处理文件 允许你打包除了js之外的任何静态资源
        use: [
          {
            loader: path.resolve('./loader-util.js'),
            options: {
              name: 'wn'
            }
          }
        ]
      },
    ]
  },
  plugins: [

  ]

}