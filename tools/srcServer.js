import express from 'express';
import webpack from 'webpack';
import path from 'path';
import webpackConfig from '../webpack.config.dev';
import open from 'open';
import chalk from 'chalk';

const port = process.env.PORT || 4326;
const host = process.env.IP || 'localhost';

console.log(`Starting on ${host}:${port}`);

const app = express();
const compiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, host, function(err) {
  if(err) {
    console.log(chalk.red(err)); // eslint-disable-line no-console
  } else {
    open(`http://${host}:${port}`);
  }
});
