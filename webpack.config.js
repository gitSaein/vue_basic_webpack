const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
        ],
      },
      {
        test: /\.jpe?g$/,
        use: [
          {loader: 'url-loader', options: {
            limit: 1000,
          }},
          {loader: 'file-loader'},
        ],
      },
    ],
  },
};
