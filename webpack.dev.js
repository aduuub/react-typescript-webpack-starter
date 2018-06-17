const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
    resolve: {
        alias: {
            app: path.resolve(__dirname, './src'),
            components: path.resolve(__dirname, './src/components'),
            routes: path.resolve(__dirname, './src/routes'),
        },
        extensions: ['.tsx', '.ts', '.js', '.css']
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
            },
            {
                // Needed to load CSS files from packages. EG. leaflet.css
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'resolve-url-loader' },
                ]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    use: [
                        { loader: "css-loader" },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true,
                            }
                        },
                    ],
                    fallback: "style-loader",
                }),
            },
        ]
    },
    output: {
        filename: 'static/js/bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 8080,
        historyApiFallback: true,
    },
    plugins: [
        new ExtractTextPlugin('bundle.css'),

        new HtmlWebpackPlugin({
            template: "index.html"
        })
    ]
};