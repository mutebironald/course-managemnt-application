const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

process.env.NODE_ENV = "development";

module.exports = {
  mode: "development", //sets enviroment to dev, disables prod only features. node runs in dev
  target: "web", //if we wanted our app to run in node, node would be the target.
  devtool: "cheap-module-source-map", //helps in debugging, source maps let us see our original code in the browser. ( code is traspiled/minified with babel at runtime)
  entry: "./src/index", //this is the entry point of our app.
  output: {
    path: path.resolve(__dirname, "build"), //resolves to this path, though webpack resolves o memory in development
    publicPath: "/", //public url of the build directory above when its referenced in browser
    filename: "bundle.js"
  },
  devServer: {
    stats: "minimal", //reduces info written on command line
    overlay: true,
    historyApiFallback: true, //means all requests will be sent to index.html. Helps us load deep links and they can all be handled by react router
    /**
     * necessary due to issue running latest vaersion of webpack with chrome.
     */
    disableHostCheck: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    https: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html", //location of your template
      favicon: "src/favicon.ico" //location of favicon
    })
  ],
  module: {
    rules: [
      //rules help us inform webpack of the files to handle
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      },
      {
        test: /(\.css)$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
