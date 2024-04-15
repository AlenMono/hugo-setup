const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: "development",
    entry: ["./assets/js/app.js"],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.css$/,
                use: [
                    // MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ],
            },
        ],
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"],
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "assets", "js"),
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
        }),
        // new MiniCssExtractPlugin()
    ],
};
