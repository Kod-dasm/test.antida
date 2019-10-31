const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  publicPath: 'test.antida',
  configureWebpack: {
    devtool: 'source-map',
    plugins: [
      new StyleLintPlugin()
    ]
  }
}
