let path = require('path');

module.exports = {
  mode: 'development',
  entry: './78.js',
  output: {
    filename: 'bundle.js',
    path: __dirname,
  },
  watch: true,
  devtool: "source-map",
};
