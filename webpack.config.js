const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'cumulus.bundle.js',
        library: ['cumulus'],
    },
    optimization: {
        minimize: true,
    }
};