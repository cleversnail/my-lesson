const HtmlWebpackPlugin = require('html-webpack-plugin');

class StampPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap('StampWebpackPlugin',
      (compilation, callback) => {
        // 想办法让自己的plugin能在 HtmlWebpackPlugin 执行的某个时间点上执行
        HtmlWebpackPlugin.getHooks(compilation).beforeAssetTagGeneration.tap('StampWebpackPlugin', 
          (htmlPluginData, cb) => {
            // console.log(htmlPluginData);
            let jsSrc = htmlPluginData.assets.js[0]
            htmlPluginData.assets.js[0] = `${jsSrc}?${new Date().getTime()}`
          }
        )



        // compilation.hooks.buildModule.tap('StampWebpackPlugin',
        //   (data, cb) => {
        //     console.log(data.source);
        //   })
      })
  }
}

// compiler 相当于是webpack的上下文对象


module.exports = StampPlugin