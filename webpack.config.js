'use strict';

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    reporters: ['progress'],
    port: 9876,
    colors: false,
    autoWatch: true,
    browsers: ['Chrome', 'Firefox'],
    singleRun: false,

    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },

    files: [
      './tests/unit/*.js'],

    webpackMiddleware: {
      noInfo: true
    },
  });
};
