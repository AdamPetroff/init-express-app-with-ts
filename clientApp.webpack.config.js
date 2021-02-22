const path = require("path")

const config = (env) => {
  return {
    mode: env.NODE_ENV,
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
      ],
    },
    devtool: false, // Disabled because the dev result don't work in Deno, not sure if we need it in other scripts
    resolve: {
      ...(env.INCLUDE_SHARED
        ? {}
        : {
            alias: {
              react$: path.resolve(__dirname, "src/dummyModules/react.tsx"),
              "react-dom$": path.resolve(__dirname, "src/dummyModules/react-dom.tsx"),
              "react-dom/server$": path.resolve(__dirname, "src/dummyModules/react-dom-server.tsx"),
              "styled-components$": path.resolve(
                __dirname,
                "src/dummyModules/styled-components.tsx",
              ),
            },
          }),
      extensions: [".ts", ".tsx", ".js", ".jsx", ".mjs"],
    },
    optimization: {
      usedExports: true,
    },
  }
}

module.exports = config
