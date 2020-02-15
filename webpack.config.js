var path = require('path');
var {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: {
        index: './src/js/meituan.js',
        info: './src/js/info.js',
    },
    output: {
        filename: '[name]-[hash:3].js',
        // path: __dirname + '/out',
        path: path.resolve(__dirname, 'out'),
    },
    module: { //loader
        rules: [{
            test: /\.js$/,
            use: ['babel-loader'],
        }, {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        }, {
            test: /\.(png|jpg|svg|woff|ttf|eot)$/,
            use: ['url-loader?limit=1000&name=./[name].[ext]']
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name]-[hash:5].css',
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './meituan-index.html',
            filename: 'index.html',
            minify: {
                removeComments: true,
            },
            chunks: ['index'],
        }),
        new HtmlWebpackPlugin({
            template: './meituan-info.html',
            filename: 'info.html',
            minify: {
                removeComments: true,
            },
            chunks: ['info'],
        }),
    ],
    mode: 'development',
    devServer: {
        port: '9999',
    }
}