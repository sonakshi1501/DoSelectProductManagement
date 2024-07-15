const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const { DefinePlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PROXY_URI = process.env.VSCODE_PROXY_URI;

const getWebSocketURL = (port) => {
  if (!PROXY_URI) return "ws://0.0.0.0:3000/ws";
  const proxyURL = PROXY_URI.replace("{{port}}", port);
  wsURL = proxyURL.replace("http", "ws");
  return wsURL + "ws";
};

function getBasePath(port) {
  if (PROXY_URI) {
    const proxyURL = PROXY_URI.replace("{{port}}", port);
    const intermediatePath = proxyURL.split("//")[1];
    const desiredPath = intermediatePath.substring(
      intermediatePath.indexOf("/")
    );
    return JSON.stringify(desiredPath);
  } else {
    return JSON.stringify("/");
  }
}

module.exports = {
  entry: { main: path.resolve(__dirname, "src", "index.js") },

  output: {
    filename: "js/[name].js",
    clean: true,
    path: path.resolve(__dirname, "build"),
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192, // Files smaller than 8kb will be inlined as base64 URIs
              name: "[path][name].[ext]", // Preserve original file name and path
              outputPath: "images/", // Specify output directory for images
              publicPath: "images/", // Specify public URL for images
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new DefinePlugin({
      BASE_PATH: getBasePath(3000),
      PROXY_URI: JSON.stringify(PROXY_URI),
    }),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],

  devServer: {
    port: 3000,
    historyApiFallback: true,
    allowedHosts: "all",
    client: {
      logging: "error",
      webSocketURL: getWebSocketURL(3000),
    },
  },

  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};
