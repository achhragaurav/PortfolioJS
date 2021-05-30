const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./scripts/main.js",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};
