const webpack = require("webpack")
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const shared = require("./webpackShared")

module.exports = {
  node: {
    dgram: "empty",
    fs: "empty",
    net: "empty",
    tls: "empty",
    child_process: "empty",
  },
  module: {
    rules: [
      shared.rules.js,
      shared.rules.html,
      shared.rules.standardCss,
    ],
  },
  resolve: shared.resolve,
  plugins: [
    new HtmlWebPackPlugin({
      template: process.env.BRAND
        ? `./brands/${process.env.BRAND}/public/index.html`
        : "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].css",
    }),
  ],
  devServer: {
    proxy: {
      "/api": "http://localhost:8006",
    },
    contentBase: ["./public"],
    historyApiFallback: {
      // Paths with dots should still use the history fallback.
      // See https://github.com/facebookincubator/create-react-app/issues/387.
      disableDotRule: true,
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
    },
    watchOptions: {
      ignored: [".git", ".idea", ".vscode", "node_modules"],
    },
  },
  output: {
    publicPath: "/",
    filename: "[name].[contenthash].js",
    devtoolModuleFilenameTemplate: "/[absolute-resource-path]",
  },
}
