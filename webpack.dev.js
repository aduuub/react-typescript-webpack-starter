const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
    resolve: {
        alias: {
            app: path.resolve(__dirname, './src'),
            components: path.resolve(__dirname, './src/components'),
        },
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                enforce: 'pre',
                loader: 'tslint-loader',
                exclude: [
                    /node_modules/,
                    /\.prod\.tsx?$/
                ],
                options: {
                    emitErrors: true,
                }
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: [
                    /node_modules/,
                    /\.prod\.tsx?$/
                ],
                options: {
                    configFile: 'tsconfig.json',
                }
            }
        ]
    },
    output: {
        filename: 'static/js/bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 3000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html"
        })
    ]
};