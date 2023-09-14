module.exports = {
  entry: ["./client/index.js"],
  output: {
    path: __dirname,
    filename: "./public/bundle.js",
  },
  context: __dirname,
  devtool: "source-map",
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /jsx?$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: ["file-loader"],
        type: "asset/resource",
      },
    ],
  },
};
