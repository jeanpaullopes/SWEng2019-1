const path = require('path');

const paths = {
    asset: 'dist/asset',
    dist: 'dist',
    src: 'src'
};

module.exports = {
    root: path.resolve(__dirname, '../'),
    entryPath: path.resolve(__dirname, '../', `${paths.src}/index.jsx`),
    outputPath: path.resolve(__dirname, '../', paths.dist),
    templatePath: path.resolve(__dirname, '../', `${paths.src}/index.html`),
    cssFolder: path.resolve(__dirname, '../', `${paths.asset}/css`),
    fontsFolder: path.resolve(__dirname, '../', `${paths.asset}/font`),
    imagesFolder: path.resolve(__dirname, '../', `${paths.asset}/image`),
    jsFolder: path.resolve(__dirname, '../', `${paths.asset}/js`)
};
