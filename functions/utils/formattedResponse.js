module.exports = (statusCode, body) => ({
  statusCode,
  body: JSON.stringify(body),
});
