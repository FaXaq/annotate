const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const DotenvPlugin = require("dotenv-webpack");
const env = require('./env')().raw;

module.exports = {
  entry: path.resolve(__dirname, "..", "src", "background-script", "background.ts"),
  mode: env.NODE_ENV === "production" ? "production" : "development",
  plugins: [
    new DotenvPlugin({
      path: path.resolve(__dirname, '..', '.env.' + env.NODE_ENV)
    }),
    new CopyPlugin({
      patterns: [
        "manifest.json"
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['babel-loader'],
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
    filename: "background.js",
    path: path.resolve(__dirname, "..", "build"),
  },
  devServer: {
    devMiddleware: {
      writeToDisk: true
    },
    hot: false
  },
  devtool: "inline-source-map"
}