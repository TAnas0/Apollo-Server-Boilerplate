// TODO: resolve @ alias
// TODO: plugins
// TODO: Depending on mode: Last part in here https://webpack.js.org/concepts/mode/

const path = require("path")
const webpack = require("webpack")
const nodeExternals = require("webpack-node-externals")

module.exports = {
  // https://github.com/liady/webpack-node-externals#quick-usage
  target: "node",
  externals: [nodeExternals()],

  // Change this if you want to keep your code confidential
  // See: https://blog.scottlogic.com/2017/11/01/webpack-source-map-options-quick-guide.html
  devtool: "source-map",

  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: "graphql-tag/loader",
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".tsx", ".ts", ".js"],
  },

  plugins: [
    // HMR should never be used in production
    new webpack.HotModuleReplacementPlugin(),
    // https://github.com/lorenwest/node-config/wiki/Webpack-Usage
    new webpack.DefinePlugin({ CONFIG: JSON.stringify(require("config")) }),
  ],

  optimization: {
    // namedModules: true, // Not set, since used in dev mode and not in pro
    emitOnErrors: false,
  },
}
