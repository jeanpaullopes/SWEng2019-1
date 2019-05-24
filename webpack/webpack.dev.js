const webpack = require('webpack');

const commonPaths = require('./paths');

module.exports = {
    mode: 'development',
    devServer: {
        contentBase: commonPaths.outputPath,
        compress: true,
        historyApiFallback: true,
        hot: true,
        host: 'localhost',
        open: true,
        port: 3000
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};
