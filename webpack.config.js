const path = require('path');


module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        // This is the default chunkFileName, webpack support dynamic import as default
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}