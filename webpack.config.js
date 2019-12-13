const path = require('path');

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
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: 'babel-plugin-styled-components',
};
