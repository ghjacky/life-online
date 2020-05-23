'use strict'
const path = require('path')
const defaultSetting = require('./src/setting')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  name: defaultSetting.site,
  context: __dirname,
  entry: {
    app: './src/main.js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.scss'],
    alias: {
      '~': __dirname,
      '@': resolve('src')
    }
  },
  module: {
    rules: [{
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        'style-loader',
        // Translates CSS into CommonJS
        'css-loader',
        // Compiles Sass to CSS
        'sass-loader'
      ]
    }]
  }
}
