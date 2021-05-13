let path = require('path');

module.exports = {
  mode: 'development',
  entry: './import.js',
  output: {
    filename: 'bundle.js',
    path: __dirname,
  },
  watch: true,
}