const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  configureWebpack: {
    devtool: 'source-map',
    plugins: [
      new StyleLintPlugin()
    ]
  }
}
