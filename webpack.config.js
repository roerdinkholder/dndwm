var CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: './client/src/index.js',
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    },
    output: {
        path: './client/dist',
        filename: 'bundle.js'
    },
    plugins: [
        new CompressionPlugin({
            asset: "{file}.gz",
            algorithm: "gzip",
            regExp: /\.js$|\.html$|\.css$/,
            threshold: 0,
            minRatio: 0.8
        })
    ]
};