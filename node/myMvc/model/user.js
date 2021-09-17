//sequelize 模型
const { STRING } = require("sequelize"); 
module.exports = { // 模型分两项，所以要分别加载
  schema: {
    name: STRING(30)
  },
  options: {
    timestamps: false
  }
};