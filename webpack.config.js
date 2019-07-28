const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'), // output directory
        filename: "[name].js" // name of the generated bundle
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                loader: ["style-loader", "css-loader?sourceMap", "sass-loader?sourceMap"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
            inject: "body"
        })
    ]
};
