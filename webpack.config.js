const path = require('path');


module.exports = {
    entry: {
        app: './src/index.js',
        newModule: './src/newModule.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}