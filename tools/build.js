import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

/*eslint-disable no-console*/

console.log(chalk.blue('Generating minified bundle for production...'));

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    console.log(chalk.red(err));
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    console.log(chalk.bold.red(`${jsonStats.errors.length} ERRORS:`));
    jsonStats.errors.map(error => console.log(chalk.red(error)));
  }

  if (jsonStats.hasWarnings) {
    console.log(chalk.bold.yellow(`${jsonStats.errors.length} WARNINGS:`));
    jsonStats.errors.map(error => console.log(chalk.yellow(error)));
  }

  console.log(`Webpack Stats: ${stats}`);
  console.log(chalk.green('Webpack build completed in /dist'));
  return 0;
});
