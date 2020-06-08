const HtmlwebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
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
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader", "postcss-loader",
            ],
        },
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "./src/css/tailwind.css",
        chunkFilename: "tailwind.css"
      }),
      new HtmlwebPackPlugin({
      template: "./templates/frontend/index.html",
      filename: "./index.html"
    }),
  ]
};
