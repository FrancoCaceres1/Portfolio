import path from "path";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import ImageminWebpWebpackPlugin from "imagemin-webp-webpack-plugin";

const __dirname = path.resolve();

export default {
  entry: "./src/main.jsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "src/assets/images",
          to: "images",
          globOptions: {
            dot: true,
            gitignore: true,
            ignore: ["*.png"],
          },
        },
      ],
      overrideExtension: true,
    }),
    new ImageminWebpWebpackPlugin({
      config: [
        {
          test: /\.(png)/,
          options: {
            quality: 100,
          },
        },
      ],
      overrideExtension: true,
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
