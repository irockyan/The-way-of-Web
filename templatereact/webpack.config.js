//Todo:将配置文件分成base,dev,build等几个选项

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map', //配置生成Source Maps，选择合适的选项
  entry: __dirname + "/app.js",
  output: {
    path: __dirname + "/dist",
    filename: "[name]-[hash].js"
  },

  module: {
    loaders: [{
      test: /\.json$/,
      loader: "json"
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style', 'css?modules!postcss')
    }]
  },
  postcss: [
    require('autoprefixer')
  ],

  plugins: [
    new HtmlWebpackPlugin({}),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin("[name]-[hash].css")
  ],

  devServer: {
    contentBase: "", //本地服务器所加载的页面所在的目录
    colors: true, //终端中输出结果为彩色
    historyApiFallback: true, //不跳转
    inline: true //实时刷新
  }
}