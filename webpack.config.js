const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCsExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    module: {
        rules: [{
                test: /\.html$/i,

                use: [{
                    loader: 'html-loader'

                }]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader", //path.resolve('path/to/loader.js'),
                    options: { /* ... */ }
                }]
            },
            {
                test: /\.(gif|png|jpg|svg)$/i,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',

                ]
            }
        ],
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new miniCsExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
};