const chalk = require('chalk');
const { DateTime } = require('luxon');

// eslint-disable-next-line func-names
exports.handler = async function () {
  const date = DateTime.now();
  console.log(chalk.white(date));
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello world!',
    }),
  };
};
