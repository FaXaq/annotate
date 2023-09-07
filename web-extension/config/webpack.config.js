const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const DotenvPlugin = require("dotenv-webpack");

module.exports = {
  entry: path.resolve(__dirname, "..", "src", "index.tsx"),
  mode: "production",
  plugins: [
    new DotenvPlugin({
      path: path.resolve(__dirname, '..', '.env.' + process.env.NODE_ENV)
    }),
    new CopyPlugin({
      patterns: [
        "manifest.json"
      ]
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              compilerOptions: { noEmit: false },
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        // More information here https://webpack.js.org/guides/asset-modules/
        type: "asset",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "content.js",
    path: path.resolve(__dirname, "..", "build"),
  },
  devServer: {
    devMiddleware: {
      writeToDisk: true
    }
  }
}