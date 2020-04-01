const htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    module: {
        rules: [{
            test: /\.html$/i,

            use: [{
                loader: 'html-loader'

            }]
        }, ],
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
};