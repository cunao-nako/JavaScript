let path = require('path');

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    filename: 'main.js',
    path: __dirname,
  },
  watch: true,
  
}