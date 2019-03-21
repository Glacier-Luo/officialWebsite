const webpack = require('webpack');

module.exports = {
  devServer: {
    port: 8000
  },
  chainWebpack: config => {
    config
      .plugin('provide')
      .use(webpack.ProvidePlugin, [{
          $: 'jquery',
          jquery: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery'
      }]);
  },
}