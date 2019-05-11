const commonPaths = require('./paths');

const webpack = require('webpack');

module.exports = {
    mode: 'development',
    output: {
        chunkFilename: '[name].js',
        filename: '[name].js',
        path: commonPaths.outputPath
    },
    devServer: {
        contentBase: commonPaths.outputPath,
        compress: true,
        hot: true,
        host: 'localhost',
        open: true,
        port: 3000
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};
