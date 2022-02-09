const path = require('node:path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand');
const envs = dotenv.config();
dotenvExpand.expand(envs);

// console.log(process.env.NODE_ENV)

function getAppSrc() {
  return path.resolve(process.cwd(), 'src');
}

function resolve(filepath, fileName) {
  return path.resolve(process.cwd(), 'src', filepath, fileName);
}

const isDevMode = /* process.env.DEV_STAGE !== 'production' */ false;

module.exports = {
  mode: isDevMode ? 'development' : 'production',
  entry: {
    index: resolve('ts', 'index.ts'),
  },
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: '[name]-[fullhash:8].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.json', '.js'],
  }, // ВАЖНО
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        include: path.resolve(process.cwd(), 'src'),
        loader: require.resolve('babel-loader'),
        options: {
          presets: ['@babel/env', '@babel/preset-typescript'],
          plugins: [],
        },
      },
      {
        test: /\.scss$/i,
        use: [
          isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({ verbose: true }),
    new CopyPlugin({ patterns: [{ from: 'public', to: 'public' }] }),
    !isDevMode && new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      filename: 'main.html',
      template: resolve('html', 'main.html'),
    }),
  ].filter(Boolean),
  devtool: 'source-map',
  devServer: {
    hot: true,
    open: ['/main.html'],
    compress: true,
    host: 'localhost',
    port: 3003,
    allowedHosts: 'all',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': '*',
    },
    static: {
      directory: path.join(process.cwd(), 'dist'),
      publicPath: '',
      watch: {
        ignored: getAppSrc(),
      },
    },
    client: {
      logging: 'info',
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    devMiddleware: {
      publicPath: '',
      writeToDisk: true,
    },
  },
};
