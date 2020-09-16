/* eslint-disable*/
const MomentLocalesPlugin = require("moment-locales-webpack-plugin");

module.exports = {
  devServer:{
    open:false
  },
  webpackConfig:{
    plugins:[
      new MomentLocalesPlugin()
    ]
  }
};