// TODO: resolve @ alias
// TODO: plugins
const path = require('path');
const nodeExternals = require('webpack-node-externals');


module.exports = {
  // https://github.com/liady/webpack-node-externals#quick-usage
  target: 'node',
  externals: [nodeExternals()],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader'
      }
    ]
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
};