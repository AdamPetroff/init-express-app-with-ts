const path = require("path")
const MONACO_DIR = path.resolve(__dirname, "./node_modules/monaco-editor")

module.exports = {
  rules: {
    js: {
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
      },
    },
    html: {
      test: /\.html$/,
      use: [
        {
          loader: "html-loader",
          options: { minimize: true },
        },
      ],
    },
    standardCss: {
      test: /\.css$/,
      use: [
        "style-loader",
        // "css-modules-typescript-loader",
        {
          loader: "css-loader",
          options: {
            importLoaders: 1,
            modules: true,
          },
        },
      ],
      include: /\.module\.css$/,
      exclude: MONACO_DIR,
    },
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src"),
    },
    mainFields: ["browser", "main", "module"],
    extensions: [".ts", ".tsx", ".js", ".jsx", ".mjs"],
  },
}
