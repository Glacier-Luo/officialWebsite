const webpack = require('webpack');

module.exports = {
  devServer: {
    port: 8080
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
};
