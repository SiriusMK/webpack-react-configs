const path = require('path');

module.exports = {
    entry: path.join(__dirname, '/../src/index.js'),
    output: {
        path: path.join(__dirname, '/../public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    compact: false
                }
            },
            {
                test: /\.(css|sass|scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: ['file-loader', 'image-webpack-loader']
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: 'file-loader'
            }
        ],
    },
    mode: 'development',
    devtool: 'eval',
    devServer: {
        port: 8081,
        historyApiFallback: {
            index: 'public/index.html'
        }
    }
};