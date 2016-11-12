import webpack from 'webpack';
import path from 'path';

export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './src/index'
  ],
  target: 'web',
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './src'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
            { test: /\.js$/, include: path.join(__dirname, 'src'), loaders: [ 'babel' ] },
            { test: /(\.css)$/, loaders: [ 'style', 'css' ] }
    ]
  }
};
