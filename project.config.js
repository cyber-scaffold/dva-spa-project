/* eslint-disable*/
const MomentLocalesPlugin = require("moment-locales-webpack-plugin");

module.exports = {
  devServer:{
    port:7000,
    open:false
  },
  webpackConfig:{
    plugins:[
      new MomentLocalesPlugin()
    ]
  }
};