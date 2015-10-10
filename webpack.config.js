module.exports = {
    entry: './client/src/index.js',
    output: {
        path: './client/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    }
};