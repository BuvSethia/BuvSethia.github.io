let path = require("path");

module.exports = {
  debug: false,
  devtool: 'cheap-eval-source-map',
  noInfo: true,
  entry: {
    app: ["./src/index.js"]
  },
  target: 'web',
  output: {
    path: __dirname + '/src',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    stats: {
      colors: true,
      hash: false,
      version: false,
      timings: false,
      assets: false,
      chunks: false,
      modules: false,
      reasons: false,
      children: false,
      source: false,
      errors: false,
      errorDetails: false,
      warnings: false,
      publicPath: false
    }
  },
  module: {
    loaders: [
      {test: /\.jsx?$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      {test: /(\.css)$/, loaders: ['style', 'css']},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
			{test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.wav$|\.mp3$|\.html$/, loader: 'file-loader?name=[name].[ext]'},
			{test: /\.json$/, loader: 'json-loader'}
    ]
  }
};
