const commonPaths = require('./paths');

const webpack = require('webpack');

module.exports = {
    mode: 'development',
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
