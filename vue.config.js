'use strict'
const port = 19528
module.exports = {
  outputDir: 'dist',
  assetsDir: 'static',
  indexPath: 'index.html',
  filenameHashing: true,
  lintOnSave: true,
  devServer: {
    port
  }
}
