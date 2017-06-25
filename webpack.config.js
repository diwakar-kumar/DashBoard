var webpack = require('webpack');
var path = require('path');  
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ROOT_PATH = path.resolve(__dirname);

var env = process.env.NODE_ENV || 'development';
//var PORT = process.env.PORT || 8080;
//var HOST = '0.0.0.0'; // Set to localhost if need be.
//var URL = `http://${HOST}:${PORT}`

module.exports = {  
  devtool: process.env.NODE_ENV === 'production' ? '' : 'source-map' ,
  entry: [
    path.resolve(ROOT_PATH, 'app/src/index'),
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['react-hot-loader', 'babel-loader']
    },
    {
      test: /\.module\.scss$/,
      loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'sass-loader'
      ]
    },
    {
      test: /\.scss$/,
      exclude: /\.module\.scss$/,
      loaders: ["style-loader", "css-loader", "sass-loader"]
    },
    {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    },
    {
      test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/,
      loader: "url-loader?mimetype=application/font-woff"
    },
    {
      test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/,
      loader: "file-loader?name=[name].[ext]"
    },
    {
      test: /\.(jpg|png)$/,
      loader: 'file?name=[path][name].[hash].[ext]'
    },
    {
      test: /\.svg$/,
      loader: 'babel!svg-react'
    },
    {
      test: /\.json$/,
      loader: 'json'
    }
   /*{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: process.env.NODE_ENV === 'production' ? [] : ['eslint-loader'],
      include: path.resolve(ROOT_PATH, './app') 
    }*/]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
      alias: {
      actions: path.resolve(ROOT_PATH, 'app/src/actions'),
      utils: path.resolve(ROOT_PATH, 'app/src/utils'),
      reducers: path.resolve(ROOT_PATH, 'app/src/reducers'),
      store: path.resolve(ROOT_PATH, 'app/src/stores'),
      components: path.resolve(ROOT_PATH, 'app/src/components'),
      containers: path.resolve(ROOT_PATH, 'app/src/containers'),
      constants: path.resolve(ROOT_PATH, 'app/src/constants'),
      pages: path.resolve(ROOT_PATH, 'app/src/pages')
    },
  },
  output: {
    path: process.env.NODE_ENV === 'production' ? path.resolve(ROOT_PATH, 'app/dist') : path.resolve(ROOT_PATH, 'app/build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(ROOT_PATH, 'app/build'),
    historyApiFallback: true,
    hot: true,
    inline: true,
    //host: HOST,
    //port: PORT
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlwebpackPlugin({
      title: 'Listlogs'
    })
  ]
};