'use strict';

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    reporters: ['progress'],
    port: 9876,
    colors: false,
    autoWatch: true,
    browsers: ['Chrome', 'Firefox'],
    singleRun: false,

    files: [
      './src/*.js',
      './tests/unit/*.js'],

    webpackMiddleware: {
      noInfo: true
    }
  });
};
