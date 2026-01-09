const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const Dotenv = require("dotenv-webpack");

// Define config object for HTML templating
const config = {
  name: process.env.PORTFOLIO_NAME || "Portfolio",
  url: process.env.PORTFOLIO_URL || "https://web-dev-portfolio-brown.vercel.app/",
  ogImage: process.env.OG_IMAGE_URL || "/images/og-preview.jpg",
  linkedin: process.env.LINKEDIN_URL,
  github: process.env.GITHUB_URL,
  email: process.env.EMAIL,
};

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
    port: 3010,
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
    new Dotenv({
      systemvars: true, // Load system environment variables as well (for deployment platforms)
      safe: false, // Don't require .env.example file
      defaults: false, // Don't load .env.defaults
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      config: config, // Pass config to HTML template
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
      },
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "public", to: "", globOptions: { ignore: ["site.webmanifest"] } },
        {
          from: "src/site.webmanifest",
          to: "site.webmanifest",
          transform(content) {
            // Replace placeholders with config values
            return content
              .toString()
              .replace(/{{PORTFOLIO_NAME}}/g, config.name || "Portfolio")
              .replace(/{{PORTFOLIO_URL}}/g, config.url || "/")
              .replace(/{{THEME_COLOR}}/g, "#5462ffe4");
          },
        },
      ],
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
