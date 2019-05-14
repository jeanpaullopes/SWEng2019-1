const path = require('path');

const paths = {
    asset: 'asset',
    public: 'public',
    src: 'src'
};

module.exports = {
    root: path.resolve(__dirname, '../'),
    assetPath: path.resolve(__dirname, '../', paths.asset),
    entryPath: path.resolve(__dirname, '../', `${paths.src}/index.js`),
    outputPath: path.resolve(__dirname, '../', paths.public),
    templatePath: path.resolve(__dirname, '../', `${paths.src}/index.html`),
    cssFolder: `${paths.asset}/css`,
    fontsFolder: `${paths.asset}/font`,
    imagesFolder: `${paths.asset}/image`,
    jsFolder: `${paths.asset}/js`
};
