const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCsExtractPlugin = require("mini-css-extract-plugin");
// const twigLoader = require("twig-loader");
module.exports = {
    // Change le point d'entrée en index.tsx
    entry: "./src/index.tsx",
    // Active le sourcemap pour le debugging
    devtool: "source-map",
    resolve: {
        // Ajoute '.ts' et'.tsx' aux extensions traitées
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    output: {
        filename: "bundle.js"
    },
    devServer: {
        writeToDisk: true
    },
    module: {
        rules: [

            {
                test: /\.html$/i,

                use: [{
                    loader: 'html-loader'

                }]
            },

            /*  {
                 test: /\.js$/,
                 exclude: /node_modules/,
                 use: [{
                     loader: "babel-loader", //path.resolve('path/to/loader.js'),
                     options: {  }
                 }]
             }, */
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
            }, // Tous les fichiers en `.ts` ou `.tsx` seront traités en utilisant `awesome-typescript-loader`
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            // compiling twig js : 
            /* {
                 test: /\.twig$/,
                 use: [
                     'twig-loader',
                     'html-loader',

                 ]
             } */
        ],
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        /* new twigLoader({
            filename: "[name].html"
        }), */

        new miniCsExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
};