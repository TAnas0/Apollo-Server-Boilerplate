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
  devtool: "#source-map",

  module: {
    rules: [
      // https://github.com/webpack-contrib/eslint-loader
      {
        test: /\.(js)$/,
        loader: "eslint-loader",
        enforce: "pre",
        include: [
          path.resolve(__dirname, "src"),
          path.resolve(__dirname, "test"),
        ],
        options: {
          formatter: require("eslint-friendly-formatter"),
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: "graphql-tag/loader",
      },
    ],
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  plugins: [
    // HMR should never be used in production
    new webpack.HotModuleReplacementPlugin(),
  ],

  optimization: {
    // namedModules: true, // Not set, since used in dev mode and not in pro
    noEmitOnErrors: true,
  },
}