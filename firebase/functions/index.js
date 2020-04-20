const functions = require('firebase-functions');
const SECRET_KEY = require('./secret_key.json');

exports.secretKey = functions.https.onCall(data => {
  const userSecretKey = data.key;
  const secretKey = SECRET_KEY.key;

  return { isCorrect: userSecretKey === secretKey };
});
