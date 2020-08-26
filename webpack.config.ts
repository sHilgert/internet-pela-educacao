const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.ts',
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test:  /\.ts/,
        use: 'ts-loader',
        include: [path.resolve(__dirname, 'src')]
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        include: [path.resolve(__dirname, 'src')],
        exclude: /index.html/,
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: [path.resolve(__dirname, 'src')]
      },
      {
        test: /\.svg$/,
        use: ['svg-inline-loader'],
        include: [path.resolve(__dirname, 'src')]
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Internet pela Educação - Um movimento pelo acesso ilimitado a conteúdos de educação',
      template: './src/index.html',
    })
  ]
}
