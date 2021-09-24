"use strict";

const loaderUtils = require("loader-utils");

function loader(content) {

  var publicPath = "a";

  console.log('进入了loader内部', content);
  console.log(loaderUtils.getOptions(this));

  // return `${publicPath};`;
  return content
}

module.exports = loader;