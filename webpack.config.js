const path = require('path');

module.exports = {
  entry: './server/server.js',
  devtool: 'eval-module-source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  }
};


