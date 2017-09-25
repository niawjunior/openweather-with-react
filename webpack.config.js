module.exports = {
  entry: ['babel-polyfill', './app/index.js'],
  output: {
    path: './build',
    // if the above line does not work, try `path: __dirname + '/build'`
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    port: 3000,
    contentBase: './build',
    inline: true
  }
}
