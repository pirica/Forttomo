const functions = require('firebase-functions');
const SECRET_KEY = require('./secret_key.json');

exports.secretKey = functions.https.onRequest(async (request, response) => {
  const userSecretKey = request.query.key;
  const secretKey = SECRET_KEY.key;

  response.send({ isCorrect: userSecretKey === secretKey });
});
