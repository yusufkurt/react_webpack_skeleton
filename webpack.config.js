const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let configDev = {
    mode: 'development',
    entry: {
        index: './src/js/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].bundle.js',
        clean: true
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    devServer: {
        static: './dist',
        // devMiddleware: {
        //   writeToDisk: true
        // }
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/html/index.html', title: 'ReactSuper' }),
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
            { test: /\.css$/, use: [MiniCssExtractPlugin.loader, { loader: "css-loader" }] },
            {
                test: /\.?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    }
}

module.exports = configDev;