const jwt = require('jsonwebtoken');
const { jwtSecretKey } = require('../config/auth.config');

function generateJWT(email) {
  const token = jwt.sign({ email: email }, jwtSecretKey, { expiresIn: '1h' });
  return token;
}

module.exports = generateJWT;