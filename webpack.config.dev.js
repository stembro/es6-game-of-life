import webpack from 'webpack';
import path from 'path';

export default {
    debug: true,
    devtool: 'cheap-module-eval-source-map',
    noInfo: false,
    entry: [
        'webpack-hot-middleware/client?reload=true',
        './src/index'
    ],
    target: 'web',
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'app.js'
    },
    devServer: {
        contentBase: './src'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ],
    resolveLoader: {
      root: path.resolve(__dirname, 'node_modules')
    },
    module: {
        loaders: [
            { test: /\.js$/, include: path.resolve(__dirname, 'src'), loaders: ['babel'] },
            {test: /\.css$/, loaders: ['style','css']}
        ]
    }
};
