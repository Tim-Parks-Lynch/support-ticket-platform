module.exports = {
  entry: ["./client/src/index.js"],
  output: {
    path: __dirname,
    filename: "./public/bundle.js",
  },
  context: __dirname,
  // devtool: "source-map",
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
    ],
  },
};
