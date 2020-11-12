const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');

// npx webpack --config webpack.config.js
module.exports = {
  mode: 'development',
  entry: {
    js1: './src/11.mjs',
    js2: './src/21.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(js|mjs|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),  // will clean dist before build
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }), // will generated dist/index.html and insert bundle.js into it
    new CopyWebpackPlugin({
      patterns: [
        { from: 'static', to: 'static' },
      ],
    }),
    new ESLintWebpackPlugin({
      extensions: ['js','mjs','jsx'],
    }),
  ],

  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: false, // faster
    port: 8080,

    // experimental feature
    hot: false, // add a line "module.hot.accept();" not always work as expected
    // together with eslint, not always work as expected
    overlay: true,
  },


};

