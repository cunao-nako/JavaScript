let path = require('path');

module.exports = {
  mode: 'development',
  entry: './71_1.js',
  output: {
    filename: 'finish.js',
    path: __dirname,
  },
  watch: true,
};