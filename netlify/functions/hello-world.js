// eslint-disable-next-line func-names
exports.handler = async function () {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello world!',
    }),
  };
};
