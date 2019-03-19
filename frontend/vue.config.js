const webpack = require('webpack');

module.exports = {
  pages: {
    index: 'src/project/index/main.js',
    login: 'src/project/login/main.js'
  },
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
