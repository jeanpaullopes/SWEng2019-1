const commonPaths = require('./paths');

const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const scriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const styleLintPlugin = require('stylelint-webpack-plugin');
const webpack = require('webpack');

const devMode = process.env.NODE_ENV === 'development' ? true : false;

module.exports = {
    entry: commonPaths.entryPath,
    output: {
        chunkFilename: devMode ? `${commonPaths.jsFolder}/[name].js` : `${commonPaths.jsFolder}/[name].[chunkhash].js`,
        filename: devMode ? `${commonPaths.jsFolder}/[name].js` : `${commonPaths.jsFolder}/[name].[hash].js`,
        publicPath: '/',
        path: commonPaths.outputPath
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(js)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'eslint-loader',
                    options: {
                        emitWarning: devMode
                    }
                }
            },
            {
                test: /\.(js)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(scss)$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: devMode ? 'style-loader' : miniCssExtractPlugin.loader,
                        options: {
                            hmr: devMode,
                            sourceMap: devMode
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            camelCase: false,
                            modules: true,
                            localIdentName: '[local]',
                            sourceMap: devMode
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: devMode
                        }
                    }
                ]
            },
            {
                test: /\.(gif|jpg|png)$/,
                exclude: /(node_modules)/,
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
                exclude: /(node_modules)/,
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
        extensions: ['*', '.js', '.scss']
    },
    performance: {
        hints: 'warning', // enum
        maxAssetSize: 250000, // int (in bytes),
        maxEntrypointSize: 400000, // int (in bytes)
        assetFilter: function (assetFilename) {
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
        new miniCssExtractPlugin({
            chunkFilename: devMode ? `${commonPaths.cssFolder}/[name].css` : `${commonPaths.cssFolder}/[name].[hash].css`,
            filename: devMode ? `${commonPaths.cssFolder}/[name].css` : `${commonPaths.cssFolder}/[name].[hash].css`
        }),
        new styleLintPlugin({
            configFile: '.stylelintrc',
            context: './src',
            emitErros: devMode,
            failOnError: false,
            files: [
                'asset/scss/**/*.scss',
                'component/**/*.scss'
            ],
            syntax: 'scss'
        }),
        new webpack.ProgressPlugin()
    ]
};
