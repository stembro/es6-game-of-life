import express from 'express';
import path from 'path';
import open from 'open';
import chalk from 'chalk';

const port = process.env.PORT || 3000;
const host = process.env.IP || 'localhost';

const app = express();

app.use(express.static('dist'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, host, function(err) {
  if(err) {
    console.log(chalk.red(err)); // eslint-disable-line no-console
  } else {
    open(`http://${host}:${port}`);
  }
});
