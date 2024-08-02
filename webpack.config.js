const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'), 
    filename: 'bundle.js' ,
  },
  devtool: 'source-map',
  mode: 'development',
  plugins: [new HtmlWebpackPlugin({
    filename: "index.html",
    template: "src/template.html",
    title: "TodoList"
  })],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  }
}