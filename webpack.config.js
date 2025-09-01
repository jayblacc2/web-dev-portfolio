const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = (env) => ({
  mode: env.production ? "production" : "development",
  entry: "./src/index.js",
  output: {
    publicPath: "/", // Required for hot reload to work properly
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true, //clean the dist folder before each build
  },
  optimization: {
    minimize: env.production ? true : false,
    minimizer: env.production
      ? [
          new TerserPlugin({
            parallel: true,
            terserOptions: {
              compress: {
                drop_console: true,
              },
            },
          }),
        ]
      : [],
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 3001,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: env.production
          ? [MiniCssExtractPlugin.loader, "css-loader"]
          : ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp|ico|webp)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[contenthash].[ext]",
              outputPath: "images",
            },
          },
        ],
      },
      {
        test: /\.pdf$/i,
        type: "asset/resource",
        generator: {
          filename: "documents/[name][ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        jjf
      },
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "public", to: "" }],
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    ...(env.production
      ? [
          new ImageMinimizerPlugin({
            minimizer: {
              implementation: ImageMinimizerPlugin.sharpMinify,
              options: {
                encodeOptions: {
                  jpeg: {
                    quality: 85,
                  },
                  webp: {
                    quality: 85,
                  },
                  png: {
                    compressionLevel: 9,
                  },
                },
              },
            },
          }),
        ]
      : []),
  ],
});
