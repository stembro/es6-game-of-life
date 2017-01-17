import webpack from 'webpack';
import path from 'path';

export default {
    debug: false,
    devtool: 'source-map',
    noInfo: true,
    entry: './src/index',
    target: 'web',
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'app.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin()
    ],
    resolveLoader: {
      root: path.resolve(__dirname, 'node_modules')
    },
    module: {
        loaders: [
            { test: /\.js$/, include: path.resolve(__dirname, 'src'), loader: 'babel' },
            {test: /\.css$/, loaders: ['style','css']}
        ]
    }
};
