const path = require('path');

const paths = {
    src: path.resolve(__dirname, 'src'),
    dist: path.resolve(__dirname, 'dist')
};

const config = {
    context: paths.src,
    entry: {
        app: './index'
    },
    output: {
        path: paths.dist,
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.ts']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    devtool: 'inline-source-map',
    mode: 'development'
};

module.exports = config;
