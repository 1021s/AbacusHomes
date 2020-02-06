const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  entry: {
    vendors: ['styled-components'],
    mc: path.resolve(__dirname, 'client', 'src', 'index.js'),
  },
  optimization: {
    runtimeChunk: {
      name: 'vendors',
    },
    splitChunks: {
      cacheGroups: {
        commons: {
          test: 'vendors',
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  output: {
    path: path.resolve(__dirname, 'client', 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        ],
      },
    ],
  },
  mode: 'production',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: 'babel-plugin-styled-components',
};

// const path = require('path');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// module.exports = {
//   entry: {
//     vendor: ['styled-components'],
//     main: path.resolve(__dirname, 'client', 'src', 'index.js'),
//   },
//   optimization: {
//     minimize: true,
//     minimizer: [new UglifyJsPlugin(
//       {
//         include: /\.min\.js$/,
//       },
//     )],
//     runtimeChunk: {
//       name: 'vendor',
//     },
//     splitChunks: {
//       cacheGroups: {
//         commons: {
//           // test: /[\\/]node_modules[\\/]/,
//           test: 'vendor',
//           name: 'vendor',
//           chunks: 'all',
//         },
//       },
//     },
//   },
//   output: {
//     path: path.resolve(__dirname, 'client', 'dist'),
//     filename: '[name].bundle.js',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: [
//           {
//             loader: 'babel-loader',
//             options: {
//               presets: ['@babel/preset-env', '@babel/preset-react'],
//             },
//           },
//         ],
//       },
//     ],
//   },
//   mode: 'production',
//   resolve: {
//     alias: {
//       'styled-components': path.resolve(__dirname, 'node_modules', 'styled-components'),
//     },
//     extensions: ['.js', '.jsx'],
//   },
//   plugins: 'babel-plugin-styled-components',
// };

// // webpack.optimize.ModuleConcatenationPlugin()