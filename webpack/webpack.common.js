const commonPaths = require('./paths');

const htmlWebpackPlugin = require('html-webpack-plugin');
const scriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const webpack = require('webpack');

const devMode = process.env.NODE_ENV === 'development' ? true : false;

module.exports = {
    entry: commonPaths.entryPath,
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(js|jsx|scss)$/,
                loader: 'eslint-loader',
                exclude: /(node_modules)/,
                options: {
                    emitWarning: devMode
                }
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    devMode ? 'style-loader' : miniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: devMode ? true : false,
                            modules: true,
                            camelCase: true,
                            localIdentName: '[local]___[hash:base64:5]'
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(gif|jpg|png|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: commonPaths.imagesFolder
                        }
                    }
                ]
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: commonPaths.fontsFolder
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['*', '.js', '.jsx', '.css', '.scss']
    },
    performance: {
        hints: 'warning', // enum
        maxAssetSize: 200000, // int (in bytes),
        maxEntrypointSize: 400000, // int (in bytes)
        assetFilter: function(assetFilename) {
            // Function predicate that provides asset filenames
            return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
        }
    },
    target: 'web',
    plugins: [
        new htmlWebpackPlugin({
            minify: true,
            template: commonPaths.templatePath
        }),
        new scriptExtHtmlWebpackPlugin({
            defaultAttribute: 'async'
        }),
        new webpack.ProgressPlugin()
    ]
};
